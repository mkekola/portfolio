export interface CvFile {
  href: string;
  name: string;
}

export const cvFiles: Record<'fi' | 'en', CvFile> = {
  fi: { href: '/maria-kekola-cv-fi.pdf', name: 'Maria-Kekola-CV-2026-FI.pdf' },
  en: { href: '/maria-kekola-cv-en.pdf', name: 'Maria-Kekola-CV-2026-EN.pdf' },
};

export function cvFileFor(locale: string): CvFile {
  return locale === 'fi' ? cvFiles.fi : cvFiles.en;
}
