import { describe, expect, it } from 'vitest';
import { cvFileFor, cvFiles } from './cv';

describe('cvFileFor', () => {
  it('serves the Finnish CV in Finnish', () => {
    expect(cvFileFor('fi')).toEqual(cvFiles.fi);
  });

  it('serves the English CV in English', () => {
    expect(cvFileFor('en')).toEqual(cvFiles.en);
  });

  it('falls back to English for any other locale', () => {
    expect(cvFileFor('sv')).toEqual(cvFiles.en);
    expect(cvFileFor('')).toEqual(cvFiles.en);
  });

  it('points at PDFs that live in public/ and downloads them under a clean name', () => {
    for (const file of Object.values(cvFiles)) {
      expect(file.href).toMatch(/^\/maria-kekola-cv-(fi|en)\.pdf$/);
      expect(file.name).toMatch(/^Maria-Kekola-CV-\d{4}-(FI|EN)\.pdf$/);
    }
  });
});
