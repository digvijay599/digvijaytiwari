const skills = [
  // 1. Frontend Engineering
  {
    name: "JavaScript (ES6+)",
    level: "95%",
    category: "Frontend",
    icon: "fab fa-js-square",
  },
  {
    name: "TypeScript",
    level: "93%",
    category: "Frontend",
    icon: "fas fa-code",
  },
  {
    name: "React.js",
    level: "94%",
    category: "Frontend",
    icon: "fab fa-react",
  },
  {
    name: "Next.js",
    level: "92%",
    category: "Frontend",
    icon: "fas fa-layer-group",
  },
  {
    name: "HTML5 / CSS3 / SCSS",
    level: "90%",
    category: "Frontend",
    icon: "fab fa-html5",
  },
  // 1. Core Backend & API Engineering (Highest priority)
  {
    name: "Node.js",
    level: "95%",
    category: "Backend",
    icon: "fab fa-node-js",
  },
  {
    name: "Express.js / NestJS",
    level: "92%",
    category: "Backend",
    icon: "fas fa-server",
  },
  {
    name: "REST API Design",
    level: "95%",
    category: "Backend",
    icon: "fas fa-exchange-alt",
  },
  {
    name: "GraphQL / Apollo",
    level: "90%",
    category: "Backend",
    icon: "fas fa-project-diagram",
  },
  {
    name: "Authentication (JWT, OAuth)",
    level: "90%",
    category: "Backend",
    icon: "fas fa-lock",
  },

  // 2. System Design & Architecture (Critical for 8+ yrs)
  {
    name: "System Design",
    level: "92%",
    category: "Architecture",
    icon: "fas fa-sitemap",
  },
  {
    name: "Microservices Architecture",
    level: "90%",
    category: "Architecture",
    icon: "fas fa-cubes",
  },
  {
    name: "Design Patterns (SOLID, etc.)",
    level: "90%",
    category: "Architecture",
    icon: "fas fa-drafting-compass",
  },
  {
    name: "Scalability & High Availability",
    level: "88%",
    category: "Architecture",
    icon: "fas fa-chart-line",
  },

  // 3. Databases & Caching
  {
    name: "MongoDB",
    level: "93%",
    category: "Database",
    icon: "fas fa-database",
  },
  {
    name: "PostgreSQL / MySQL",
    level: "92%",
    category: "Database",
    icon: "fas fa-database",
  },
  {
    name: "Redis (Caching)",
    level: "88%",
    category: "Database",
    icon: "fas fa-memory",
  },
  {
    name: "Database Design & Optimization",
    level: "90%",
    category: "Database",
    icon: "fas fa-database",
  },

  // 5. Cloud & DevOps (Must for senior roles)
  {
    name: "AWS (EC2, S3, Lambda, RDS)",
    level: "90%",
    category: "Cloud",
    icon: "fab fa-aws",
  },
  { name: "Docker", level: "90%", category: "Cloud", icon: "fab fa-docker" },
  {
    name: "Kubernetes",
    level: "85%",
    category: "Cloud",
    icon: "fas fa-dharmachakra",
  },
  {
    name: "CI/CD (GitHub Actions, Jenkins)",
    level: "90%",
    category: "Cloud",
    icon: "fas fa-sync-alt",
  },
  {
    name: "Terraform (IaC)",
    level: "85%",
    category: "Cloud",
    icon: "fas fa-server",
  },

  // 6. Messaging, Events & Realtime (Missing earlier)
  {
    name: "Kafka / RabbitMQ",
    level: "85%",
    category: "Messaging",
    icon: "fas fa-stream",
  },
  {
    name: "WebSockets / Realtime Systems",
    level: "88%",
    category: "Messaging",
    icon: "fas fa-bolt",
  },

  // 7. Testing & Code Quality
  {
    name: "Jest / Mocha / Unit Testing",
    level: "90%",
    category: "Testing",
    icon: "fas fa-vial",
  },
  {
    name: "Integration & E2E Testing",
    level: "88%",
    category: "Testing",
    icon: "fas fa-check-circle",
  },
  {
    name: "Code Review & Best Practices",
    level: "92%",
    category: "Testing",
    icon: "fas fa-code-branch",
  },

  // 8. Observability & Performance (Big senior signal)
  {
    name: "Logging (ELK, Winston)",
    level: "88%",
    category: "Observability",
    icon: "fas fa-file-alt",
  },
  {
    name: "Monitoring (Prometheus, Grafana)",
    level: "85%",
    category: "Observability",
    icon: "fas fa-chart-area",
  },
  {
    name: "Performance Optimization",
    level: "90%",
    category: "Observability",
    icon: "fas fa-tachometer-alt",
  },

  // 9. AI / GenAI (Keep but don’t oversell)
  {
    name: "LLMs / Generative AI",
    level: "85%",
    category: "AI",
    icon: "fas fa-brain",
  },
  { name: "LangChain", level: "85%", category: "AI", icon: "fab fa-python" },
  { name: "LangGraph", level: "82%", category: "AI", icon: "fab fa-python" },

  // 10. Mobile (Optional but good signal)
  {
    name: "React Native",
    level: "85%",
    category: "Mobile",
    icon: "fas fa-mobile-alt",
  },

  // 11. Collaboration & Leadership
  {
    name: "Agile / Scrum",
    level: "92%",
    category: "Management",
    icon: "fas fa-users",
  },
  {
    name: "Technical Leadership",
    level: "90%",
    category: "Management",
    icon: "fas fa-user-tie",
  },
  {
    name: "Mentoring Engineers",
    level: "90%",
    category: "Management",
    icon: "fas fa-chalkboard-teacher",
  },

  // 12. Tools
  {
    name: "Git / GitHub / GitLab",
    level: "95%",
    category: "Tools",
    icon: "fab fa-git-alt",
  },
  {
    name: "Jira / Confluence",
    level: "88%",
    category: "Tools",
    icon: "fab fa-jira",
  },
  { name: "Figma", level: "75%", category: "Tools", icon: "fab fa-figma" },
];
// const skills = [
//   // 1. Core Backend & API Engineering (Highest priority)
//   {
//     name: "Node.js",
//     level: "95%",
//     category: "Backend",
//     icon: "fab fa-node-js",
//   },
//   {
//     name: "Express.js / NestJS",
//     level: "92%",
//     category: "Backend",
//     icon: "fas fa-server",
//   },
//   {
//     name: "REST API Design",
//     level: "95%",
//     category: "Backend",
//     icon: "fas fa-exchange-alt",
//   },
//   {
//     name: "GraphQL / Apollo",
//     level: "90%",
//     category: "Backend",
//     icon: "fas fa-project-diagram",
//   },
//   {
//     name: "Authentication (JWT, OAuth)",
//     level: "90%",
//     category: "Backend",
//     icon: "fas fa-lock",
//   },

//   // 2. System Design & Architecture (Critical for 8+ yrs)
//   {
//     name: "System Design",
//     level: "92%",
//     category: "Architecture",
//     icon: "fas fa-sitemap",
//   },
//   {
//     name: "Microservices Architecture",
//     level: "90%",
//     category: "Architecture",
//     icon: "fas fa-cubes",
//   },
//   {
//     name: "Design Patterns (SOLID, etc.)",
//     level: "90%",
//     category: "Architecture",
//     icon: "fas fa-drafting-compass",
//   },
//   {
//     name: "Scalability & High Availability",
//     level: "88%",
//     category: "Architecture",
//     icon: "fas fa-chart-line",
//   },

//   // 3. Databases & Caching
//   {
//     name: "MongoDB",
//     level: "93%",
//     category: "Database",
//     icon: "fas fa-database",
//   },
//   {
//     name: "PostgreSQL / MySQL",
//     level: "92%",
//     category: "Database",
//     icon: "fas fa-database",
//   },
//   {
//     name: "Redis (Caching)",
//     level: "88%",
//     category: "Database",
//     icon: "fas fa-memory",
//   },
//   {
//     name: "Database Design & Optimization",
//     level: "90%",
//     category: "Database",
//     icon: "fas fa-database",
//   },

//   // 4. Frontend Engineering
//   {
//     name: "JavaScript (ES6+)",
//     level: "95%",
//     category: "Frontend",
//     icon: "fab fa-js-square",
//   },
//   {
//     name: "TypeScript",
//     level: "93%",
//     category: "Frontend",
//     icon: "fas fa-code",
//   },
//   {
//     name: "React.js",
//     level: "94%",
//     category: "Frontend",
//     icon: "fab fa-react",
//   },
//   {
//     name: "Next.js",
//     level: "92%",
//     category: "Frontend",
//     icon: "fas fa-layer-group",
//   },
//   {
//     name: "HTML5 / CSS3 / SCSS",
//     level: "90%",
//     category: "Frontend",
//     icon: "fab fa-html5",
//   },

//   // 5. Cloud & DevOps (Must for senior roles)
//   {
//     name: "AWS (EC2, S3, Lambda, RDS)",
//     level: "90%",
//     category: "Cloud",
//     icon: "fab fa-aws",
//   },
//   { name: "Docker", level: "90%", category: "Cloud", icon: "fab fa-docker" },
//   {
//     name: "Kubernetes",
//     level: "85%",
//     category: "Cloud",
//     icon: "fas fa-dharmachakra",
//   },
//   {
//     name: "CI/CD (GitHub Actions, Jenkins)",
//     level: "90%",
//     category: "Cloud",
//     icon: "fas fa-sync-alt",
//   },
//   {
//     name: "Terraform (IaC)",
//     level: "85%",
//     category: "Cloud",
//     icon: "fas fa-server",
//   },

//   // 6. Messaging, Events & Realtime (Missing earlier)
//   {
//     name: "Kafka / RabbitMQ",
//     level: "85%",
//     category: "Messaging",
//     icon: "fas fa-stream",
//   },
//   {
//     name: "WebSockets / Realtime Systems",
//     level: "88%",
//     category: "Messaging",
//     icon: "fas fa-bolt",
//   },

//   // 7. Testing & Code Quality
//   {
//     name: "Jest / Mocha / Unit Testing",
//     level: "90%",
//     category: "Testing",
//     icon: "fas fa-vial",
//   },
//   {
//     name: "Integration & E2E Testing",
//     level: "88%",
//     category: "Testing",
//     icon: "fas fa-check-circle",
//   },
//   {
//     name: "Code Review & Best Practices",
//     level: "92%",
//     category: "Testing",
//     icon: "fas fa-code-branch",
//   },

//   // 8. Observability & Performance (Big senior signal)
//   {
//     name: "Logging (ELK, Winston)",
//     level: "88%",
//     category: "Observability",
//     icon: "fas fa-file-alt",
//   },
//   {
//     name: "Monitoring (Prometheus, Grafana)",
//     level: "85%",
//     category: "Observability",
//     icon: "fas fa-chart-area",
//   },
//   {
//     name: "Performance Optimization",
//     level: "90%",
//     category: "Observability",
//     icon: "fas fa-tachometer-alt",
//   },

//   // 9. AI / GenAI (Keep but don’t oversell)
//   {
//     name: "LLMs / Generative AI",
//     level: "85%",
//     category: "AI",
//     icon: "fas fa-brain",
//   },
//   { name: "LangChain", level: "85%", category: "AI", icon: "fab fa-python" },
//   { name: "LangGraph", level: "82%", category: "AI", icon: "fab fa-python" },

//   // 10. Mobile (Optional but good signal)
//   {
//     name: "React Native",
//     level: "85%",
//     category: "Mobile",
//     icon: "fas fa-mobile-alt",
//   },

//   // 11. Collaboration & Leadership
//   {
//     name: "Agile / Scrum",
//     level: "92%",
//     category: "Management",
//     icon: "fas fa-users",
//   },
//   {
//     name: "Technical Leadership",
//     level: "90%",
//     category: "Management",
//     icon: "fas fa-user-tie",
//   },
//   {
//     name: "Mentoring Engineers",
//     level: "90%",
//     category: "Management",
//     icon: "fas fa-chalkboard-teacher",
//   },

//   // 12. Tools
//   {
//     name: "Git / GitHub / GitLab",
//     level: "95%",
//     category: "Tools",
//     icon: "fab fa-git-alt",
//   },
//   {
//     name: "Jira / Confluence",
//     level: "88%",
//     category: "Tools",
//     icon: "fab fa-jira",
//   },
//   { name: "Figma", level: "75%", category: "Tools", icon: "fab fa-figma" },
// ];
const portfolioItems = [
  {
    title: "Enterprise SaaS Dashboard",
    description:
      "Developed a comprehensive B2B SaaS dashboard with real-time data analytics, user role management, and third-party API integrations using MERN stack.",
    image: "img/portfolio/portfolio-1.jpg",
    link: "#", // Placeholder link
    categories: ["web", "app", "mern"],
  },
  {
    title: "Headless E-commerce Storefront",
    description:
      "Engineered a high-performance headless e-commerce platform using React/Next.js, integrated with a custom backend for product management and secure payment gateways.",
    image: "img/portfolio/portfolio-2.jpg",
    link: "#", // Placeholder link
    categories: ["web", "react", "e-commerce"],
  },
  {
    title: "AI-Powered Content Generation Platform",
    description:
      "Built a GenAI web application enabling users to generate marketing copy, articles, and social media content using advanced LLMs, with a focus on prompt engineering and scalability.",
    image: "img/portfolio/portfolio-3.jpg",
    link: "#", // Placeholder link
    categories: ["web", "ai", "genai"],
  },
  {
    title: "Cross-Platform Logistics Mobile App",
    description:
      "Designed and developed a React Native mobile application for real-time logistics tracking, including driver management, route optimization, and delivery status updates.",
    image: "img/portfolio/portfolio-4.jpg",
    link: "#", // Placeholder link
    categories: ["mobile", "app", "react-native"],
  },
  {
    title: "Custom Multi-Vendor Marketplace",
    description:
      "Created a robust multi-vendor e-commerce marketplace with custom WordPress/WooCommerce development, featuring vendor dashboards, commission management, and secure transactions.",
    image: "img/portfolio/portfolio-5.jpg",
    link: "#", // Placeholder link
    categories: ["web", "e-commerce", "wordpress"],
  },
  {
    title: "Intelligent Customer Support Chatbot",
    description:
      "Implemented an intelligent chatbot solution for customer support, leveraging NLP and machine learning to handle queries, provide instant answers, and escalate complex issues.",
    image: "img/portfolio/portfolio-6.jpg",
    link: "#", // Placeholder link
    categories: ["web", "ai", "chatbot"],
  },
];

// const serviceData = [
//     {
//         title: 'Web Development',
//         description: 'Building responsive and dynamic websites using modern technologies like React, Next.js, and Node.js to deliver exceptional user experiences.',
//         icon: 'fas fa-laptop-code'
//     },
//     {
//         title: 'Creative Web Design',
//         description: 'Designing visually appealing and user-friendly web interfaces that align with brand identity and enhance user engagement.',
//         icon: 'fas fa-paint-brush'
//     },
//     {
//         title: 'Mobile App Development',
//         description: 'Creating cross-platform mobile applications with React Native and Flutter, ensuring seamless performance on both iOS and Android devices.',
//         icon: 'fas fa-mobile-alt'
//     },
//     {
//         title: 'Backend Development',
//         description: 'Designing robust backend systems with Node.js, Express, and databases like MongoDB and SQL to power scalable web applications.',
//         icon: 'fas fa-server'
//     },
//     {
//         title: 'Cloud & DevOps',
//         description: 'Implementing cloud solutions using AWS, Azure, and GCP, along with CI/CD pipelines to streamline development and deployment processes.',
//         icon: 'fas fa-cloud'
//     },
//     {
//         title: 'AI & Machine Learning',
//         description: 'Integrating AI and machine learning capabilities into applications, including generative AI solutions using LLMs for enhanced user interactions.',
//         icon: 'fas fa-robot'
//     },
//     {
//         title: 'UI/UX Design',
//         description: 'Crafting intuitive and engaging user interfaces with tools like Figma and Adobe XD, focusing on user-centered design principles.',
//         icon: 'fas fa-pencil-ruler'
//     },
//     {
//         title: 'E-commerce Solutions',
//         description: 'Developing custom e-commerce platforms and multi-vendor marketplaces using WordPress/WooCommerce and headless architectures for optimal performance.',
//         icon: 'fas fa-shopping-cart'
//     },
//     {
//         title: 'SEO & Performance',
//         description: 'Optimizing websites for search engines and improving performance to enhance visibility, user engagement, and conversion rates.',
//         icon: 'fas fa-chart-line'
//     },
//     {
//         title: 'Technical Consulting',
//         description: 'Providing expert technical consulting services, including system design, architecture reviews, and technology stack recommendations to drive project success.',
//         icon: 'fas fa-user-tie'
//     },
//     {
//         title: 'Project Management',
//         description: 'Offering project management services using Agile and Scrum methodologies to ensure timely delivery, effective communication, and quality outcomes.',
//         icon: 'fas fa-tasks'
//     },
//     {
//         title: 'AI Automation Solutions',
//         description: 'Developing AI-driven automation tools to streamline business processes, enhance productivity, and reduce operational costs.',
//         icon: 'fas fa-robot'
//     }
// ]
const serviceData = [
  {
    title: "SaaS Application Development",
    description:
      "Building scalable SaaS applications using React, Next.js, Node.js, and TypeScript — from MVP to production-ready systems.",
    icon: "fas fa-layer-group",
  },
  {
    title: "Full Stack Development",
    description:
      "Developing fast, maintainable web applications with modern frontend and backend technologies focused on performance and scalability.",
    icon: "fas fa-laptop-code",
  },
  {
    title: "Backend Development & APIs",
    description:
      "Designing secure and scalable backend systems with Node.js, including REST APIs, authentication, and third-party integrations.",
    icon: "fas fa-server",
  },
  {
    title: "System Design & Architecture",
    description:
      "Helping design robust application architectures, improving scalability, performance, and long-term maintainability.",
    icon: "fas fa-sitemap",
  },
  {
    title: "Cloud Deployment (AWS)",
    description:
      "Deploying and managing applications on AWS with CI/CD and Docker for reliable and scalable production systems.",
    icon: "fas fa-cloud",
  },
  {
    title: "Database Design & Optimization",
    description:
      "Designing efficient database structures and optimizing queries to handle growing user traffic and improve performance.",
    icon: "fas fa-database",
  },
  {
    title: "AI / LLM Integration",
    description:
      "Integrating AI-powered features like chatbots, automation tools, and intelligent workflows using modern LLM solutions.",
    icon: "fas fa-brain",
  },
  {
    title: "Performance Optimization",
    description:
      "Improving application speed, scalability, and Core Web Vitals to enhance user experience and system efficiency.",
    icon: "fas fa-tachometer-alt",
  },
  {
    title: "Frontend Development (React / Next.js)",
    description:
      "Building responsive and high-performance user interfaces with modern frontend practices and clean architecture.",
    icon: "fab fa-react",
  },
  {
    title: "Technical Consulting",
    description:
      "Providing guidance on tech stack selection, system improvements, and scaling strategies for startups and teams.",
    icon: "fas fa-user-tie",
  },
];
