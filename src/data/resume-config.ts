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
      fr: '7 ans d\'expérience — Mobilité vers la Suisse romande',
      en: '7 years of experience — Open to relocation to French-speaking Switzerland',
    },
    location: 'Montpellier, France',
  },
  seo: {
    title: 'Clément Bouly — Développeur Full Stack / Frontend',
    description: 'CV interactif de Clément Bouly, développeur Full Stack spécialisé en React, TypeScript et architecture microservices.',
  },
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },
  contact: [
    { type: 'linkedin', label: 'Clément Bouly', href: 'https://www.linkedin.com/in/cl%C3%A9ment-bouly-2720a3150/' },
    { type: 'email', label: 'clementbouly@hotmail.fr' },
    { type: 'phone', label: '+33 6 43 78 94 26' },
    { type: 'location', label: 'Montpellier, France — 31 ans' },
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
        { name: 'Java' },
        { name: 'J2EE' },
        { name: 'Redux' },
        { name: 'Vitest' },
        { name: 'Testing Library' },
        { name: 'Docker' },
        { name: 'Kubernetes' },
        { name: 'Google Cloud' },
        { name: 'GitHub Actions' },
        { name: 'Jenkins' },
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'GitLab' },
      ],
    },
    {
      title: { fr: 'Méthodologies & Soft Skills', en: 'Methodologies & Soft Skills' },
      type: 'text',
      items: [
        {
          fr: 'Agile / Scrum, communication, organisation, vision produit, UX / UI, adaptabilité, gestion de projet, travail en équipe, rigueur, persévérance.',
          en: 'Agile / Scrum, communication, organisation, product mindset, UX / UI involvement, adaptability, project management, teamwork, rigor, perseverance.',
        },
      ],
    },
  ],
  experiences: [
    {
      id: 'exp-1',
      company: { fr: 'Waalaxy', en: 'Waalaxy' },
      role: { fr: 'Développeur Full Stack — Responsable Frontend & UX', en: 'Full Stack Developer — Frontend & UX Lead' },
      type: { fr: 'CDI', en: 'Permanent Contract' },
      period: { fr: 'Juillet 2024 - 2026', en: 'July 2024 - 2026' },
      description: {
        fr: 'Développement et évolution d\'une application web SaaS et d\'une extension LinkedIn dans un environnement startup.',
        en: 'Development and evolution of a SaaS web application and LinkedIn browser extension in a startup environment.',
      },
      techs: ['React', 'TypeScript', 'Node.js', 'Kubernetes', 'Docker'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Équipe agile de 15 personnes. Responsable du pôle frontend et référent UX.',
          en: 'Agile team of 15 members. Frontend lead and UX referent.',
        },
        tasks: {
          fr: [
            'Conception et développement en React et Node.js',
            'Architecture microservices avec Kafka',
            'Rédaction des spécifications techniques',
            'Tests unitaires avec Vitest et Testing Library',
            'Maintenance et amélioration du Design System',
          ],
          en: [
            'Design and development using React and Node.js',
            'Microservices architecture with Kafka',
            'Technical specifications writing',
            'Unit testing with Vitest and Testing Library',
            'Design System maintenance and improvement',
          ],
        },
        env: {
          fr: 'React / TypeScript / Node.js / Microservices / Kafka / Nx Monorepo',
          en: 'React / TypeScript / Node.js / Microservices / Kafka / Nx Monorepo',
        },
      },
    },
    {
      id: 'exp-2',
      company: { fr: 'Formation Frontend & Auto-construction', en: 'Frontend Training & Self-Build Project' },
      role: { fr: 'Perfectionnement technique & gestion de projet', en: 'Technical Upskilling & Project Management' },
      type: { fr: 'Projet personnel', en: 'Personal Project' },
      period: { fr: '2023 - 2024', en: '2023 - 2024' },
      description: {
        fr: 'Perfectionnement React, Angular et React Native en parallèle d\'un projet d\'auto-construction de maison.',
        en: 'Advanced training in React, Angular and React Native alongside a personal house self-build project.',
      },
      techs: ['React', 'Angular', 'TypeScript', 'React Native'],
      isHighlighted: false,
      details: {
        context: {
          fr: 'Projet personnel combinant montée en compétences frontend et gestion complète d\'un chantier.',
          en: 'Personal project combining frontend upskilling and full construction project management.',
        },
        tasks: {
          fr: [
            'Perfectionnement Angular et React',
            'Étude approfondie du CSS et architectures frontend',
            'Gestion budget, plans et coordination chantier',
          ],
          en: [
            'Advanced Angular and React training',
            'In-depth study of CSS and frontend architectures',
            'Budget management, planning and construction coordination',
          ],
        },
        env: {
          fr: 'React / Angular / TypeScript / React Native',
          en: 'React / Angular / TypeScript / React Native',
        },
      },
    },
    {
      id: 'exp-3',
      company: { fr: 'Comwatt', en: 'Comwatt' },
      role: { fr: 'Développeur Full Stack', en: 'Full Stack Developer' },
      type: { fr: 'CDI', en: 'Permanent Contract' },
      period: { fr: '2019 - 2022', en: '2019 - 2022' },
      description: {
        fr: 'Développement d\'applications CRM, simulateurs et outils internes dans le secteur de l\'énergie solaire.',
        en: 'Development of CRM applications, simulators and internal tools in the solar energy sector.',
      },
      techs: ['React', 'Angular', 'Vue', 'Symfony', 'Kubernetes', 'Docker'],
      isHighlighted: false,
      details: {
        context: {
          fr: 'Équipe agile de 8 personnes.',
          en: 'Agile team of 8 members.',
        },
        tasks: {
          fr: [
            'Conception et développement full stack',
            'Déploiement avec Docker et Kubernetes sur Google Cloud',
            'Rédaction de spécifications fonctionnelles',
          ],
          en: [
            'Full stack design and development',
            'Deployment with Docker and Kubernetes on Google Cloud',
            'Functional specifications writing',
          ],
        },
        env: {
          fr: 'React / Angular / Vue / Symfony / Kubernetes / Google Cloud',
          en: 'React / Angular / Vue / Symfony / Kubernetes / Google Cloud',
        },
      },
    },
    {
      id: 'exp-4',
      company: { fr: 'WeAreLearning', en: 'WeAreLearning' },
      role: { fr: 'Développeur Full Stack', en: 'Full Stack Developer' },
      type: { fr: 'CDI', en: 'Permanent Contract' },
      period: { fr: '2018 - 2019', en: '2018 - 2019' },
      description: {
        fr: 'Participation à la transition d\'une architecture monolithique vers microservices.',
        en: 'Participation in the transition from monolithic architecture to microservices.',
      },
      techs: ['Java', 'J2EE'],
      isHighlighted: false,
      details: {
        context: {
          fr: 'Plateforme de formation et recrutement.',
          en: 'Training and recruitment platform.',
        },
        tasks: {
          fr: [
            'Développement Java J2EE et JSF',
            'Refactorisation vers architecture microservices',
          ],
          en: [
            'Java J2EE and JSF development',
            'Refactoring to microservices architecture',
          ],
        },
        env: {
          fr: 'Java J2EE / JSF / API REST',
          en: 'Java J2EE / JSF / REST API',
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
      school: { fr: 'PEIP Réseau Polytech', en: 'Polytech Integrated Preparatory Program' },
      degree: { fr: 'Prépa intégrée', en: 'Integrated Preparatory Program' },
      period: '2012 - 2014',
    },
  ],
  theme: { preset: 'forest' },
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES', en: 'PROFESSIONAL EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      projects: { fr: 'PROJETS', en: 'PROJECTS' },
      hobbies: { fr: 'INTÉRÊTS', en: 'INTERESTS' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main tasks:' },
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
