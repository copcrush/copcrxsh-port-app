export const cv = {
  name: "Navaphan Singkaew",
  brand: "COPCRXSH",
  title: "Full-Stack Developer",
  location: "Bangkok, Thailand",
  email: "navaphan.si@gmail.com",
  phone: "+66-9-6924-2515",
  linkedin: "https://linkedin.com/in/navaphan-singkaew-bb9575240",
  github: "https://github.com/copcrush",
  summary:
    "Full-stack developer with 2 years of experience shipping production web apps using React, Next.js, Node.js, and Nest.js. Previously worked as a structural engineer, coordinating with architects, contractors, and clients on live construction projects. That background carries over directly: I scope work carefully, read third-party API docs on my own, and integrate payment, ERP, and government tax systems without breaking what's already running. Currently building a sales system for an air-conditioning distributor and taking on freelance work alongside a full-time developer role.",
  heroLine:
    "Full-stack developer shipping production apps with React, Next.js, Node.js, and Nest.js.",
  skills: [
    {
      group: "Languages",
      items: ["JavaScript", "TypeScript", "HTML", "CSS", "Go (basic)"],
    },
    {
      group: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "Vue.js",
        "Nuxt.js",
        "Tailwind CSS",
        "ShadCN",
        "Ant Design",
        "Ant Design Vue",
        "Nuxt UI",
      ],
    },
    {
      group: "Backend",
      items: ["Node.js", "Nest.js", "RESTful API", "WebSocket", "GraphQL"],
    },
    {
      group: "Database & ORM",
      items: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Prisma",
        "Supabase",
        "Redis (basic)",
      ],
    },
    {
      group: "Integrations",
      items: [
        "Stripe",
        "SAP B1",
        "n8n",
        "QR payment gateways",
        "Banking services",
        "e-Tax / withholding tax",
        "AWS S3",
      ],
    },
    {
      group: "Tools & DevOps",
      items: [
        "Docker",
        "Jenkins",
        "Kubernetes",
        "Vercel",
        "Netlify",
        "Git",
        "Postman",
        "Bruno",
        "Jira",
      ],
    },
  ],
  experience: [
    {
      role: "Developer (Outsource)",
      company: "SCGJWD (Dynamic IT Solutions)",
      period: "Apr 2025 — Present",
      note: "Employed via 40Hours Recruitment (Thailand) Co., Ltd.",
      bullets: [
        "Delivered a responsive Nuxt/Vue admin UI (desktop + mobile) for a self-storage facility operations platform, covering billing, lock operations, and user/role management.",
        "Built Nest.js services for invoices, credit notes, multi-channel payments, and Thai e-Tax compliance.",
        "Added real-time WebSocket updates, JWT/RBAC, payment webhooks, and third-party system integrations.",
      ],
    },
    {
      role: "Freelance Full-Stack Developer",
      company: "Self-Employed",
      period: "Jul 2025 — Present",
      bullets: [
        "Building a sales and service platform for an air-conditioning distributor, covering product catalog, quotation/order management, and installation job tracking from a single admin dashboard.",
        "Designed the workflow from customer inquiry to order confirmation to installation scheduling, replacing a manual process previously run over Line/spreadsheets.",
        "Sole developer on the project, working directly with the business owner from requirements gathering through system design and deployment.",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "HAUPCAR",
      period: "Jul 2024 — Feb 2025",
      bullets: [
        "Built web applications end-to-end with Next.js/React.js, including reusable custom Hooks and CRUD features consumed across multiple modules.",
        "Integrated RESTful APIs for frontend-backend communication and managed data persistence across MongoDB and MySQL.",
        "Deployed and maintained services with Docker and Kubernetes; worked in Agile sprints tracked via Jira.",
      ],
    },
    {
      role: "Structural Engineer",
      company: "WOR Consultant Co., Ltd",
      period: "Aug 2022 — Apr 2023",
      bullets: [
        "Coordinated with architects, contractors, and clients on live construction projects — experience that now informs careful scoping and stakeholder communication in software work.",
      ],
    },
  ],
  education: [
    {
      title: "Bachelor of Engineering, Civil Engineering",
      org: "Kasetsart University",
      period: "Aug 2018 — Apr 2022",
    },
    {
      title: "Full-Stack Development Bootcamp Course",
      org: "WeStride Institute of Technology",
      period: "Jul 2023 — Apr 2024",
    },
    {
      title: "Introduction to HTML, CSS, Python, JavaScript",
      org: "FutureSkill",
      period: "May 2024",
    },
  ],
  personalProjects: [
    {
      title: "TNP Air",
      blurb: "Air-con sales & service platform",
      live: "https://tnp-air-app.vercel.app/",
      period: "Jul 2025 — Present",
    },
    {
      title: "K-Bix-Pop",
      blurb: "Full-stack e-commerce demo",
      live: "https://k-bix-pop.vercel.app/",
      period: "Apr 2026 — Present",
    },
    {
      title: "Forecasty Weather App",
      blurb: "Weather forecast web app",
      live: "https://forecasty-weather.netlify.app/",
      period: "Jan 2024 — Feb 2024",
    },
  ],
} as const;
