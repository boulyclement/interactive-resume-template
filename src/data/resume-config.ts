import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Clément Bouly',
    photoBackEmoji: '💼',
    title: {
      fr: 'Développeur Fullstack / Frontend',
      en: 'Fullstack / Frontend Developer',
    },
    subtitle: {
      fr: '7 ans d\'expérience',
      en: '7 years of experience',
    },
    location: 'Montpellier, France',
  },
  seo: {
    title: 'Clément Bouly — Développeur Fullstack / Frontend',
    description: 'CV interactif de Clément Bouly, développeur Fullstack spécialisé React, TypeScript et architecture moderne.',
  },
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },
  contact: [
    { type: 'linkedin', label: 'clementbouly.dev', href: 'https://www.linkedin.com/in/cl%C3%A9ment-bouly-2720a3150/' },
    { type: 'email', label: 'clementbouly@hotmail.fr' },
    { type: 'phone', label: '+33 6 43 78 94 26' },
    { type: 'location', label: 'Montpellier, France' },
    { type: 'website', label: 'clementbouly.dev', href: 'http://clementbouly.dev' },
  ],
  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Français', en: 'French' }, level: { fr: 'Natif', en: 'Native' } },
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Courant (TOEIC 910)', en: 'Fluent (TOEIC 910)' } },
      ],
    },
    {
      title: { fr: 'Compétences techniques', en: 'Technical Skills' },
      type: 'badges',
      items: [
        { name: 'React' },
        { name: 'Angular' },
        { name: 'Vue' },
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'Symfony' },
        { name: 'PostgreSQL' },
        { name: 'Docker' },
        { name: 'Kubernetes' },
        { name: 'Google Cloud' },
        { name: 'Kafka' },
        { name: 'Redux' },
        { name: 'React Query' },
        { name: 'GitHub Actions' },
        { name: 'Jenkins' },
        { name: 'GitLab' },
        { name: 'Nx', color: '#143055' },
      ],
    },
  ],
  experiences: [
    {
      id: 'exp-waalaxy',
      company: { fr: 'Waalaxy', en: 'Waalaxy' },
      role: { fr: 'Développeur Javascript Fullstack', en: 'Fullstack JavaScript Developer' },
      type: { fr: 'CDI', en: 'Permanent contract' },
      period: { fr: 'Juillet 2024 - Présent', en: 'July 2024 - Present' },
      description: {
        fr: 'Responsable Frontend et UX dans une équipe agile de 15 personnes.',
        en: 'Frontend and UX lead within a 15-person agile team.',
      },
      techs: ['React', 'TypeScript', 'Node.js', 'Express', 'Kafka'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Application SaaS de prospection automatisée LinkedIn.',
          en: 'SaaS platform for LinkedIn automated outreach.',
        },
        tasks: {
          fr: [
            'Responsable du pôle Frontend',
            'Responsable UX',
            'Architecture des nouvelles fonctionnalités',
            'Développement React et Node.js',
            'Microservices avec Kafka',
            'Tests unitaires avec Vitest et Testing Library',
            'Maintenance et évolution du Design System',
          ],
          en: [
            'Frontend team lead',
            'UX ownership',
            'Architecture design for new features',
            'React and Node.js development',
            'Microservices with Kafka',
            'Unit testing with Vitest and Testing Library',
            'Design system maintenance and evolution',
          ],
        },
        env: {
          fr: 'React / TypeScript / Node.js / Express / Kafka / Nx',
          en: 'React / TypeScript / Node.js / Express / Kafka / Nx',
        },
      },
    },
    {
      id: 'exp-comwatt',
      company: { fr: 'Comwatt', en: 'Comwatt' },
      role: { fr: 'Développeur Fullstack', en: 'Fullstack Developer' },
      type: { fr: 'CDI', en: 'Permanent contract' },
      period: { fr: 'Oct 2019 - Déc 2022', en: 'Oct 2019 - Dec 2022' },
      description: {
        fr: 'Développement d\'applications commerciales et CRM liées à l\'énergie solaire.',
        en: 'Development of commercial tools and CRM related to solar energy.',
      },
      techs: ['React', 'Angular', 'Vue', 'Symfony', 'Docker', 'Kubernetes', 'Google Cloud'],
      isHighlighted: false,
      details: {
        context: {
          fr: 'Équipe agile de 8 personnes.',
          en: '8-person agile team.',
        },
        tasks: {
          fr: [
            'Développement simulateurs web et mobile',
            'BackOffice Symfony et PostgreSQL',
            'CRM Angular',
            'Déploiement Docker et Kubernetes',
            'CI/CD et analyse Sonar',
          ],
          en: [
            'Web and mobile simulators development',
            'Symfony and PostgreSQL BackOffice',
            'Angular CRM development',
            'Docker and Kubernetes deployments',
            'CI/CD and Sonar analysis',
          ],
        },
        env: {
          fr: 'React / Angular / Vue / Symfony / PostgreSQL / Docker / Kubernetes',
          en: 'React / Angular / Vue / Symfony / PostgreSQL / Docker / Kubernetes',
        },
      },
    },
    {
      id: 'exp-wearelearning',
      company: { fr: 'WeAreLearning', en: 'WeAreLearning' },
      role: { fr: 'Développeur Fullstack', en: 'Fullstack Developer' },
      type: { fr: 'CDI', en: 'Permanent contract' },
      period: { fr: 'Févr 2018 - Févr 2019', en: 'Feb 2018 - Feb 2019' },
      description: {
        fr: 'Refonte d\'une plateforme e-learning et transition vers une architecture microservices.',
        en: 'Refactoring of an e-learning platform and migration to microservices architecture.',
      },
      techs: ['Java', 'J2EE', 'JSF', 'REST'],
      isHighlighted: false,
      details: {
        context: {
          fr: 'Plateforme web de formation et recrutement.',
          en: 'Web platform for training and recruitment.',
        },
        tasks: {
          fr: [
            'Développement Java J2EE',
            'Refactorisation vers microservices',
            'Optimisation UX',
          ],
          en: [
            'Java J2EE development',
            'Migration to microservices',
            'UX improvements',
          ],
        },
        env: {
          fr: 'Java J2EE / JSF / REST',
          en: 'Java J2EE / JSF / REST',
        },
      },
    },
  ],
  education: [
    {
      school: { fr: 'Polytech Montpellier', en: 'Polytech Montpellier' },
      degree: { fr: 'Diplôme d\'ingénieur en informatique', en: 'Engineering Degree in Computer Science' },
      period: '2014 - 2018',
    },
    {
      school: { fr: 'PEIP Montpellier', en: 'PEIP Montpellier' },
      degree: { fr: 'Prépa intégrée Réseau Polytech', en: 'Integrated preparatory program - Polytech Network' },
      period: '2012 - 2014',
    },
  ],
  theme: { preset: 'minimal' },
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
      techEnv: { fr: 'Env. technique :', en: 'Tech stack:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click on experiences to see more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}
