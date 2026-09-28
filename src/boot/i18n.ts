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
      portfolioCta: 'Katso portfolio',
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
    portfolio: {
      back: 'Takaisin etusivulle',
      backToPortfolio: 'Takaisin portfolioon',
      title: 'Portfolio',
      subtitle:
        'Muutama projekti, joissa pääsen kehittämään frontend- ja UI-osaamistani. Samalla opettelen hyödyntämään tekoälytyökaluja, kuten Claude Codea, osana omaa työskentelyäni.',
      viewLive: 'Kokeile',
      caseStudyCta: 'Lue case study',
      caseStudyEyebrow: 'Case study',
      caseStudies: {
        preppis: {
          dek: 'Resepti- ja ateriasuunnittelusovellus, joka auttaa suunnittelemaan viikon ruoat etukäteen ja muuttaa suunnitelman suoraan ostoslistaksi.',
          metaRole: 'Suunnittelu & toteutus, 2026',
          metaStack: ['Nuxt · Vue · TypeScript', 'Tailwind CSS · Supabase'],
          heroCaption: 'Etusivu, jossa viikon ruoat suunnitellaan ennen kuin nälkä ehtii päättää puolestasi.',
          contextTitle: 'Lähtökohta',
          contextBody:
            'Tiedän sen tunteen. On nälkä, jääkaapissa ei ole mitään järkevää, ja tilaan taas jotain valmista. Halusin sovelluksen joka pakottaa suunnittelemaan viikon ruoat silloin kun on rauhallinen hetki ja pää selvä, ei silloin kun vatsa jo kurisee. Preppis hakee reseptit, kokoaa ne viikkokalenteriin ja muuttaa suunnitelman suoraan ostoslistaksi.',
          decisionsTitle: 'Kolme päätöstä matkan varrelta',
          decisionsIntro: 'Tällaisia ongelmia ei huomaa valmiista sovelluksesta. Ne löytää vasta kun tekee sen itse.',
          decisions: [
            {
              tag: 'Ongelma',
              title: 'Otsikko ei kerro kaikkea',
              body: "Jos hakee kanaa ja pastaa, moni hyvä resepti jäisi löytymättä pelkän nimen perusteella tehdyssä haussa, koska resepti saattaa olla nimeltään vaikka 'Perjantain lempparimme'. Nyt haku ja suodattimet käyvät läpi oikean aineslistan, joten resepti löytyy vaikka nimi ei vihjaisi mistään.",
            },
            {
              tag: 'Ongelma',
              title: 'Viisi reseptiä, yksi ostoslista',
              body: 'Kun viikkoon valitsee useamman reseptin, samat raaka-aineet toistuvat monessa eri määrässä. Ostoslista olisi sekava, jos jokainen resepti vain listattaisiin erikseen. Nyt sovellus laskee ainekset yhteen kaikista valituista resepteistä ja jaottelee ne kategorioihin, kuten proteiinit ja maitotuotteet, niin että lista muistuttaa oikeaa kauppalistaa.',
            },
            {
              tag: 'Ongelma',
              title: 'Ei pakotettua kirjautumista',
              body: 'Moni luopuu tällaisesta sovelluksesta heti, kun pitäisi luoda tili. Halusin että suosikit ja viikkosuunnitelma tallentuvat heti ilman salasanaa. Selain saa taustalla oman tunnisteen, jonka perusteella tiedot tallentuvat, joten käyttö tuntuu välittömältä.',
            },
          ],
          nextTitle: 'Mitä tekisin seuraavaksi',
          nextItems: [
            'Reseptien annosmäärän skaalaus, jotta ainesosat laskisivat automaattisesti oikeaan henkilömäärään.',
            'Oma tili, jolla suunnitelma ja suosikit siirtyisivät laitteesta toiseen.',
            'Mahdollisuus lisätä omia reseptejä valmiiden joukkoon.',
          ],
        },
        kulkuri: {
          dek: 'Reaaliaikainen HSL-liikennekartta. Bussit, raitiovaunut, metrot, junat ja lautat liikkuvat kartalla juuri niin kuin ne oikeasti liikkuvat kaupungissa, ei aikataulunumeroina.',
          metaRole: 'Suunnittelu & toteutus, 2026',
          metaStack: ['Vue 3 · TypeScript · Vite', 'MapLibre GL JS · HSL:n reaaliaikadata'],
          heroCaption: 'Live-tilanne Helsingin keskustassa. Jokainen piste on oikea, juuri nyt liikkeellä oleva ajoneuvo.',
          contextTitle: 'Lähtökohta',
          contextBody:
            'Valmiit joukkoliikennesovellukset näyttävät aikatauluja. Bussi 550 lähtee 14:32, ja siihen se jää. Ne eivät kerro, tuntuuko kaupunki juuri nyt vilkkaalta vai hiljaiselta, tai onko se bussi oikeasti matkalla vai jumissa Mannerheimintiellä. Minä halusin nähdä liikenteen sellaisena kuin se oikeasti on: elävänä ja liikkuvana, en pelkkinä numeroina listassa.',
          decisionsTitle: 'Kolme päätöstä matkan varrelta',
          decisionsIntro: 'Tällaisia ongelmia ei huomaa valmiista sovelluksesta. Ne löytää vasta kun tekee sen itse.',
          decisions: [
            {
              tag: 'Ongelma',
              title: 'Pomppivat pisteet',
              body: 'Ajoneuvon sijainti ei päivity kartalle joka sekunti, vaan pieninä pyrähdyksinä muutaman sekunnin välein. Suoraan piirrettynä bussit olisivat hypähdelleet pisteestä toiseen kuin teleporttaisivat. Nyt selain muistaa jokaisen ajoneuvon kaksi viime sijaintia ja liikuttaa sitä pehmeästi niiden välillä, jolloin liike näyttää oikealta ajamiselta.',
            },
            {
              tag: 'Ongelma',
              title: 'Kaksoisyksiköt',
              body: 'Junat ja metrot kulkevat usein pareittain, mutta jokainen vaunu raportoi sijaintinsa erikseen. Kartalla se näkyi kahtena täysin päällekkäisenä pisteenä, ja näytti siltä että jokin oli rikki. Nyt samalla reitillä ja lähes samassa kohdassa kulkevat parit yhdistyvät yhdeksi merkiksi.',
            },
            {
              tag: 'Ongelma',
              title: 'Täysi kartta',
              body: 'Ruudulla voi olla samaan aikaan kymmeniä liikkuvia ajoneuvoja ja koko reittilista. Vaalealla kartalla väripisteet olisivat hukkuneet taustaan. Tumma pohja nostaa bussit, raitiovaunut ja junat esiin heti, ja koko näkymä alkaa muistuttaa oikeaa liikenteenvalvomon näyttöä.',
            },
          ],
          nextTitle: 'Mitä tekisin seuraavaksi',
          nextItems: [
            'Ryhmittelisin lähekkäiset pisteet yhteen kaukaa zoomatussa näkymässä, ettei kartta näytä sotkulta.',
            'Yhdistäisin häiriötiedotteet karttaan, jotta pysähdys näkyy heti syynä eikä vain hiljaisena pisteenä.',
            'Synkronoisin suosikit laitteiden välillä.',
          ],
        },
      },
      projects: {
        preppis: {
          title: 'Preppis',
          description:
            'Viikkosuunnitteluun tarkoitettu resepti- ja ateriasuunnittelusovellus. Hae reseptejä, suunnittele viikon ateriat ja muodosta ostoslista automaattisesti suunniteltujen reseptien aineksista.',
        },
        kulkuri: {
          title: 'Kulkuri',
          description:
            'Reaaliaikainen HSL-liikennekartta pääkaupunkiseudulle. Bussit, raitiovaunut, metrot, junat ja lautat liikkuvat kartalla pehmeästi animoituna aikataulujen sijaan, ja pysäkin seuraavat lähdöt avautuvat yhdellä klikkauksella.',
        },
        cv: {
          title: 'Tämä CV-sivusto',
          description:
            'Oma verkkosivuni: glassmorphism-tyylinen, täysin responsiivinen ja saavutettava CV, jota olen suunnitellut ja kehittänyt Vue/Quasar-pohjalla, mukaan lukien tumma/vaalea teema ja tulostettava versio.',
        },
      },
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
      portfolioCta: 'View portfolio',
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
    portfolio: {
      back: 'Back to home',
      backToPortfolio: 'Back to portfolio',
      title: 'Portfolio',
      subtitle:
        "A few projects where I get to grow my frontend and UI skills. Along the way, I'm also learning to make the most of AI tools like Claude Code as part of how I work.",
      viewLive: 'View live',
      caseStudyCta: 'Read case study',
      caseStudyEyebrow: 'Case study',
      caseStudies: {
        preppis: {
          dek: "A recipe and meal planning app that helps you plan the week's meals ahead of time and turns that plan straight into a shopping list.",
          metaRole: 'Design & development, 2026',
          metaStack: ['Nuxt · Vue · TypeScript', 'Tailwind CSS · Supabase'],
          heroCaption: "The home view, where the week's meals get planned before hunger makes the decision for you.",
          contextTitle: 'The idea',
          contextBody:
            "I know the feeling. You're hungry, there's nothing sensible in the fridge, and you order takeout again. I wanted an app that forces you to plan the week's meals while you're calm and thinking clearly, not once your stomach is already growling. Preppis searches recipes, gathers them into a weekly calendar, and turns that plan straight into a shopping list.",
          decisionsTitle: 'Three decisions along the way',
          decisionsIntro: 'These are the kinds of problems you only notice once you build the thing yourself.',
          decisions: [
            {
              tag: 'Problem',
              title: 'A title does not tell you everything',
              body: "Searching for chicken and pasta would miss plenty of good recipes if the search only matched titles, since a recipe might just be called something like 'Friday favorite'. Now search and filters look at the actual ingredient list, so a recipe turns up even when its name gives nothing away.",
            },
            {
              tag: 'Problem',
              title: 'Five recipes, one shopping list',
              body: 'Once you pick several recipes for the week, the same ingredients show up again and again in different amounts. Listing each recipe separately would make for a messy shopping list. Now the app adds up ingredients across every recipe you picked and sorts them into categories like proteins and dairy, so the list reads like an actual grocery list.',
            },
            {
              tag: 'Problem',
              title: 'No forced login',
              body: 'Plenty of people give up on an app the moment it asks them to create an account. I wanted favorites and the weekly plan to save right away, without a password. The browser gets its own identity behind the scenes, and everything saves against that, so using the app feels instant.',
            },
          ],
          nextTitle: "What I'd build next",
          nextItems: [
            "Scale ingredient amounts to match how many people you're cooking for.",
            'An account so the plan and favorites carry over between devices.',
            'A way to add your own recipes alongside the ready-made ones.',
          ],
        },
        kulkuri: {
          dek: 'A real-time transit map for HSL. Buses, trams, metros, trains and ferries move across the map the way they actually move through the city, not as timetable numbers.',
          metaRole: 'Design & development, 2026',
          metaStack: ['Vue 3 · TypeScript · Vite', 'MapLibre GL JS · HSL live data'],
          heroCaption: 'Live traffic in downtown Helsinki. Every dot is a real vehicle, moving right now.',
          contextTitle: 'The idea',
          contextBody:
            'Most transit apps show timetables. Bus 550 leaves at 14:32, and that is all you get. They do not tell you whether the city feels busy or quiet right now, or whether that bus is actually on its way or stuck on Mannerheimintie. I wanted to see traffic the way it really is: alive and moving, not just numbers in a list.',
          decisionsTitle: 'Three decisions along the way',
          decisionsIntro: 'These are the kinds of problems you only notice once you build the thing yourself.',
          decisions: [
            {
              tag: 'Problem',
              title: 'Jumpy dots',
              body: "A vehicle's position does not update on the map every second, it arrives in small bursts every few seconds. Drawn directly, buses would hop from point to point like they were teleporting. Now the browser remembers each vehicle's last two positions and eases it between them, so the movement looks like actual driving.",
            },
            {
              tag: 'Problem',
              title: 'Paired vehicles',
              body: 'Trains and metros often run in pairs, but each car reports its own position. On the map that showed up as two dots sitting exactly on top of each other, which looked broken. Now pairs running the same route in nearly the same spot merge into a single marker.',
            },
            {
              tag: 'Problem',
              title: 'A busy map',
              body: 'The screen can hold dozens of moving vehicles and a full route list at once. On a light map, the colored dots would get lost in the background. A dark base makes buses, trams and trains stand out right away, and the whole view starts to feel like a real control room screen.',
            },
          ],
          nextTitle: "What I'd build next",
          nextItems: [
            'Group nearby dots together at low zoom levels, so the map does not turn into a mess.',
            'Bring service alerts onto the map, so a stopped vehicle shows its reason instead of just sitting still.',
            'Sync favorites across devices.',
          ],
        },
      },
      projects: {
        preppis: {
          title: 'Preppis',
          description:
            "A recipe and meal-planning app for the week ahead. Search recipes, plan meals for the week, and automatically generate a shopping list from the planned recipes' ingredients.",
        },
        kulkuri: {
          title: 'Kulkuri',
          description:
            'A real-time public transit map for the Helsinki metropolitan area. Buses, trams, metros, trains and ferries glide across the map with smooth animation instead of static timetables, and a click reveals a stop\'s next departures.',
        },
        cv: {
          title: 'This CV site',
          description:
            'My own site: a glassmorphism-styled, fully responsive and accessible CV that I designed and built on Vue/Quasar, including a light/dark theme and a printable version.',
        },
      },
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
