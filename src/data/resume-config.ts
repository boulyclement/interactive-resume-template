import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Clément Bouly',
    photoBackEmoji: '💻',
    title: {
      fr: 'Développeur Full Stack / Frontend',
      en: 'Full Stack / Frontend Developer',
    },
    subtitle: {
      fr: '7 ans d\'expérience',
      en: '7 years of experience',
    },
    location: 'Montpellier, France',
  },
  seo: {
    title: 'Clément Bouly — Full Stack / Frontend Developer',
    description: 'Interactive resume of Clément Bouly, Full Stack developer specialized in React and TypeScript.',
  },
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },
  contact: [
    { type: 'linkedin', label: 'Clément Bouly', href: 'https://www.linkedin.com/in/cl%C3%A9ment-bouly-2720a3150/' },
    { type: 'website', label: 'clementbouly.dev', href: 'http://clementbouly.dev' },
    { type: 'email', label: 'clementbouly@hotmail.fr' },
    { type: 'phone', label: '+33643789426' },
    { type: 'location', label: 'Montpellier, France' },
  ],
  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Français', en: 'French' }, level: { fr: 'Natif', en: 'Native' } },
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Courant', en: 'Fluent' }, details: 'TOEIC 910' },
      ],
    },
    {
      title: { fr: 'Frontend', en: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'Angular' },
        { name: 'Vue' },
        { name: 'React Native' },
        { name: 'Redux' },
        { name: 'React Query' },
        { name: 'CSS3' },
      ],
    },
    {
      title: { fr: 'Backend', en: 'Backend' },
      type: 'badges',
      items: [
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'Symfony' },
        { name: 'Java' },
        { name: 'J2EE' },
      ],
    },
    {
      title: { fr: 'DevOps & Cloud', en: 'DevOps & Cloud' },
      type: 'badges',
      items: [
        { name: 'Docker' },
        { name: 'Kubernetes' },
        { name: 'Google Cloud' },
        { name: 'Jenkins' },
        { name: 'SonarQube' },
        { name: 'GitHub Actions' },
        { name: 'Bitbucket' },
      ],
    },
    {
      title: { fr: 'Architecture', en: 'Architecture' },
      type: 'badges',
      items: [
        { name: 'Microservices' },
        { name: 'REST API' },
        { name: 'GraphQL' },
        { name: 'SPA' },
        { name: 'SSR' },
        { name: 'Kafka' },
        { name: 'Nx' },
      ],
    },
    {
      title: { fr: 'Tests', en: 'Testing' },
      type: 'badges',
      items: [
        { name: 'Vitest' },
        { name: 'Jasmine' },
        { name: 'Mocha' },
        { name: 'React Testing Library' },
      ],
    },
    {
      title: { fr: 'Méthodologies', en: 'Methodologies' },
      type: 'text',
      items: [
        { name: { fr: 'Agile / Scrum, User Stories, CI/CD, Design System', en: 'Agile / Scrum, User Stories, CI/CD, Design Systems' } },
      ],
    },
    {
      title: { fr: 'Qualités', en: 'Soft Skills' },
      type: 'text',
      items: [
        { name: { fr: 'Organisation, Communication, Adaptabilité, Autonomie, Rigueur, Vision produit', en: 'Organization, Communication, Adaptability, Autonomy, Rigor, Product mindset' } },
      ],
    },
  ],
  experiences: [
    {
      id: 'waalaxy',
      company: { fr: 'Waalaxy', en: 'Waalaxy' },
      role: { fr: 'Développeur Full Stack - Responsable Frontend & UX', en: 'Full Stack Developer - Frontend & UX Lead' },
      type: { fr: 'CDI', en: 'Permanent contract' },
      period: { fr: '2024 - Présent', en: '2024 - Present' },
      description: {
        fr: 'Responsable du pôle frontend et de l\'expérience utilisateur au sein d\'une équipe agile de 15 personnes.',
        en: 'Leading frontend development and user experience within a 15-person agile team.',
      },
      techs: ['React', 'TypeScript', 'Node.js', 'Express', 'Kafka', 'GraphQL', 'Nx', 'Docker'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Application SaaS et extension Chrome dédiée à la prospection automatisée sur LinkedIn.',
          en: 'SaaS application and Chrome extension for LinkedIn automation.',
        },
        tasks: {
          fr: [
            'Architecture et développement de nouvelles fonctionnalités en React et Node.js',
            'Mise en place d\'une architecture microservices avec Kafka',
            'Gestion du state avec Redux et React Query',
            'Développement des tests unitaires avec Vitest et RTL',
            'Maintien et amélioration d\'un Design System',
          ],
          en: [
            'Architecture and development of new features using React and Node.js',
            'Implementation of a microservices architecture with Kafka',
            'State management with Redux and React Query',
            'Unit testing with Vitest and RTL',
            'Design system maintenance and improvements',
          ],
        },
        env: {
          fr: 'React / TypeScript / Node.js / Kafka / GraphQL / Nx / Docker',
          en: 'React / TypeScript / Node.js / Kafka / GraphQL / Nx / Docker',
        },
      },
    },
  ],
  education: [
    {
      school: { fr: 'Polytech Montpellier', en: 'Polytech Montpellier' },
      degree: { fr: 'Diplôme d\'Ingénieur en Informatique', en: 'Engineering Degree in Computer Science' },
      period: '2014 - 2018',
    },
    {
      school: { fr: 'PEIP - Réseau Polytech', en: 'PEIP - Polytech Network' },
      degree: { fr: 'Cycle préparatoire intégré', en: 'Integrated preparatory cycle' },
      period: '2012 - 2014',
    },
  ],
  projects: [
    {
      id: 'personal-website',
      title: { fr: 'Site Personnel', en: 'Personal Website' },
      description: {
        fr: 'Site vitrine présentant mon parcours, mes projets et mon expertise frontend.',
        en: 'Portfolio website showcasing my experience, projects and frontend expertise.',
      },
      techs: ['React', 'TypeScript'],
      url: 'http://clementbouly.dev',
    },
  ],
  hobbies: [
    { title: { fr: 'Street Workout', en: 'Street Workout' } },
    { title: { fr: 'Basket-ball', en: 'Basketball' }, details: [{ fr: '12 ans', en: '12 years' }] },
    { title: { fr: 'Danses Latines', en: 'Latin Dances' }, details: [{ fr: 'Salsa, Bachata, Rock', en: 'Salsa, Bachata, Rock' }] },
    { title: { fr: 'Jeux Vidéo', en: 'Video Games' } },
    { title: { fr: 'Guitare', en: 'Guitar' }, details: [{ fr: '8 ans', en: '8 years' }] },
  ],
  theme: { preset: 'warm' },
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES', en: 'PROFESSIONAL EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      projects: { fr: 'PROJETS', en: 'PROJECTS' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main responsibilities:' },
      moreTasks: { fr: 'autres missions...', en: 'other tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Env. technique :', en: 'Tech environment:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click on experiences to see more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}
