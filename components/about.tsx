"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-justify">
        {" "}
        Currently studying at {" "}
        <span className="font-medium">42 School Paris and </span>
        {" "} passionate about{" "}
        <span className="font-medium">artificial intelligence</span>. I have
        acquired a {" "}
        <span className="font-medium">strong foundation in programming</span>,
        particularly in <span className="font-medium">Python</span>.{" "}
        <span>I particularly enjoy</span> working on projects
        that implement{" "}
        <span className="font-medium">machine learning algorithms</span> such as
        linear regression and natural language processing. My technical stack
        also includes{" "}
        <span className="font-medium">
          C, C++, HTML/CSS, JavaScript, NumPy, Pandas, Scikit-Learn, and
          TensorFlow.
        </span>
        <br></br>
        {" "}
        <span className="font-medium">Outside of programming</span>, I am passionate
        about staying up-to-date with the latest{" "}
        <span className="font-medium">technological advancements</span> in
        artificial intelligence and data science. I regularly participate in{" "}
        <span className="font-medium">hackathons and coding challenges</span> to
        strengthen my skills. <br></br>
          and I am currently looking for an <span className="font-medium">internship</span> in
        <span className="font-medium"> machine learning</span> to deepen my knowledge.{" "}
      </p>
    </motion.section>
  );
}
