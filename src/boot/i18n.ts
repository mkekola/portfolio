import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';

const messages = {
  fi: {
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
    about: {
      hello: 'Päivää! Olen Maria 🫡',
      body: 'Opiskelen tietojenkäsittelytiedettä Helsingin yliopistossa. Taustaani kuuluu verkko- ja palvelutehtäviä sekä asiakas- ja tukirooleja, joten osaan yhdistää teknisen ymmärryksen sujuvaan palveluun. Vapaa-aikani vietän valokuvauksen, vaeltamisen ja pelaamisen parissa, jotka ruokkivat uteliaisuuttani ja ongelmanratkaisutaitojani myös työssä. Olen aina innokas oppimaan uusia taitoja ja tarttumaan haasteisiin, jotka auttavat minua kasvamaan sekä henkilökohtaisesti että ammatillisesti.',
    },
    hobbies: {
      title: 'Harrastukset',
      photo: 'Valokuvaus',
      games: 'Pelaaminen',
      hiking: 'Vaeltaminen',
      art: 'Taiteilu',
      cooking: 'Kokkaus',
      travel: 'Matkustelu',
      climbing: 'Kiipeily',
      skiing: 'Laskettelu',
    },
    education: {
      bsc: {
        degree: 'Kandidaatin tutkinto, Tietojenkäsittelytiede',
        school: 'Helsingin yliopisto',
        period: '2021 - Nykyhetki',
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
        role: 'Rahastonhoitaja',
        organization: 'Ylioppilaskamerat ry',
        period: '2023 Tammikuu - Nykyhetki',
        details: [
          'Yhdistyksen talouden hoitaminen',
          'Budjetointi ja raportointi',
          'Tilinpäätösen laatiminen',
        ],
      },
      boardMember: {
        role: 'Hallituksen jäsen',
        organization: 'Ylioppilaskamerat ry',
        period: '2023 Tammikuu - Nykyhetki',
        details: [
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
    about: {
      hello: "Hello! I'm Maria 🫡",
      body: "I'm a computer science student at the University of Helsinki. My background includes network and service tasks as well as customer and support roles, so I know how to combine technical understanding with smooth service. I spend my free time doing photography, hiking, and playing games which fuel my curiosity and problem-solving at work too. I'm always eager to learn new skills and take on challenges that help me grow both personally and professionally.",
    },
    hobbies: {
      title: 'Hobbies & Interests',
      photo: 'Photography',
      games: 'Gaming',
      hiking: 'Hiking',
      art: 'Art',
      cooking: 'Cooking',
      travel: 'Travel',
      climbing: 'Gym Climbing',
      skiing: 'Downhill Skiing',
    },
    education: {
      bsc: {
        degree: 'B.Sc. Computer Science',
        school: 'University of Helsinki',
        period: '2021 - Present',
      },
    },
    experience: {
      finavia: {
        role: 'Network Intern',
        company: 'Finavia',
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
        role: 'Treasurer',
        organization: 'Ylioppilaskamerat ry',
        period: 'January 2023 - Present',
        details: [
          "Managing the association's finances",
          'Budgeting and Reporting',
          'Preparing Financial Statements',
        ],
      },
      boardMember: {
        role: 'Board Member',
        organization: 'Ylioppilaskamerat ry',
        period: 'January 2023 - Present',
        details: [
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
  app.use(i18n);
});

export { i18n };
