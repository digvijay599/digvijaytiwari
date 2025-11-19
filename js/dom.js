const skilles = [
    // Core Web Technologies
    { name: 'HTML5', level: '98%', icon: 'fab fa-html5' },
    { name: 'CSS3 / SCSS', level: '95%', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript (ES6+)', level: '98%', icon: 'fab fa-js-square' },
    { name: 'TypeScript', level: '95%', icon: 'fas fa-code' },
    { name: 'React.js', level: '97%', icon: 'fab fa-react' },
    { name: 'Next.js', level: '95%', icon: 'fas fa-layer-group' },
    { name: 'Node.js', level: '96%', icon: 'fab fa-node-js' },
    { name: 'Express.js', level: '94%', icon: 'fas fa-server' },

    // Backend & Databases
    { name: 'MongoDB', level: '95%', icon: 'fas fa-database' },
    { name: 'SQL (MySQL, PostgreSQL)', level: '93%', icon: 'fas fa-database' },
    { name: 'PHP / Laravel (LAMP)', level: '85%', icon: 'fab fa-php' },
    { name: 'GraphQL / Apollo', level: '90%', icon: 'fas fa-project-diagram' },

    // Cloud & DevOps
    { name: 'AWS / Azure / GCP', level: '92%', icon: 'fab fa-aws' },
    { name: 'Docker / Kubernetes', level: '90%', icon: 'fab fa-docker' },
    { name: 'CI/CD (Jenkins, GitLab CI)', level: '90%', icon: 'fas fa-sync-alt' },
    { name: 'Git / GitHub / GitLab', level: '95%', icon: 'fab fa-git-alt' },
    { name: 'Terraform / IaC', level: '85%', icon: 'fas fa-server' },

    // AI / ML / GenAI
    { name: 'Generative AI (LLMs)', level: '88%', icon: 'fas fa-brain' },
    { name: 'LangChan', level: '88%', icon: 'fab fa-python' },
    { name: 'LangGraph', level: '90%', icon: 'fab fa-python' },
    { name: 'Machine Learning', level: '85%', icon: 'fas fa-robot' },

    // Mobile Development
    { name: 'React Native / Flutter', level: '88%', icon: 'fas fa-mobile-alt' },

    // Project Management & Methodologies
    { name: 'Agile / Scrum', level: '95%', icon: 'fas fa-users' },
    { name: 'System Design / Architecture', level: '93%', icon: 'fas fa-sitemap' },
    { name: 'Technical Leadership', level: '90%', icon: 'fas fa-user-tie' },
    { name: 'Code Review / Mentoring', level: '92%', icon: 'fas fa-chalkboard-teacher' },

    // Tools & Others
    { name: 'WordPress / CMS', level: '85%', icon: 'fab fa-wordpress' },
    { name: 'SEO / Performance Opt.', level: '90%', icon: 'fas fa-chart-line' },
    { name: 'Figma / Adobe XD', level: '80%', icon: 'fab fa-figma' },
    { name: 'Jira / Confluence', level: '85%', icon: 'fab fa-jira' }
]

const portfolioItems = [
    {
        title: 'Enterprise SaaS Dashboard',
        description: 'Developed a comprehensive B2B SaaS dashboard with real-time data analytics, user role management, and third-party API integrations using MERN stack.',
        image: 'img/portfolio/portfolio-1.jpg',
        link: 'https://example.com/saas-dashboard', // Placeholder link
        categories: ['web', 'app', 'mern']
    },
    {
        title: 'Headless E-commerce Storefront',
        description: 'Engineered a high-performance headless e-commerce platform using React/Next.js, integrated with a custom backend for product management and secure payment gateways.',
        image: 'img/portfolio/portfolio-2.jpg',
        link: 'https://example.com/ecommerce-store', // Placeholder link
        categories: ['web', 'react', 'e-commerce']
    },
    {
        title: 'AI-Powered Content Generation Platform',
        description: 'Built a GenAI web application enabling users to generate marketing copy, articles, and social media content using advanced LLMs, with a focus on prompt engineering and scalability.',
        image: 'img/portfolio/portfolio-3.jpg',
        link: 'https://example.com/ai-content-gen', // Placeholder link
        categories: ['web', 'ai', 'genai']
    },
    {
        title: 'Cross-Platform Logistics Mobile App',
        description: 'Designed and developed a React Native mobile application for real-time logistics tracking, including driver management, route optimization, and delivery status updates.',
        image: 'img/portfolio/portfolio-4.jpg',
        link: 'https://example.com/logistics-app', // Placeholder link
        categories: ['mobile', 'app', 'react-native']
    },
    {
        title: 'Custom Multi-Vendor Marketplace',
        description: 'Created a robust multi-vendor e-commerce marketplace with custom WordPress/WooCommerce development, featuring vendor dashboards, commission management, and secure transactions.',
        image: 'img/portfolio/portfolio-5.jpg',
        link: 'https://example.com/marketplace', // Placeholder link
        categories: ['web', 'e-commerce', 'wordpress']
    },
    {
        title: 'Intelligent Customer Support Chatbot',
        description: 'Implemented an intelligent chatbot solution for customer support, leveraging NLP and machine learning to handle queries, provide instant answers, and escalate complex issues.',
        image: 'img/portfolio/portfolio-6.jpg',
        link: 'https://example.com/chatbot-solution', // Placeholder link
        categories: ['web', 'ai', 'chatbot']
    }
]

const serviceData = [
    {
        title: 'Web Development',
        description: 'Building responsive and dynamic websites using modern technologies like React, Next.js, and Node.js to deliver exceptional user experiences.',
        icon: 'fas fa-laptop-code'
    },
    {
        title: 'Creative Web Design',
        description: 'Designing visually appealing and user-friendly web interfaces that align with brand identity and enhance user engagement.',
        icon: 'fas fa-paint-brush'
    },
    {
        title: 'Mobile App Development',
        description: 'Creating cross-platform mobile applications with React Native and Flutter, ensuring seamless performance on both iOS and Android devices.',
        icon: 'fas fa-mobile-alt'
    },
    {
        title: 'Backend Development',
        description: 'Designing robust backend systems with Node.js, Express, and databases like MongoDB and SQL to power scalable web applications.',
        icon: 'fas fa-server'
    },
    {
        title: 'Cloud & DevOps',
        description: 'Implementing cloud solutions using AWS, Azure, and GCP, along with CI/CD pipelines to streamline development and deployment processes.',
        icon: 'fas fa-cloud'
    },
    {
        title: 'AI & Machine Learning',
        description: 'Integrating AI and machine learning capabilities into applications, including generative AI solutions using LLMs for enhanced user interactions.',
        icon: 'fas fa-robot'
    },
    {
        title: 'UI/UX Design',
        description: 'Crafting intuitive and engaging user interfaces with tools like Figma and Adobe XD, focusing on user-centered design principles.',
        icon: 'fas fa-pencil-ruler'
    },
    {
        title: 'E-commerce Solutions',
        description: 'Developing custom e-commerce platforms and multi-vendor marketplaces using WordPress/WooCommerce and headless architectures for optimal performance.',
        icon: 'fas fa-shopping-cart'
    },
    {
        title: 'SEO & Performance',
        description: 'Optimizing websites for search engines and improving performance to enhance visibility, user engagement, and conversion rates.',
        icon: 'fas fa-chart-line'
    },
    {
        title: 'Technical Consulting',
        description: 'Providing expert technical consulting services, including system design, architecture reviews, and technology stack recommendations to drive project success.',
        icon: 'fas fa-user-tie'
    },
    {
        title: 'Project Management',
        description: 'Offering project management services using Agile and Scrum methodologies to ensure timely delivery, effective communication, and quality outcomes.',
        icon: 'fas fa-tasks'
    },
    {
        title: 'AI Automation Solutions',
        description: 'Developing AI-driven automation tools to streamline business processes, enhance productivity, and reduce operational costs.',
        icon: 'fas fa-robot'
    }
]