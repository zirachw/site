type ImageItem = {
  path?: string;
  alt: string;
  isGalleryLink?: boolean;
};

export const IMAGES: Array<ImageItem> = [
  { path: "/preview/1.jpeg", alt: "Hackathon Ericsson 2025" },
  { path: "/preview/2.jpeg", alt: "Data Analysis Competition PRS ITS 2025" },
  { path: "/preview/6.jpeg", alt: "Kadwil STEI-K 2025" },
  { path: "/preview/3.jpeg", alt: "Beasiswa Unggulan 2024" },
  { path: "/preview/4.jpeg", alt: "Hology UB 8.0" },
  { path: "/preview/5.jpeg", alt: "Compfest UI 2025" },
  { alt: "Gallery Link", isGalleryLink: true },
];

type SkillCategory = {
  title: string;
  skills: string[];
};

export const SKILL_CATEGORIES: Array<SkillCategory> = [
  {
    title: "Programming Languages",
    skills: [
      "Python",
      "JavaScript/TypeScript",
      "C/C++",
      "Java",
      "Golang",
      "Rust",
      "SQL",
      "Haskell",
      "Prolog",
    ],
  },
  {
    title: "Machine Learning & Data Science",
    skills: ["Hugging Face", "Scikit-learn", "TensorFlow", "PyTorch", "Keras", "Pandas"],
  },
  {
    title: "Frontend Development",
    skills: ["React", "React Flow", "Next.js", "Tailwind CSS", "Linaria"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express", "Flask", "FastAPI", "RESTful APIs"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MariaDB", "MySQL", "MongoDB", "Prisma"],
  },
  {
    title: "DevOps & CI/CD",
    skills: ["Docker", "Git", "Azure"],
  },
];

type AwardItem = {
  year: string;
  title: string;
  organization: string;
};

export const AWARDS: Array<AwardItem> = [
  {
    year: "2025",
    title: "3rd Winner Ericsson Hackathon",
    organization: "Ericsson & Qualcomm",
  },
  {
    year: "2025",
    title: "2nd Winner Data Analysis Competition Pekan Raya Statistika ITS",
    organization: "Institut Teknologi Sepuluh Nopember",
  },
  {
    year: "2025",
    title: "1st Winner Sebelas Maret Statistics Data Science",
    organization: "Universitas Sebelas Maret",
  },
  {
    year: "2024",
    title: "Beasiswa Unggulan Awardee",
    organization: "Kemendikbudristek RI",
  },
];

type WritingItem = {
  title: string;
  date: string;
  preview: string;
  slug: string;
};

export const WRITINGS: Array<WritingItem> = [
  {
    title: "IF3270 - ML: Ensemble Methods",
    date: "January 10, 2026",
    preview:
      "Ensemble methods combine multiple machine learning models to improve prediction accuracy and robustness. In this tutorial, we'll explore popular techniques like Bagging, Boosting, and Stacking, and learn how they can help solve complex classification and regression problems.",
    slug: "promises-from-the-ground-up",
  },
  {
    title: "JavaScript: Execution Context & Hoisting",
    date: "January 3, 2026",
    preview:
      "Understanding how JavaScript executes code is crucial for writing better programs. In this tutorial, we'll dive deep into execution contexts, the call stack, and hoisting behavior to demystify how variables and functions are accessible before their declarations.",
    slug: "understanding-javascript-modulo-operator",
  },
];

type ProjectItem = {
  title: string;
  description: string;
  image: string;
  techTags: string[];
  link?: string;
  isPrivate?: boolean;
};

export const PROJECTS: Array<ProjectItem> = [
  {
    title: "Alchemy 2 Recipe Finder",
    description:
      "2nd Big Project for IF2211 Algorithm Strategies 2024/2025. Web-based implementation of BFS and DFS Algorithms in Recipe Searching in the Little Alchemy 2 game.",
    image: "/projects/1.png",
    techTags: ["Go", "Next.js"],
    link: "https://github.com/zirachw/Tubes2_SeleniumSoup4",
  },
  {
    title: "PurryLeveling",
    description:
      "1st Big Project for IF2010 Object-Oriented Programming Course 2024/2025. Developed C++ game using SFML, implementing OOP principles like encapsulation, inheritance, and polymorphism.",
    image: "/projects/2.png",
    techTags: ["OOP", "C++", "ImGUI", "SFML"],
    isPrivate: true,
  },
  {
    title: "OS from Scratch",
    description:
      "Final project for IF2130 Operating System Course 2024/2025. Basically, we made our own x86 Protected Mode 32 bit OS from stratch, running on QEMU emulator.",
    image: "/projects/3.png",
    techTags: ["C", "Assembly"],
    isPrivate: true,
  },
];

type ExperienceItem = {
  date: string;
  location: string;
  title: string;
  organization: string;
  description: string;
  skills: string[];
};

export const EXPERIENCES: Array<ExperienceItem> = [
  {
    date: "June 2025 - Present",
    location: "Hybrid, Bandung",
    title: "Technology Staff in IT",
    organization: "OSKM ITB 2025",
    description:
      "Implemented and integrated the frontend for the Assignment View feature, developing user-friendly interfaces for 100+ committees.",
    skills: ["Next.js", "React-Query", "Shadcn", "Bun", "Docker"],
  },
  {
    date: "June 2025 - Present",
    location: "Remote, Bandung",
    title: "IT Staff in SPARTA 2024",
    organization: "HMIF ITB",
    description:
      "Implemented the SPARTAN Task View, creating intuitive and responsive user interfaces for 500+ users.",
    skills: ["TypeScript", "React-Query", "Shadcn", "Golang"],
  },
  {
    date: "Nov 2024 - Present",
    location: "Hybrid, Bandung",
    title: "Data Community Staff in Competition and Community",
    organization: "HMIF ITB",
    description:
      "Organized Monthly Hands-on Kaggle Playground with 10+ participants. Provided Data Science Curriculums and Notebooks.",
    skills: ["Kaggle", "LaTeX", "Hugging Face", "TensorFlow", "PyTorch", "Keras", "Scikit-learn"],
  },
  {
    date: "Nov 2024 - May 2025",
    location: "Hybrid, Bandung",
    title: "Datavidia Staff",
    organization: "Arkavidia 9.0",
    description:
      "Developed engaging problem sets for Datavidia 9.0, challenging over 300+ teams with real-world data analytics scenarios.",
    skills: ["Kaggle", "Selenium", "Beautiful Soup", "Pandas"],
  },
];
