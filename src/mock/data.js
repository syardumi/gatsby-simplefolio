import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Steve Yardumian | Mobile & Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Steve Yardumian.',
  subtitle: 'I am an AWS, Mobile, & Web Dev.',
  cta: "it's nice to meet you",
};

// ABOUT DATA
export const aboutData = {
  img: 'CopperHill-416.png',
  paragraphOne:
    'And, I love working with technology to create solutions for clients who are just trying to solve the everyday challenges they face. The best feeling for me is to finish a project, step back, and watch customers realize their goals faster and with greater precision.',
  paragraphTwo:
    "Currently living in Philadelphia, I have 11 years experience in the field and have worked with companies whose staff span the world, from Canada to California to even Israel. I've worked on development teams from a size of 2 all the way up to 20.",
  paragraphThree:
    '"What value can I bring to the table?" That question is always the foremost in my head when walking into a meeting while doing my job. And, while we\'re at it, what\'s the answer for you, today?',
  resume1: 'https://www.steveyardumian.com/src/assets/Steve%20Y%20Resume%20150ppi.pdf', // if no resume, the button will not show up
  btn1: 'resume (pdf)',
  resume2: 'https://www.steveyardumian.com/src/assets/Steve Yardumian - Resume.docx', // if no resume, the button will not show up
  btn2: 'resume (docx)',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'neurotrax-screenshot.png',
    title: 'NeuroTrax Brain App',
    info:
      'NeuroTrax is a neurological research company focused mainly on equipping doctors to test patients for cognitive impairment related to concussions, brain disorders, or other trauma to the head.',
    info2:
      'One of their projects in coordination with CopperHill Consulting and myself was to develop an iPad app to bring their desktop testing to the mobile world. They are currently in the data normalization phase of the app while they prepare for commercial release.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'aktipak-xappi-apps.png',
    title: 'Facing Fwd & Xappi',
    info:
      'Cutanea Life Sciences were in the process of launching topical medications between 2017 and 2019 for which they wanted companion apps on both iOS App and Google Play stores.',
    info2:
      'Developed with React Native, these apps helped users track their progress, receive messaging and tips from Cutanea, and be equipped with information resources on their products.',
    btn: 'app',
    url: 'https://play.google.com/store/apps/details?id=com.cutanea.aktipak.facefwd&hl=en_US',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'rosacea-website.png',
    title: 'Rosacea.org',
    info:
      'The National Rosacea Society is currently one of the chief distributors of information on the disease of rosacea and its effect on the well-being of sufferers.',
    info2:
      'In 2019, the NRS sought to overhaul their current website design with an all new look and feel. They also desired a bump in their SEO, and new techonology platforms to support the site.',
    btn: 'website',
    url: 'http://www.rosacea.org/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work together?',
  btn: 'send me an email',
  email: 'steve.yardumian.dev@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/steven-yardumian',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/syardumi',
    },
    {
      id: uuidv1(),
      name: 'bitbucket',
      url: 'https://bitbucket.org/syardumi/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
