import {
  Briefcase,
  Code,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Phone,
  Rocket,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiRailway,
  SiJira,
} from "react-icons/si";
import { VscTerminalPowershell } from "react-icons/vsc";
import { GrCycle } from "react-icons/gr";

// === PERSONAL INFO ===
export const personalInfo = {
  name: "Mikha Simanjuntak",
  title: "Full Stack Developer & Gaming Enthusiast",
  location: "Jakarta, Indonesia",
  email: "mikhajuntaq@gmail.com",
  phone: "+62 896 1865 7200",
  cvUrl: "/Mikha_Januardi_CV.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/mikha-januardi/",
    github: "https://github.com/fangel123",
    instagram: "https://www.instagram.com/mikhajuntaq/",
    tiktok: "https://www.tiktok.com/@mikhajuntaq",
  },
  originStory: [
    {
      icon: GraduationCap,
      title: "M memulai Misi",
      description:
        "Perjalanan saya dimulai dengan rasa ingin tahu yang besar terhadap cara kerja game dan website. Ini mendorong saya untuk mendalami dunia pemrograman secara otodidak, mempelajari dasar-dasar HTML, CSS, dan JavaScript.",
    },
    {
      icon: Rocket,
      title: "Level Up: Menguasai React & Next.js",
      description:
        "Setelah menguasai dasar, saya fokus pada ekosistem React dan Next.js. Saya jatuh cinta dengan cara kerjanya yang reaktif dan efisien dalam membangun antarmuka pengguna yang kompleks dan modern.",
    },
    {
      icon: Briefcase,
      title: "Side Quest: Proyek Freelance Pertama",
      description:
        "Dengan bekal yang cukup, saya mulai mengambil proyek-proyek sampingan. Ini adalah arena latihan terbaik yang mengasah kemampuan saya dalam memecahkan masalah nyata dan berkomunikasi dengan klien.",
    },
    {
      icon: Code,
      title: "Endgame: Full Stack Developer",
      description:
        "Kini, saya telah berevolusi menjadi seorang Full Stack Developer, siap untuk menghadapi tantangan apa pun dan membangun aplikasi web yang tangguh, skalabel, dan tentunya, menyenangkan untuk digunakan.",
    },
  ],
  stats: [
    { value: "1+", label: "Tahun Pengalaman" },
    { value: "4+", label: "Proyek Selesai" },
    { value: "999+", label: "Kopi Dihabiskan" },
  ],
};

// === SKILLS TREE ===
export const skills = {
  frontend: [
    { name: "React.js", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "REST API", icon: VscTerminalPowershell },
  ],
  database: [
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },
  ],
  toolsAndDevops: [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Postman", icon: SiPostman },
    { name: "Vercel", icon: SiVercel },
    { name: "Railway", icon: SiRailway },
    { name: "CI/CD", icon: GrCycle },
    { name: "Jira", icon: SiJira },
  ],
};

// === MISSION ARCHIVE ===
export const projects = [
  {
    title: "TokoKita E-Commerce",
    imageUrl: "/projects/home-buyer.png",
    description:
      "TokoKita adalah platform e-commerce full-stack dan proyek portofolio yang menghubungkan penjual dan pembeli. Dikembangkan dengan fokus pada kualitas implementasi dan arsitektur solid, platform ini menampilkan fitur kompleks untuk mendemonstrasikan keahlian pengembangan web modern.",
    tags: [
      "React",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],
    rarity: "EPIC",
    liveLink: "https://tokokita-bymik.vercel.app/",
    sourceLink: "https://github.com/fangel123/tokokita.git",
  },
  {
    title: "Church Management System",
    imageUrl: "/projects/church-management.png",
    description:
      "Aplikasi web full-stack untuk administrasi gereja dengan otentikasi aman, manajemen anggota, penjadwalan layanan, dan pelacakan kehadiran. Mengurangi entri data manual sebesar 60%.",
    tags: ["React", "JavaScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    rarity: "EPIC",
    liveLink: "https://proyek-gereja.vercel.app/",
    sourceLink:
      "https://github.com/fangel123/proyek-gereja/tree/main/proyek-gereja",
  },
  {
    title: "Full-Stack Analytics Dashboard",
    imageUrl: "/projects/analytics-dashboard.png",
    description:
      "Membangun platform analitik yang memproses 9.000+ catatan Excel melalui pipeline ETL dengan visualisasi interaktif. Mengubah dataset kompleks menjadi wawasan visual yang intuitif.",

    tags: ["React", "JavaScript", "Node.js", "Express", "PostgreSQL", "ETL"],
    rarity: "EPIC",
    liveLink: "https://analytics-reporting-dashboard.vercel.app/",
    sourceLink: "https://github.com/fangel123/analytics-reporting-dashboard",
  },
  {
    title: "Jubelio V2 Contribution",
    imageUrl: "/projects/jubeliov2.png",
    description:
      "Berkontribusi pada pengembangan platform omnichannel terintegrasi yang menyederhanakan operasi bisnis di berbagai marketplace, gudang, sistem POS, dan modul akuntansi.",

    tags: ["TypeScript", "Node.js", "Jira", "Github", "Tailwind CSS", "Frontend"],
    rarity: "RARE",
    liveLink: "https://v2.jubelio.com/",
    sourceLink: null,
  },
];

// === CONTACT INFO ===
export const contactChannels = [
  {
    name: "Email Protocol",
    value: personalInfo.email,
    icon: Mail,
    href: `mailto:${personalInfo.email}`,
  },
  {
    name: "Voice Channel",
    value: personalInfo.phone,
    icon: Phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  },
  {
    name: "LinkedIn Comms",
    value: "mikha-januardi",
    icon: Linkedin,
    href: personalInfo.links.linkedin,
  },
  {
    name: "GitHub Repository",
    value: "fangel123",
    icon: Github,
    href: personalInfo.links.github,
  },
];
