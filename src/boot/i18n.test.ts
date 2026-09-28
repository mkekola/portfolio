import { describe, expect, it } from 'vitest';
import { messages } from './i18n';
import { projects } from 'src/data/projects';

/**
 * Every translatable path in a locale, e.g.
 * `portfolio.caseStudies.kulkuri.decisions.0.title`.
 *
 * Walking arrays as well as objects means a list that gained an item in one
 * language but not the other shows up as a missing path rather than passing.
 */
function collectPaths(value: unknown, prefix = ''): string[] {
  if (Array.isArray(value)) {
    return value.flatMap((item, i) => collectPaths(item, `${prefix}.${i}`));
  }
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, child]) =>
      collectPaths(child, prefix ? `${prefix}.${key}` : key),
    );
  }
  return [prefix];
}

const fiPaths = collectPaths(messages.fi);
const enPaths = collectPaths(messages.en);

describe('translations', () => {
  it('has the same keys in Finnish and English', () => {
    expect(enPaths.filter((p) => !fiPaths.includes(p))).toEqual([]);
    expect(fiPaths.filter((p) => !enPaths.includes(p))).toEqual([]);
  });

  it('has no empty strings', () => {
    for (const [locale, tree] of Object.entries(messages)) {
      const empties = collectPaths(tree).filter((path) => {
        const value = path.split('.').reduce<unknown>((acc, key) => {
          if (acc && typeof acc === 'object') return (acc as Record<string, unknown>)[key];
          return undefined;
        }, tree);
        return typeof value === 'string' && value.trim() === '';
      });
      expect(empties, `empty strings in ${locale}`).toEqual([]);
    }
  });
});

describe('projects match the translations', () => {
  const locales = Object.keys(messages) as (keyof typeof messages)[];

  it('gives every project a title and description in both languages', () => {
    for (const locale of locales) {
      const entries = messages[locale].portfolio.projects as Record<
        string,
        { title: string; description: string }
      >;
      for (const project of projects) {
        expect(entries[project.key], `${project.key} missing from ${locale}`).toBeDefined();
        expect(entries[project.key]?.title).toBeTruthy();
        expect(entries[project.key]?.description).toBeTruthy();
      }
    }
  });

  it('gives every project marked with a case study the full case study content', () => {
    const required = [
      'dek',
      'metaRole',
      'metaStack',
      'heroCaption',
      'contextTitle',
      'contextBody',
      'decisionsTitle',
      'decisionsIntro',
      'decisions',
      'nextTitle',
      'nextItems',
    ];

    for (const locale of locales) {
      const studies = messages[locale].portfolio.caseStudies as Record<
        string,
        Record<string, unknown>
      >;
      for (const project of projects.filter((p) => p.caseStudy)) {
        const study = studies[project.key];
        expect(study, `case study ${project.key} missing from ${locale}`).toBeDefined();
        for (const field of required) {
          expect(study?.[field], `${project.key}.${field} missing from ${locale}`).toBeTruthy();
        }
      }
    }
  });

  it('does not keep case study content for projects that no longer exist', () => {
    const keys = projects.map((p) => p.key);
    for (const locale of locales) {
      const studies = Object.keys(messages[locale].portfolio.caseStudies);
      expect(studies.filter((key) => !keys.includes(key)), `stale case study in ${locale}`).toEqual(
        [],
      );
    }
  });
});
