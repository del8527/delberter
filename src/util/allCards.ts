import FordProWhite from "../assets/FordProWhite.svg";
import NovaWhite from "../assets/NovaWhite.svg";
import GeoGrindWhite from "../assets/GeoGrindWhite.svg";
export type SingleCard = {
  imageSource: string;
  title: string;
  titleUrl: string;
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
      "Developed core product features for creative automation, used by 250+ media agencies and publishers.",
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
    date: "April 2023 - Present",
    role: "Founder - SWE Lead, Desktop and Web",
    description:
      "Established 90% of our codebase/backend, leading to the successful launch of GeoGrind's beta in Sep.",
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

export const ProjectCards: Array<SingleCard> = [
  {
    imageSource: GeoGrindWhite,
    title: "AI Resume Writer",
    date: "April 2023 - Present",
    role: "Software Engineer",
    description: "",
    technologies: ["Flutter", "Dart"],
  },
  {
    imageSource: GeoGrindWhite,
    title: "AI Resume Writer",
    date: "April 2023 - Present",
    role: "Software Engineer",
    description: "",
    technologies: ["Flutter", "Dart"],
  },
  {
    imageSource: GeoGrindWhite,
    title: "AI Resume Writer",
    date: "April 2023 - Present",
    role: "Software Engineer",
    description: "",
    technologies: ["Flutter", "Dart"],
  },
];
