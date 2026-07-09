import LPU from "../src/assets/images/LPU.webp"
import APS from "../src/assets/images/APS.webp"
import KPS from "../src/assets/images/KPS.webp"

export const aboutData = {
  name: "Sudip Mandal",
  role: "Full Stack Developer",
  location: "Kolkata, India",
  profileImage: "https://sudipoffice.github.io/portfolioImages/images/Portfolio/sudipBW.webp",
  bio: [
    "Full Stack Developer specializing in the MERN stack with over 2 years of experience building production-grade web applications. Currently engineering AI-driven recruitment technology at Banao Technologies — owning full-stack modules from design through deployment, including AI Interview systems, automated candidate assessment, and LLM-powered reporting dashboards.",
    "Proficient across the entire development spectrum: designing React/Next.js interfaces with TypeScript, architecting RESTful APIs with Node.js/Express and MongoDB/Mongoose, implementing JWT-based authentication with role-based access control, and integrating LLMs (Gemini) into real product workflows. Also experienced in browser automation with Playwright, containerized deployments with Docker, and VPS infrastructure management."
  ],
  highlights: [
    "MERN stack",
    "AI-driven",
    "AI Interview",
    "LLM-powered",
    "RESTful APIs",
    "Playwright",
    "Gemini",
    "TypeScript",
    "Docker",
    "JWT"
  ],
  chips: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Express", "Playwright", "Docker", "Gemini", "JWT"]
}

export const experienceData = [
  {
    id: 1,
    company: "Banao Technologies",
    role: "Full Stack Intern",
    location: "Across The Globe",
    period: "Jan 2026 – Present",
    dotColor: "bg-teal-500",
    highlights: [
      "Engineered end-to-end full-stack features for an AI-driven recruitment platform using React.js/Next.js and Node.js/Express, independently owning modules such as AI Interview, Assessments, Candidate Management, and Reporting Dashboards from design through production deployment",
      "Architected RESTful APIs, MongoDB/Mongoose data models, and JWT-based authentication with role-based access control, enabling secure project-scoped workflows across production and pre-production environments",
      "Integrated LLM (Gemini) workflows into core product features including AI-generated technical documentation, test cases, and candidate reports, reducing manual content-generation effort and accelerating feature delivery",
      "Built and scaled a Playwright-based browser automation framework with rule-based verification, automating daily test runs, failure analysis, and detailed reporting to significantly reduce manual QA effort",
      "Managed containerized deployments (Docker, Docker Compose) on VPS infrastructure and resolved production incidents, ensuring reliable releases and minimal downtime across environments"
    ],
    skills: ["React.js", "Next.js", "Node.js", "Express", "MongoDB", "Mongoose", "Gemini", "Playwright", "Docker", "JWT", "REST APIs", "Linux"]
  }
]

export const skillsData = [
  {
    category: "Frontend",
    accent: "bg-blue-500",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend",
    accent: "bg-teal-500",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "bcrypt"]
  },
  {
    category: "Database & Cloud",
    accent: "bg-amber-500",
    skills: ["MongoDB", "Mongoose", "AWS S3", "Presigned URLs"]
  },
  {
    category: "AI & Testing",
    accent: "bg-purple-500",
    skills: ["Playwright", "LLM APIs (Gemini)", "AI-driven Test Automation", "End-to-End Testing"]
  },
  {
    category: "DevOps",
    accent: "bg-green-500",
    skills: ["Docker", "Docker Compose", "Nginx", "Linux", "VPS Deployment"]
  },
  {
    category: "Version Control",
    accent: "bg-rose-500",
    skills: ["Git", "GitHub"]
  }
]

export const educationData = [
  {
    id: 1,
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology in Computer Science and Engineering (Hons.)",
    period: "Jul 2019 – Jul 2023",
    location: "Jalandhar, Punjab",
    logo: LPU,
    dotColor: "bg-blue-700",
    accentBg: "bg-blue-50/50 dark:bg-blue-900/10",
    accentText: "text-blue-700 dark:text-blue-400",
    accentBorder: "border-blue-200/50 dark:border-blue-800/30"
  },
  {
    id: 2,
    institution: "Kalyani Public School",
    degree: "XII (CBSE)",
    period: "2019",
    logo: KPS,
    dotColor: "bg-green-600",
    accentBg: "bg-green-50/50 dark:bg-green-900/10",
    accentText: "text-green-600 dark:text-green-400",
    accentBorder: "border-green-200/50 dark:border-green-800/30"
  },
  {
    id: 3,
    institution: "Army Public School",
    degree: "X (CBSE)",
    period: "2017",
    logo: APS,
    dotColor: "bg-yellow-500",
    accentBg: "bg-yellow-50/50 dark:bg-yellow-900/10",
    accentText: "text-yellow-500 dark:text-yellow-400",
    accentBorder: "border-yellow-200/50 dark:border-yellow-800/30"
  }
]
