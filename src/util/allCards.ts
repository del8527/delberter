import FordProWhite from "../assets/FordProWhite.svg";
import NovaWhite from "../assets/NovaWhite.svg";
import GeoGrindWhite from "../assets/GeoGrindWhite.svg";

import AiResumeWriter from "../assets/AiResumeWriter.svg";
import PayPalWhite from "../assets/PayPalWhite.svg";
import DiscordWhite from "../assets/DiscordWhite.svg";
export type SingleCard = {
  imageSource?: string;
  title: string;
  titleUrl?: string;
  date?: string;
  role?: string;
  description: string;
  technologies: Array<string>;
};
export const ExperienceCards: Array<SingleCard> = [
  {
    imageSource: FordProWhite,
    title: "Ford Pro",
    titleUrl: "https://www.fordpro.com/en-us/",
    date: "May 2023 - Aug 2023",
    role: "Software Engineering Intern",
    description:
      "Worked on Ford Pro Gateway, the platform for Ford's commercial vehicle services and apps (fordpro.com).",
    technologies: [
      "React",
      "TypeScript",
      "Sass",
      "Node",
      "Express",
      "Jest",
      "Nx",
      "Google Cloud Platform",
      "Docker",
    ],
  },
  {
    imageSource: NovaWhite,
    title: "Nova",
    titleUrl: "https://www.createwithnova.com/",
    date: "Sep 2022 - Dec 2022",
    role: "Full-stack Developer",
    description:
      "Developed core product features for creative automation used by 250+ media agencies and publishers.",
    technologies: [
      "React",
      "TypeScript",
      "Django",
      "Python",
      "Sass",
      "Jest",
      "SQL",
      "Jenkins",
    ],
  },
  {
    imageSource: GeoGrindWhite,
    title: "GeoGrind",
    titleUrl: "https://about-geogrind.delberter.com/",
    date: "Apr 2023 - Present",
    role: "Engineer Lead, Desktop and Web",
    description:
      "Established 90% of our codebase/backend, leading to the successful launch of GeoGrind's beta in September.",
    technologies: [
      "React",
      "TypeScript",
      "Sass",
      "Electron",
      "Next",
      "Firebase",
      "Google Cloud Platform",
      "Cloudflare",
    ],
  },
];

export const BigProjectCards: Array<SingleCard> = [
  {
    imageSource: AiResumeWriter,
    title: "AI Resume Writer",
    titleUrl: "https://ai-resume-builder.github.io/airesumewriter.github.io/",
    date: "",
    role: "",
    description:
      "Implemented asynchronous parallel execution to achieve a 75% reduction in resume generation time.",
    technologies: ["Flutter", "Dart"],
  },
  {
    imageSource: PayPalWhite,
    title: "PayPal Data Analysis",
    titleUrl:
      "https://colab.research.google.com/drive/1DnyL-g3GiQQfkA77WT_Kbfq_3XEMaFs7?usp=sharing",
    date: "",
    role: "",
    description:
      "Analyzed transactions for my e-commerce business which generated $30,000+ in profit.",
    technologies: ["Python", "Google Colab", "Pandas", "Matplotlib", "Prophet"],
  },
  {
    imageSource: DiscordWhite,
    title: "Del Bot",
    titleUrl: "https://github.com/del8527/del-bot",
    date: "",
    role: "",
    description:
      "Developed a Discord bot to automate processes in Pit Discord servers, used by nearly 8000 users.",
    technologies: ["Javascript", "Node.js", "Discord.js", "Axios"],
  },
];

export const SmallProjectCards: Array<SingleCard> = [
  {
    imageSource: "",
    title: "Personal Website",
    titleUrl: "https://delberter.com/",
    date: "",
    role: "",
    description: "You're looking at it right now!",
    technologies: ["React", "TypeScript", "Sass"],
  },
  {
    imageSource: "",
    title: "Sort Visualizer",
    titleUrl: "https://github.com/del8527/Sort-Visualizer",
    date: "",
    role: "",
    description: "Visualizer for classic sorting algorithms.",
    technologies: ["React", "JavaScript"],
  },
  {
    imageSource: "",
    title: "Type Testing Website",
    titleUrl: "https://github.com/del8527/typing",
    date: "",
    role: "",
    description: "Website to test your typing speed.",
    technologies: ["React", "JavaScript", "Node", "Bootstrap"],
  },
  {
    imageSource: "",
    title: "Watopoly",
    titleUrl: "",
    date: "",
    role: "",
    description: "Monopoly but Waterloo-themed.",
    technologies: ["C++"],
  },
  {
    imageSource: "",
    title: "Skiing is Life",
    titleUrl: "https://del8527.github.io/",
    date: "",
    role: "",
    description: "Static website to display information all about skiing.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];
