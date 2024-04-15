import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cacophonyImg from "@/public/cacophony.webp";
import regressionImg from "@/public/regression.png";
import pushswapImg from "@/public/pushswap.png";
import { Si42 } from "react-icons/si";
import { FaRegSun } from "react-icons/fa";
import { TbMoodKid } from "react-icons/tb";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "School Representative",
    location: "42 School Paris",
    description:
      "Responsible for representing the students of 42. Spokespersons for students to education staff, I learned how to be responsible for ensuring that the students voices are heard and that their needs are met.",
    icon: React.createElement(Si42),
    date: "2023 - 2024",
  },
  {
    title: "CodinGame Summer challenge",
    location: "42 School Paris",
    description:
      "2st place World in the CodinGame Summer Challenge online programming competition where participants solve coding puzzles and challenges within a limited time frame, competing against each other to achieve the highest score and climb the leaderboard.",
    icon: React.createElement(FaRegSun),
    date: "2023",
  },
  {
    title: "Hackathon Croix Rouge",
    location: "Paris, France",
    description:
      "Building innovative projects in partnership with a charitable association (La Croix Rouge). I've built, with my team, a web application that allows users to find points in Paris where they can donate food or buy cheaper clothes.", 
    icon: React.createElement(Si42),
    date: "2022",
  },
  {
    title: "Homework Help For Children",
    location: "Paris, France",
    description:
      "Help with homework for 2 boys aged 9 yo and 11 yo, I have learnt to organise activities, look after them, take care of them, be positive and kind, be punctual and know how to listen.",
    icon: React.createElement(TbMoodKid),
    date: "2021 - 2023",
  },
  {
    title: "Formation at the Paris CNAM",
    location: "Paris, France",
    description:
      "Training in c and c++, in order to better understand these programming languages and gain admission to 42 school. This was my first introduction to programming.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Bachelor degree in life and earth sciences",
    location: "Les Lilas, France",
    description:
      "During my years of study for the Baccalauréat Scientifique, I acquired a solid scientific culture, which is essential for any further studies and career in the scientific and technological fields. This period of intensive study was marked by the deepening of key skills that form the basis of my analytical approach and my working methods",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  }
] as const;

export const projectsData = [
  {
    title: "Time Cacophony",
    description:
      "Developed an audio-based data graph analysis tool with variable sound intensity based on sample size, processing data such as population, tree quantity, and number of trade routes.",
    tags: ["Arduino", "Electronics"],
    imageUrl: cacophonyImg,
    githubUrl: "https://github.com/ychibani42/__bytebeat"
  },
  {
    title: "Machine Learning Algorithms",
    description:
      "Implemented a linear regression algorithm from scratch using Python.",
    tags: ["Python", "NumPy", "MathPlotLib"],
    imageUrl: regressionImg,
    githubUrl: "https://github.com/ychibani42/__linear_regression"
  },
  {
    title: "Pushswap",
    description:
    "Optimized a stack sorting algorithm to minimize the number of assembly instructions required.",
    tags: ["C", "Assembly", "OpenGL"],
    imageUrl: pushswapImg,
    githubUrl: "https://github.com/ychibani42/__push_swap"
  },
] as const;

export const skillsData = [
  "Python",
  "Panda",
  "NumPy",
  "TensorFlow",
  "Scikit-Learn",
  "Jupiter",
  "Docker",
  "Git",
  "C/C++",
  "HTML/CSS",
  "Typescript",
  "Vue.js",
  "Node.js",
] as const;
