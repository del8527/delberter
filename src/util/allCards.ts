import FordProWhite from "../assets/FordProWhite.svg";
import NovaWhite from "../assets/NovaWhite.svg";
import GeoGrindWhite from "../assets/GeoGrindWhite.svg";
export type SingleCard = {
  imageSource: string;
  title: string;
  date?: string;
  role?: string;
  description: JSX.Element;
  technologies: Array<string>;
};
export const ExperienceCards: Array<SingleCard> = [
  {
    imageSource: FordProWhite,
    title: "Ford Pro",
    date: "May 2023 - Aug 2023",
    role: "Software Engineering Intern",
    description: "Platform",
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
    date: "Sep 2022 - Dec 2022",
    role: "Full-stack Developer",
    description: "Adtech",
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
    date: "April 2023 - Present",
    role: "Founder - SWE Lead, Desktop and Web",
    description: "100k lines of code",
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
