import type { About, Hero, Skills, Site } from "@/lib/types";
import { ASSET_PATHS } from "./assets";

export const SITE: Site = {
  name: "Sruthi P S",
  initial: "S",
};

export const HERO: Hero = {
  title: "Hi, I am",
  name: "Sruthi P S",
  intro:
    "Passionate developer dedicated to crafting user-centric and efficient solutions, leveraging expertise in both web and mobile applications to contribute to the success of forward-thinking projects. Seeking a dynamic role to apply and further develop my skills in a creative and challenging environment",
};

export const ABOUT: About = {
  designation: "Software Engineer",
  bio: "I am a seasoned web and mobile app developer with a rich and dynamic career spanning five years. Throughout my professional journey, I have honed my skills in crafting innovative and efficient solutions that seamlessly blend cutting-edge technology with user-centric design.",
  resumeUrl: ASSET_PATHS.RESUME_PDF,
  fields: [
    { label: "Phone", value: "+91- 9961870522" },
    { label: "Email", value: "sruthips395@gmail.com" },
    { label: "Qualification", value: "BTech Graduate (CSE)" },
    { label: "Date Of Birth", value: "August 03, 1995" },
    { label: "Language", value: "English, Malayalam, Hindi" },
    {
      label: "Location",
      value:
        "Amruthanatham, Thekkemuri, East Kallada PO, Kollam, Kerala - 691502",
    },
  ],
};

export const SKILLS: Skills = {
  description:
    "All the skills that I have in that field of work are mentioned",
  placeholder:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  items: [
    { name: "React JS", percentage: 80 },
    { name: "React Native", percentage: 70 },
    { name: "Javascript", percentage: 80 },
    { name: "TypeScript", percentage: 70 },
    { name: "Android", percentage: 80 },
  ],
};

export const EXPERTISE_LIST: readonly string[] = [
  "Redux",
  "RTK Query",
  "MUI",
  "HTML",
  "CSS",
  "SCSS",
  "Formik",
  "Jest",
  "Firebase",
  "AWS",
  "Git",
  "FIGMA",
  "GCP",
  "Jira",
  "Bitbucket",
];
