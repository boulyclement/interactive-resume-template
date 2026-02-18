import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Clément Bouly',
    photoBackEmoji: '🌲',
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
    description: 'CV interactif de Clément Bouly, développeur Full Stack spécialisé en React, TypeScript et architecture microservices.',
  },
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },
  contact: [
    { type: 'linkedin', label: 'Clément Bouly', href: 'https://www.linkedin.com/in/cl%C3%A9ment-bouly-2720a3150' },
    { type: 'email', label: 'clementbouly@hotmail.fr' },
    { type: 'phone', label: '+33643789426' },
    { type: 'website', label: 'clementbouly.dev', href: 'http://clementbouly.dev' },
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
        { name: 'JavaScript' },
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
      ],
    },
    {
      title: { fr: 'Architecture', en: 'Architecture' },
      type: 'badges',
      items: [
        { name: 'Microservices' },
        { name: 'REST API' },
        { name: 'GraphQL' },
        { name: 'Kafka' },
        { name: 'Nx' },
        { name: 'SPA' },
        { name: 'SSR' },
      ],
    },
    {
      title: { fr: 'DevOps & Cloud', en: 'DevOps & Cloud' },
      type: 'badges',
      items: [
        { name: 'Docker' },
        { name: 'Kubernetes' },
        { name: 'Google Cloud' },
        { name: 'CI/CD' },
        { name: 'GitHub Actions' },
        { name: 'Jenkins' },
        { name: 'SonarQube' },
        { name: 'Git' },
      ],
    },
    {
      title: { fr: 'Méthodologies', en: 'Methodologies' },
      type: 'text',
      items: [
        { name: { fr: 'Agile / Scrum, Architecture microservices, Rédaction de spécifications techniques', en: 'Agile / Scrum, Microservices architecture, Technical specifications writing' } },
      ],
    },
    {
      title: { fr: 'Qualités', en: 'Soft Skills' },
      type: 'text',
      items: [
        { name: { fr: 'Organisation, Communication, Adaptabilité, Autonomie, Gestion de projet, Empathie, Rigueur', en: 'Organization, Communication, Adaptability, Autonomy, Project management, Empathy, Rigor' } },
      ],
    },
  ],
  experiences: [
    {
      id: 'waalaxy',
      company: { fr: 'Waalaxy', en: 'Waalaxy' },
      role: { fr: 'Développeur Fullstack / Responsable Frontend & UX', en: 'Full Stack Developer / Frontend & UX Lead' },
      type: { fr: 'CDI', en: 'Permanent contract' },
      period: { fr: 'Juillet 2024 - Présent', en: 'July 2024 - Present' },
      description: {
        fr: 'Développement et évolution d\'une application SaaS et d\'une extension LinkedIn dédiée à la prospection automatisée.',
        en: 'Development and evolution of a SaaS platform and LinkedIn extension dedicated to automated prospecting.',
      },
      techs: ['React', 'TypeScript', 'Node.js', 'Kafka', 'Nx', 'GraphQL', 'Docker'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Équipe agile de 15 personnes en environnement startup.',
          en: 'Agile team of 15 people in a startup environment.',
        },
        tasks: {
          fr: [
            'Responsable du pôle Frontend et de l\'expérience utilisateur',
            'Conception et développement en React et Node.js',
            'Mise en place d\'une architecture microservices avec Kafka',
            'Développement et consommation d\'API REST et GraphQL',
            'Création et maintien d\'un Design System',
            'Développement de tests unitaires avec Vitest et RTL',
          ],
          en: [
            'Frontend and UX lead',
            'Design and development with React and Node.js',
            'Implementation of a microservices architecture with Kafka',
            'Development and consumption of REST and GraphQL APIs',
            'Creation and maintenance of a Design System',
            'Unit testing with Vitest and RTL',
          ],
        },
        env: {
          fr: 'React / TypeScript / Node.js / Kafka / Nx Monorepo / GraphQL',
          en: 'React / TypeScript / Node.js / Kafka / Nx Monorepo / GraphQL',
        },
      },
    },
    {
      id: 'auto-construction',
      company: { fr: 'Projet personnel - Formation & Auto-construction', en: 'Personal Project - Training & House Construction' },
      role: { fr: 'Formation Frontend & Gestion de projet', en: 'Frontend Training & Project Management' },
      type: { fr: 'Projet personnel', en: 'Personal project' },
      period: { fr: '2023 - 1 an', en: '2023 - 1 year' },
      description: {
        fr: 'Perfectionnement avancé en développement Frontend en parallèle d\'un projet d\'auto-construction.',
        en: 'Advanced frontend training alongside a personal house construction project.',
      },
      techs: ['React', 'Angular', 'TypeScript', 'React Native', 'CSS3'],
      details: {
        context: {
          fr: 'Projet personnel structurant combinant formation technique et gestion de chantier.',
          en: 'Personal structuring project combining technical training and construction management.',
        },
        tasks: {
          fr: [
            'Perfectionnement React, Angular et TypeScript',
            'Étude comparative des frameworks Frontend',
            'Gestion des budgets et coordination d\'équipe',
          ],
          en: [
            'Advanced training in React, Angular and TypeScript',
            'Comparative study of frontend frameworks',
            'Budget management and team coordination',
          ],
        },
        env: {
          fr: 'React / Angular / TypeScript / React Native / CSS3',
          en: 'React / Angular / TypeScript / React Native / CSS3',
        },
      },
    },
    {
      id: 'comwatt',
      company: { fr: 'Comwatt', en: 'Comwatt' },
      role: { fr: 'Développeur Full Stack', en: 'Full Stack Developer' },
      type: { fr: 'CDI', en: 'Permanent contract' },
      period: { fr: 'Oct 2019 - Déc 2022', en: 'Oct 2019 - Dec 2022' },
      description: {
        fr: 'Développement des outils commerciaux et simulateurs liés à l\'énergie solaire domestique.',
        en: 'Development of commercial tools and simulators related to domestic solar energy.',
      },
      techs: ['React', 'Angular', 'Vue', 'Symfony', 'Docker', 'Kubernetes', 'Google Cloud'],
      details: {
        context: {
          fr: 'Équipe agile de 8 personnes.',
          en: 'Agile team of 8 people.',
        },
        tasks: {
          fr: [
            'Développement de simulateurs web et mobile',
            'Mise en place de déploiements Docker et Kubernetes',
            'Intégration de signature électronique Docusign',
          ],
          en: [
            'Development of web and mobile simulators',
            'Docker and Kubernetes deployments',
            'Integration of Docusign electronic signature',
          ],
        },
        env: {
          fr: 'React / Angular / Vue / Symfony / Docker / Kubernetes / Google Cloud',
          en: 'React / Angular / Vue / Symfony / Docker / Kubernetes / Google Cloud',
        },
      },
    },
    {
      id: 'wearelearning',
      company: { fr: 'WeAreLearning', en: 'WeAreLearning' },
      role: { fr: 'Développeur Full Stack', en: 'Full Stack Developer' },
      type: { fr: 'CDI', en: 'Permanent contract' },
      period: { fr: 'Fév 2018 - Fév 2019', en: 'Feb 2018 - Feb 2019' },
      description: {
        fr: 'Migration d\'une architecture monolithique vers une architecture microservices.',
        en: 'Migration from a monolithic architecture to a microservices architecture.',
      },
      techs: ['Java', 'REST API', 'GitLab'],
      details: {
        context: {
          fr: 'Plateforme de formation, recrutement et onboarding.',
          en: 'Training, recruitment and onboarding platform.',
        },
        tasks: {
          fr: [
            'Développement en Java J2EE et JSF',
            'Refactorisation vers une architecture microservices',
            'Séparation en plusieurs applications Frontend',
          ],
          en: [
            'Development with Java J2EE and JSF',
            'Refactoring toward a microservices architecture',
            'Separation into multiple frontend applications',
          ],
        },
        env: {
          fr: 'Java J2EE / JSF / REST API / GitLab',
          en: 'Java J2EE / JSF / REST API / GitLab',
        },
      },
    },
  ],
  education: [
    {
      school: { fr: 'Polytech Montpellier', en: 'Polytech Montpellier' },
      degree: { fr: 'Diplôme d\'Ingénieur Informatique', en: 'Engineering Degree in Computer Science' },
      period: '2014 - 2018',
    },
    {
      school: { fr: 'PEIP Réseau Polytech', en: 'PEIP Polytech Network' },
      degree: { fr: 'Cycle préparatoire intégré', en: 'Integrated preparatory cycle' },
      period: '2012 - 2014',
    },
  ],
  hobbies: [
    { title: { fr: 'Street Workout', en: 'Street Workout' } },
    { title: { fr: 'Basket-ball', en: 'Basketball' }, details: [{ fr: '12 ans', en: '12 years' }] },
    { title: { fr: 'Danses latines & Rock', en: 'Latin dances & Rock' }, details: [{ fr: 'Salsa, Bachata', en: 'Salsa, Bachata' }] },
    { title: { fr: 'Jeux vidéo', en: 'Video games' } },
    { title: { fr: 'Guitare', en: 'Guitar' }, details: [{ fr: '8 ans', en: '8 years' }] },
  ],
  theme: { preset: 'forest' },
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES', en: 'WORK EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      projects: { fr: 'PROJETS', en: 'PROJECTS' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main responsibilities:' },
      moreTasks: { fr: 'autres missions...', en: 'more tasks...' },
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
