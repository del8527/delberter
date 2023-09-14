import FordProWhite from "../assets/FordProWhite.svg";
import NovaWhite from "../assets/NovaWhite.svg";
import GeoGrindWhite from "../assets/GeoGrindWhite.svg";
export type SingleCard = {
  imageSource: string;
  description: string;
  technologies: Array<string>;
};
export const ExperienceCards: Array<SingleCard> = [
  {
    imageSource: FordProWhite,
    description: "Software Engineering Intern at Ford Pro",
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
    description: "Full-stack Developer at Nova",
    technologies: [
      "React",
      "Django",
      "TypeScript",
      "JavaScript",
      "Python",
      "Jest",
      "SQL",
      "Jenkins",
    ],
  },
  {
    imageSource: GeoGrindWhite,
    description: "Founder/Software Engineer Lead, Desktop and Web @ GeoGrind",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Sass",
      "Electron",
      "Next",
      "Firebase",
      "Google Cloud Platform",
      "Cloudflare",
    ],
  },
];
