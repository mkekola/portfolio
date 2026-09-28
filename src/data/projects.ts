export interface Project {
  key: string;
  image: string;
  displayUrl: string;
  liveHref: string;
  githubHref: string;
  tags: string[];
  caseStudy?: boolean;
}

export const projects: Project[] = [
  {
    key: 'preppis',
    image: '/project-preppis.jpg',
    displayUrl: 'preppis.kekola.fi',
    liveHref: 'https://preppis.kekola.fi',
    githubHref: 'https://github.com/mkekola/Preppis',
    tags: ['Nuxt', 'Vue', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    caseStudy: true,
  },
  {
    key: 'kulkuri',
    image: '/project-kulkuri.jpg',
    displayUrl: 'kulkuri.kekola.fi',
    liveHref: 'https://kulkuri.kekola.fi',
    githubHref: 'https://github.com/mkekola/kulkuri',
    tags: ['Vue 3', 'TypeScript', 'Vite', 'MapLibre GL JS', 'MQTT'],
    caseStudy: true,
  },
  {
    key: 'cv',
    image: '/project-cv.jpg',
    displayUrl: 'kekola.fi',
    liveHref: 'https://kekola.fi',
    githubHref: 'https://github.com/mkekola/portfolio',
    tags: ['Vue', 'Quasar', 'TypeScript', 'SCSS'],
  },
];
