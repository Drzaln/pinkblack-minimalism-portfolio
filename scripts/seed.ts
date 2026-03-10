// scripts/seed.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Profile from '@/lib/db/models/Profile';
import Experience from '@/lib/db/models/Experience';
import Education from '@/lib/db/models/Education';
import Project from '@/lib/db/models/Project';

dotenv.config({ path: '.env.local' });

const PROFILE_DATA = {
  name: "Kiromi",
  role: "Software & AI Engineer",
  photo: "/IMG_7694.jpg",
  summary:
    "With 5+ years building production systems across E‑Commerce, E‑Wallet/Fintech, HRIS, and Government projects. I blend backend engineering, AI/ML, and pragmatic product thinking to ship measurable outcomes.",
  location: "Denpasar, Bali, Indonesia",
  isRelocatable: true,
  links: {
    email: "mailto:hafizha.krmmz@gmail.com",
    resume: "https://drive.google.com/drive/folders/1tywFeR5N-Fg8UYcrrrLr4UxrjhGZlL8U?usp=sharing",
    github: "https://github.com/hafizha19",
    linkedin: "https://www.linkedin.com/in/hafizhatul-kiromi-mz/",
  },
  skills: [
    "Go",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Redis",
    "gRPC",
    "Kubernetes",
    "LangChain",
    "OpenAI",
    "LLM Ops",
    "Next.js",
    "React",
    "Tailwind",
  ],
};

const EXPERIENCES_DATA = [
  {
    period: "Jun 2025 – March 2026",
    title: "AI Engineer (Agentic Systems)",
    org: "Wwwaste Pte. Ltd",
    bullets: [
      "Architected autonomous agentic workflows using LangGraph and FastAPI—implemented state-aware prompting, Pydantic I/O validation, and intent routing to automate waste management logistics.",
      "Developed a geospatial routing engine via Google Cloud Route Optimization and OSRM—leveraged KNN algorithms and resilient retry logic on GCP to optimize multi-pickup sequences and fuel efficiency.",
      "Engineered a specialized OCR pipeline using Tesseract with custom ROI preprocessing to digitize physical logs into structured, queryable data for waste management reporting.",
      "Spearheaded a 24/7 RAG-based customer support system powered by Qdrant Vector DB and Redis workers, enabling context-aware responses from internal service manuals.",
      "Architected end-to-end ESG data pipelines using Prefect, DuckDB, and BigQuery—tracked carbon emissions and ensured LLM reliability through Phoenix Arize and LangSmith observability.",
      "Built cross-platform n8n automation workflows, integrating OpenAI-generated content with real-time Slack and Discord notifications to enhance organizational transparency."
    ],
    order: 1,
    isActive: true,
  },
  {
    period: "Jun 2023 – Aug 2025",
    title: "Senior Backend Engineer (HRMS)",
    org: "Jobseeker Company",
    bullets: [
      "Developed and customized HRMS for 10+ clients (21 projects) covering recruiting and employee management.",
      "Architected scalable backend with Laravel, Spring Boot, and FastAPI, boosting performance and maintainability.",
      "Migrated databases from MySQL to MongoDB, improving query speed and reducing API timeouts.",
      "Enhanced observability with structured logging and tracking mechanisms.",
      "Led a cross-functional team of 10+ developers to deliver projects on time and to spec.",
    ],
    order: 2,
    isActive: true,
  },
  {
    period: "Mar 2022 – Jun 2023",
    title: "Associate Software Engineer (E-Commerce)",
    org: "SIRCLO (Icube by SIRCLO)",
    bullets: [
      "Delivered and customized 6 E-Commerce platforms using Magento, Shopware, and Laravel.",
      "Optimized back-office performance, improved query handling, and implemented Dockerized environments.",
      "Resolved frontend issues on Next.js PWA to improve UI performance and responsiveness.",
      "Integrated GraphQL APIs to streamline frontend data retrieval and reduce response times.",
    ],
    order: 3,
    isActive: true,
  },
  {
    period: "Mar 2021 – Mar 2022",
    title: "Backend Engineer (E-Wallet / Gateway)",
    org: "Sarana Pembayaran Syariah",
    bullets: [
      "Developed E-Wallet and Payment Gateway systems using Laravel.",
      "Implemented reliable transaction processing with robust error handling and reconciliation logic.",
    ],
    order: 4,
    isActive: true,
  },
  {
    period: "Aug 2020 – Mar 2021",
    title: "Full-stack Developer (Gov & E-Commerce)",
    org: "CV. Ergossum",
    bullets: [
      "Built government and e-commerce applications using Laravel and Bootstrap.",
      "Delivered full-stack features with dynamic dashboards, exportable reports, and role-based access control.",
    ],
    order: 5,
    isActive: true,
  },
];

const EDUCATIONS_DATA = [
  {
    period: "Jan 2024 – July 2025",
    title: "AI Bootcamp",
    org: "Pacmann Academy",
    order: 1,
    isActive: true,
  },
  {
    period: "2018 – 2023",
    title: "B.Sc. Informatics Engineering (GPA 3.7/4)",
    org: "UIN Malang",
    order: 2,
    isActive: true,
  },
];

const PROJECTS_DATA = [
  {
    name: "Agentic LLM Platform",
    role: "AI Engineer",
    stack: ["FastAPI", "LangChain", "OpenAI", "n8n", "GCP"],
    description:
      "Agentic system enabling contextual prompting, tool orchestration, and workflow automation for chat assistants and structured content generation.",
    demo: "https://wwwaste.io/",
    order: 1,
    isActive: true,
  },
  {
    name: "HRMS (multi-tenant, B2B2C)",
    role: "Senior Backend Engineer",
    stack: ["Laravel", "Spring Boot", "FastAPI", "MongoDB", "MySQL", "AWS"],
    description:
      "Multi-tenant HR solution covering recruitment and employee management for 10+ enterprise clients with MongoDB-based optimization.",
    demo: "https://dandan.rekrut.site/",
    order: 2,
    isActive: true,
  },
  {
    name: "E-Commerce Platforms",
    role: "Associate Software Engineer",
    stack: ["Magento", "Shopware", "Laravel", "Next.js", "GraphQL", "Docker"],
    description:
      "Delivered 6 high-traffic E-Commerce sites with customized back-office, optimized queries, and seamless frontend-backend integration.",
    demo: "https://asics.co.id/",
    order: 3,
    isActive: true,
  },
  {
    name: "E-Wallet & Gateway System",
    role: "Backend Engineer",
    stack: ["Laravel", "Lumen", "MySQL"],
    description:
      "Payment gateway and e-wallet system with robust reconciliation, ledger management, and retry handling.",
    demo: "#",
    order: 4,
    isActive: true,
  },
  {
    name: "Government Reporting App",
    role: "Full-stack Developer",
    stack: ["Laravel", "Bootstrap", "Vanilla JS"],
    description:
      "Delivered data-driven reporting applications with KPI dashboards, role-based access, and Excel/PDF export features.",
    demo: "https://sinfra.jatimprov.go.id/",
    order: 5,
    isActive: true,
  },
];

const POSTS_DATA = [
  {
    title:
      "Optimizing Recruitment Predictions: Comparing KNN, Decision Trees, and Random Forests",
    href: "#",
    tags: ["hr", "random‑forest", "ml"],
    publishedAt: new Date(Date.now() - 8 * 30 * 24 * 60 * 60 * 1000), // 8 months ago
    isActive: true,
  },
  {
    title: "Recruitment Analytics – Exploring 70k+ Applicants (Kaggle)",
    href: "#",
    tags: ["data‑analytics"],
    publishedAt: new Date(Date.now() - 9 * 30 * 24 * 60 * 60 * 1000), // 9 months ago
    isActive: true,
  },
];

async function seed() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    
    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await Promise.all([
      Profile.deleteMany({}),
      Experience.deleteMany({}),
      Education.deleteMany({}),
      Project.deleteMany({}),
    //   Post.deleteMany({}),
    ]);
    console.log('✅ Existing data cleared');

    // Seed Profile
    console.log('👤 Seeding Profile...');
    await Profile.create(PROFILE_DATA);
    console.log('✅ Profile seeded');

    // Seed Experiences
    console.log('💼 Seeding Experiences...');
    await Experience.insertMany(EXPERIENCES_DATA);
    console.log(`✅ ${EXPERIENCES_DATA.length} Experiences seeded`);

    // Seed Educations
    console.log('🎓 Seeding Educations...');
    await Education.insertMany(EDUCATIONS_DATA);
    console.log(`✅ ${EDUCATIONS_DATA.length} Educations seeded`);

    // Seed Projects
    console.log('🚀 Seeding Projects...');
    await Project.insertMany(PROJECTS_DATA);
    console.log(`✅ ${PROJECTS_DATA.length} Projects seeded`);

    // Seed Posts
    // console.log('📝 Seeding Posts...');
    // await Post.insertMany(POSTS_DATA);
    // console.log(`✅ ${POSTS_DATA.length} Posts seeded`);

    console.log('\n🎉 Seeding completed successfully!');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 MongoDB connection closed');
  }
}

seed();