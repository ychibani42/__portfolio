import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cacophonyImg from "@/public/cacophony.webp";
import regressionImg from "@/public/regression.png";
import pushswapImg from "@/public/pushswap.png";

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
    title: "CodinGame Winter challenge",
    location: "42 School",
    description:
      "1st place World in the CodinGame Winter Challenge online programming competition where participants solve coding puzzles and challenges within a limited time frame, competing against each other to achieve the highest score and climb the leaderboard.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "CodinGame Summer challenge",
    location: "42 School",
    description:
      "2st place World in the CodinGame Summer Challenge online programming competition where participants solve coding puzzles and challenges within a limited time frame, competing against each other to achieve the highest score and climb the leaderboard.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Time Cacophony",
    description:
      "Developed an audio-based data graph analysis tool with variable sound intensity based on sample size, processing data such as population, tree quantity, and number of trade routes.",
    tags: ["Arduino", "Electronics", "Python", "Panda"],
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
