import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';

const messages = {
  fi: {
    scrollTop: 'Takaisin ylös',
    nav: {
      about: 'Tietoa minusta',
      education: 'Koulutus',
      experience: 'Kokemus',
      volunteer: 'Vapaaehtoistyö',
      skills: 'Taidot',
      contact: 'Yhteystiedot',
    },
    section: {
      about: 'Tietoa minusta',
      education: 'Koulutus',
      experience: 'Kokemus',
      volunteer: 'Vapaaehtoistyö',
      skills: 'Taidot',
      contact: 'Yhteystiedot',
    },
    hero: {
      badge: 'Avoinna uusille mahdollisuuksille',
      tagline: 'Suuntana frontend & UI',
      subtitle:
        'Tuore tietojenkäsittelytieteen kandidaatti Helsingin yliopistosta. Etsin ensisijaisesti kokopäivätyötä frontendin ja UI-suunnittelun parista.',
      downloadCv: 'Lataa CV',
      contactCta: 'Ota yhteyttä',
    },
    about: {
      hello: 'Helou! Maria täällä 👋🏻',
      body: 'Valmistuin tietojenkäsittelytieteen kandidaatiksi Helsingin yliopistosta toukokuussa 2026. Etsin nyt ensisijaisesti kokopäivätyötä, joka haastaa ja kehittää "työelämä minääni". Maisterin tutkinto etenee taustalla työn ohessa, kun aikataulu sen sallii. Taustani verkko- ja palvelutehtävistä sekä asiakastyöstä on opettanut yhdistämään teknisen osaamisen ja ihmisten kuuntelemisen. Vapaa-ajalla tartun usein kameraan, retkeilyreppuun tai peliohjaimeen. Sama uteliaisuus sekä innostuneisuus vie minut uusille poluille ja uusien asioiden pariin myös töissä.',
    },
    hobbies: {
      title: 'Harrastukset',
      photo: 'Valokuvaus',
      games: 'Pelaaminen',
      hiking: 'Vaeltaminen',
      cooking: 'Ruoanlaitto',
      travel: 'Matkustelu',
      climbing: 'Kiipeily',
      skiing: 'Laskettelu',
    },
    education: {
      msc: {
        degree: 'Maisterin tutkinto, Tietojenkäsittelytiede',
        school: 'Helsingin yliopisto',
        period: '2026 Syyskuu - Nykyhetki',
      },
      bsc: {
        degree: 'Kandidaatin tutkinto, Tietojenkäsittelytiede',
        school: 'Helsingin yliopisto',
        period: '2021 - 2026 Toukokuu',
      },
    },
    experience: {
      finavia: {
        role: 'Tietoliikenneharjoittelija',
        company: 'Finavia Oyj',
        period: '2023 Toukokuu - Nykyhetki',
        details: [
          'Konfigurointi',
          'Verkonvalvonta',
          'Vianmääritys',
          'Dokumentointi',
          'Asiakastuki',
        ],
      },
      csfm: {
        role: 'Palveluesimies',
        company: 'CSF Security Oy',
        period: '2019 Kesäkuu - 2022 Lokakuu',
        details: [
          'Tiimin johtaminen',
          'Asiakaspalvelu',
          'Hälytyksiin reagointi',
          'Raportointi',
          'Vuorosuunnittelu',
          'Koulutus',
        ],
      },
      csfc: {
        role: 'Arvokuljettaja',
        company: 'CSF Security Oy',
        period: '2017 Joulukuu - 2019 Kesäkuu',
        details: ['Arvokuljetukset', 'Asiakaspalvelu', 'Hälytyksiin reagointi', 'Raportointi'],
      },
    },
    volunteer: {
      treasurer: {
        role: 'Rahastonhoitaja, hallituksen jäsen',
        organization: 'Ylioppilaskamerat ry',
        period: '2023 Tammikuu - 2025 Joulukuu',
        details: [
          'Yhdistyksen talouden hoitaminen',
          'Budjetointi ja raportointi',
          'Tilinpäätösen laatiminen',
          'Yhdistyksen toiminnan suunnittelu',
          'Tapahtumien järjestäminen',
          'Viestintä ja markkinointi',
        ],
      },
      officer: {
        role: 'Tiedottaja, Some-vastaava',
        organization: 'TKO-äly ry',
        period: '2022 Tammikuu - 2023 Joulukuu',
        details: [
          'Yhdistyksen viestinnän hoitaminen',
          'Sähkispostilistat ja somekanavat',
          'Sisällöntuotanto',
          'Tapahtumien mainostaminen',
        ],
      },
    },
    skills: {
      items: {
        python: { label: 'Python', note: 'Flask' },
        sql: { label: 'SQL', note: 'SQLite' },
        js: { label: 'JavaScript/TypeScript', note: 'React, Vue.js, Node.js, Quasar' },
        git: { label: 'Versionhallinta', note: 'Git, GitHub' },
        docker: { label: 'Konttiteknologiat', note: 'Docker' },
        web: { label: 'Web-teknologiat', note: 'HTML, CSS' },
        design: { label: 'Muotoilu', note: 'Figma, Blender' },
        os: { label: 'Käyttöjärjestelmät', note: 'Linux, Windows, macOS' },
        office: { label: 'Toimisto-ohjelmistot', note: 'Microsoft Office, Google Workspace' },
        photo: { label: 'Kuvankäsittely', note: 'Adobe Photoshop, Lightroom' },
        lang: {
          label: 'Kielet',
          note: 'Suomi (äidinkieli), Englanti (sujuva), Japani (perusteet)',
        },
        soft: {
          label: 'Muut taidot',
          note: 'Tiimityö, kommunikointi, tiimijohtaminen, mukautuvuus, ongelmanratkaisu, asiakaspalvelu, kriittinen ajattelu, luovuus',
        },
      },
    },
    contact: {
      title: 'Yhteystiedot',
    },
  },
  en: {
    scrollTop: 'Back to top',
    nav: {
      about: 'About Me',
      education: 'Education',
      experience: 'Experience',
      volunteer: 'Volunteer',
      skills: 'Skills',
      contact: 'Contact',
    },
    section: {
      about: 'About Me',
      education: 'Education',
      experience: 'Experience',
      volunteer: 'Volunteer',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      badge: 'Open to new opportunities',
      tagline: 'Heading toward frontend & UI',
      subtitle:
        "Fresh Computer Science graduate from the University of Helsinki. I'm primarily looking for full-time work in frontend and UI design.",
      downloadCv: 'Download CV',
      contactCta: 'Get in touch',
    },
    about: {
      hello: "Hey! Maria here 👋🏻",
      body: "I graduated with a B.Sc. in Computer Science from the University of Helsinki in May 2026. I'm primarily looking for full-time work that challenges and grows my professional self. A Master's degree is progressing in the background alongside work, when time allows. My experience in network and service roles, plus hands-on customer work, taught me to combine technical skills with listening to people. In my free time I'm usually behind a camera, on a hiking trail, or holding a game controller. The same curiosity and enthusiasm that takes me down new trails also draws me toward new things at work.",
    },
    hobbies: {
      title: 'Hobbies & Interests',
      photo: 'Photography',
      games: 'Gaming',
      hiking: 'Hiking',
      cooking: 'Cooking',
      travel: 'Travel',
      climbing: 'Gym Climbing',
      skiing: 'Downhill Skiing',
    },
    education: {
      msc: {
        degree: 'M.Sc. Computer Science',
        school: 'University of Helsinki',
        period: 'September 2026 - Present',
      },
      bsc: {
        degree: 'B.Sc. Computer Science',
        school: 'University of Helsinki',
        period: '2021 - May 2026',
      },
    },
    experience: {
      finavia: {
        role: 'Network Trainee',
        company: 'Finavia Oyj',
        period: 'May 2023 - Present',
        details: [
          'Configuration',
          'Network Monitoring',
          'Troubleshooting',
          'Documentation',
          'Customer Support',
        ],
      },
      csfm: {
        role: 'Service Supervisor',
        company: 'CSF Security Oy',
        period: 'June 2019 - October 2022',
        details: [
          'Team Leadership',
          'Customer Service',
          'Alarm Response',
          'Reporting',
          'Shift Planning',
          'Training',
        ],
      },
      csfc: {
        role: 'Cash-in-Transit Officer',
        company: 'CSF Security Oy',
        period: 'December 2017 - June 2019',
        details: ['Cash-in-Transit', 'Customer Service', 'Alarm Response', 'Reporting'],
      },
    },
    volunteer: {
      treasurer: {
        role: 'Treasurer and Board Member',
        organization: 'Ylioppilaskamerat ry',
        period: 'January 2023 - December 2025',
        details: [
          "Managing the association's finances",
          'Budgeting and Reporting',
          'Preparing Financial Statements',
          'Planning the association’s activities',
          'Organizing Events',
          'Communication and Marketing',
        ],
      },
      officer: {
        role: 'Communications Officer and Social Media Manager',
        organization: 'TKO-äly ry',
        period: 'January 2022 - December 2023',
        details: [
          "Handling the association's communications",
          'Email Lists and Social Media Channels',
          'Content Creation',
          'Event Promotion',
        ],
      },
    },
    skills: {
      items: {
        python: { label: 'Python', note: 'Flask' },
        sql: { label: 'SQL', note: 'SQLite' },
        js: { label: 'JavaScript/TypeScript', note: 'React, Vue.js, Node.js, Quasar' },
        git: { label: 'Version Control', note: 'Git, GitHub' },
        docker: { label: 'Container Technologies', note: 'Docker' },
        web: { label: 'Web Technologies', note: 'HTML, CSS' },
        design: { label: 'Design', note: 'Figma, Blender' },
        os: { label: 'Operating Systems', note: 'Linux, Windows, macOS' },
        office: { label: 'Office Software', note: 'Microsoft Office, Google Workspace' },
        photo: { label: 'Photo Editing', note: 'Adobe Photoshop, Lightroom' },
        lang: {
          label: 'Languages',
          note: 'Finnish (native), English (fluent), Japanese (basics)',
        },
        soft: {
          label: 'Other Skills',
          note: 'Teamwork, Communication, Team Leadership, Adaptability, Problem Solving, Customer Service, Critical Thinking, Creativity',
        },
      },
    },
    contact: {
      title: 'Contact',
    },
  },
};

function initialLocale() {
  const saved = localStorage.getItem('locale');
  if (saved) return saved;
  const lang = navigator.language?.toLowerCase() || 'en';
  return lang.startsWith('fi') ? 'fi' : 'en';
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: initialLocale(),
  fallbackLocale: 'en',
  messages,
});

export default boot(({ app }) => {
  document.documentElement.lang = i18n.global.locale.value;
  app.use(i18n);
});

export { i18n };
