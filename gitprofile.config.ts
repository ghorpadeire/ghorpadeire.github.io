// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ghorpadeire', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
  github: {
    display: true,
    header: 'Github Projects',
    mode: 'automatic',
    automatic: {
      sortBy: 'stars',
      limit: 8,
      exclude: {
        forks: false,
        projects: [],
      },
    },
    manual: {
      projects: [], // cleaned — nothing here since automatic mode is on
    },
  },
  external: {
    header: 'My Projects',
    projects: [],
  },
},

  seo: { title: 'Pranav Ghorpade — DevOps & Cybersecurity Portfolio', description: 'DevOps, Cloud, and Security projects, blogs, and experience.', imageURL: '' },
  social: {
    linkedin: 'pranav-ire',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'pranav-ire',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://www.arifszn.com',
    phone: '',
    email: 'pranav.ghorpade3108@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
  'Java',
  'Spring Boot',
  'MySQL',
  'PostgreSQL',
  'RESTful APIs',
  'AWS (EC2, RDS, S3, Route53)',
  'Jenkins',
  'SonarQube',
  'Nexus',
  'Ansible',
  'Docker',
  'Kubernetes',
  'Linux',
  'Git',
  'GitHub Actions',
  'Terraform',
  'Cybersecurity',
  'Penetration Testing',
  'Zsh',
  'Bash Scripting',
],

  experiences: [
  {
    company: 'Red Fibre',
    position: 'Back End Developer',
    from: 'April 2022',
    to: 'August 2023',
    companyLink: '',
  },
  {
    company: 'Tesco Express Donnybrook',
    position: 'Customer Assistant (Part-time)',
    from: 'January 2025',
    to: 'Present',
    companyLink: '',
  },
  {
    company: 'Maxol',
    position: 'Retail Assistant (Part-time)',
    from: '2024',
    to: '2024',
    companyLink: '',
  },
],

  certifications: [
  {
    name: 'CEH v12 (Certified Ethical Hacker)',
    body: 'EC-Council',
    year: '2024',
    link: '',
  },
  {
    name: 'CEH Practical v12',
    body: 'EC-Council',
    year: '2024',
    link: '',
  },
  {
    name: 'CEH Master v12',
    body: 'EC-Council',
    year: '2024',
    link: '',
  },
],

  educations: [
  {
    institution: 'National College of Ireland',
    degree: "Master's in Cybersecurity",
    from: '2023',
    to: '2024',
  },
  {
    institution: 'Pune University',
    degree: "Bachelor's in Computer Science Engineering",
    from: '2018',
    to: '2022',
  },
],

  
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'pranav-ire', // to hide blog section, keep it empty
    limit: 4, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
