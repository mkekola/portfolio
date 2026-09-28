import { describe, expect, it } from 'vitest';
import { findCaseStudy, projects } from './projects';

describe('projects', () => {
  it('has unique keys, since the key is the case study URL', () => {
    const keys = projects.map((p) => p.key);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it('points every project at a live site and a repository', () => {
    for (const p of projects) {
      expect(p.liveHref).toMatch(/^https:\/\//);
      expect(p.githubHref).toMatch(/^https:\/\/github\.com\//);
    }
  });

  it('keeps the displayed address in sync with the live link', () => {
    for (const p of projects) {
      expect(p.liveHref).toBe(`https://${p.displayUrl}`);
    }
  });

  it('gives every project an image under public/', () => {
    for (const p of projects) {
      expect(p.image).toMatch(/^\/project-[a-z0-9-]+\.jpg$/);
    }
  });
});

describe('findCaseStudy', () => {
  it('finds a project that has a case study', () => {
    expect(findCaseStudy('kulkuri')?.key).toBe('kulkuri');
  });

  it('returns nothing for a project without a case study', () => {
    const withoutCaseStudy = projects.find((p) => !p.caseStudy);
    expect(withoutCaseStudy).toBeDefined();
    expect(findCaseStudy(withoutCaseStudy!.key)).toBeUndefined();
  });

  it('returns nothing for an unknown key', () => {
    expect(findCaseStudy('does-not-exist')).toBeUndefined();
  });

  it('returns nothing for a repeated route param, which Vue Router gives as an array', () => {
    expect(findCaseStudy(['kulkuri', 'kulkuri'])).toBeUndefined();
  });
});
