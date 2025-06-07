import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "José V. Alencar",
  initials: "JV",
  url: "https://dillion.io",
  location: "Sao Paulo, Brazil",
  locationLink: "https://www.google.com/maps/place/saopaulo",
  description:
    "Software engineer, entrepreneur, and reader. Passionate about VR, AI, and robotics.",
  summary:
    "Since 15 building VR experiences. Right now, majoring in Computer Engineering at Inteli - Institute of Technology and Leadership. Interned at the biggest investment bank in Brazil and now building Insiread, a VR app for reading books inside them. Already created projects for Dell, IBM, Volkswagen, and more.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Java",
    "C++",
    "ROS2",
    "Swift",
    "RealityKit",
    "FastAPI",
    "Supabase",
    "AWS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "alencarhub@gmail.com",
    tel: "+5511975026556",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/josevalencar",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/josevalencar/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/josevalencar",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@alencarhub",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Insiread",
      href: "https://insiread.com",
      badges: [],
      location: "Remote",
      title: "Founder and Software Engineer",
      logoUrl: "/insiread.png",
      start: "May 2024",
      end: "Current",
      description:
        "Developed the entire app using Swift and RealityKit for VisionOS. Structured and managed the backend with FastAPI, Supabase, and Docker, utilizing services on AWS. Beyond technology, contributed to marketing and sales strategies, enhancing customer acquisition and expanding product reach.",
    },
    {
      company: "BTG Pactual",
      href: "https://btgpactual.com",
      badges: [],
      location: "Remote",
      title: "Summer Software Engineer Intern",
      logoUrl: "/btg.jpg",
      start: "Jun 2023",
      end: "Ago 2023",
      description:
        "Collaborated in the IT Banking area, creating an internal frontend to dynamically update information within the Administration Portal. Improved operational efficiency for administrators and reduced data updating time",
    },
    {
      company: "BTG Pactual",
      badges: [],
      href: "https://btgpactual.com",
      location: "Remote",
      title: "Winter Software Engineer Intern",
      logoUrl: "/btg.jpg",
      start: "Jan 2024",
      end: "Feb 2024",
      description:
        "Created a dashboard for Funds Managers, enabling easier access to crucial information regarding the “Come-Cotas” event in Brazil’s Investment Funds. Provided valuable tools for informed decision-making during a significant financial event.",
    }
  ],
  education: [
    {
      school: "Inteli - Institute of Technology and Leadership",
      href: "https://www.inteli.edu.br",
      degree: "Bachelor's Degree of Computer Engineering. Full ride scholarship.",
      logoUrl: "/inteli.jpeg",
      start: "2022",
      end: "2026",
    }
  ],
  projects: [
    {
      title: "L’Oréal Brandstorm 2024",
      dates: "April 2024",
      active: true,
      description:
        "Activation for L’Oréal Brandstorm 2024, using marker‐based augmented reality to transform the press kit into an immersive, interactive brand experience. ",
      technologies: [
      ],
      links: [

      ],
      image: "",
      video:
        "loreal.mov",
    },
    {
      title: "Meta Spark Worlds Challenge Winner ($1,000)",
      dates: "June 2022",
      active: true,
      description:
        "Designed and developed an AR experience for Meta Platforms with the theme of Stranger Things, being accesssed by thousands of users across the world and being one among the winners.",
      technologies: [

      ],
      links: [
      ],
      image: "",
      video: "stranger-things.mov",
    },
    {
      title: "Renault",  
      dates: "March 2024",
      active: true,
      description:
        "Built an AR experience for Renault that uses plane tracking to preview an upcoming employee trip, placing immersive 3D scenes of their future journey directly into their real-world environment. ",
      technologies: [

      ],
      links: [
      ],
      image: "",
      video: "renault.mov",
    },
    {
      title: "Corteva",
      dates: "June 2023",
      active: true,
      description:
        "Created an AR experience for Corteva to unveil their new Ultrisha N product, using real-time hand tracking to illustrate healthier corn growth through interactive 3D visuals and soil-process simulations.",
      technologies: [
      ],
      links: [
      ],
      image: "",
      video:
        "corteva.mov",
    },
  ],
  hackathons: [
    {
      title: "[Project] IBM - Autonomous Healthcare Robot",
      dates: "October, 2024 - December,2024",
      location: "Sao Paulo, Brazil",
      description:
        "Developed a system to predict potential failures at checkpoints during T-Cross production line, allowing for early intervention and reduced downtime, with the entire pipepline running in the cloud.",
      image:
        "ibm.jpg",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/volkswagen.mp4",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "[Hackathon] Brex Challenge - 2nd Place (R$750,00)",
      dates: "November, 2024",
      location: "Sao Paulo, Brazil",
      description:
        "Created a delinquency collections procedure for the Empower Billing team to effectively collect payments.",
      image:
        "brex.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "[Hackathon] Stark Bank AI Revolution - 3rd Place (R$8.000)",
      dates: "September, 2024",
      location: "Sao Paulo, Brazil",
      description:
        "Developed in less than 24 hours a Financial Forecasting tool for C-Levels to predict and make 'what-if' scenarios across 20+ KPIs, using state-of-the-art deep learning models.",
      image:
        "Stark-Bank.png.webp",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "[Project] Volkswagen - Deep Learning System",
      dates: "August, 2024 - October,2024",
      location: "Sao Paulo, Brazil",
      description:
        "Developed a system to predict potential failures at checkpoints during T-Cross production line, allowing for early intervention and reduced downtime, with the entire pipepline running in the cloud.",
      image:
        "volkswagen.png",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/volkswagen.mp4",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    }
  ],
} as const;
