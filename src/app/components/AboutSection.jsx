"use client";
import React, { useTransition, useState } from "react";
import Image from "next/legacy/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>SQLlite3</li>
        <li>Ejs</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Nextjs</li>
        <li>Golang</li>
        <li>Gorilla mux</li>
        <li>Python</li>
        <li>Django</li>
        <li>Flask</li>
	
	
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Giachuki High school</li>
        <li>ALX Foundation</li>
	 <li>Institute Of Energy Studies and Research</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Kenya Certificate Of Secondary Education</li>
        <li>Certificate In Software Engineering</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/Ryan2.jpg" layout="responsive" width={250} height={350} alt="pic" className= "rounded-[10px]" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-secondary-600 mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          As a full stack web developer, I have a deep love for making responsive and engaging websites. JavaScript, React, Redux, Node.js, Express, SQLite3, HTML, CSS, Git, and Tailwind CSS are just a few of the technologies I have practical expertise with. I'm a quick learner that is constantly keen to experiment with new technologies and expand my skill set. I appreciate solving problems, do well in group settings, and am eager to collaborate with others to create creative, superior applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
