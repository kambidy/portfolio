"use client";
import React from "react";
import Image from "next/legacy/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const handleDownload = () => {
    // Set the file URL (make sure the file is in the public directory)
    const fileUrl = "/downloads/CV-ryan_mulwa.pdf"; // Adjust the path to your file location

    // Create an anchor element and trigger the download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'RyanMulwa-CV.pdf'); // Specify the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up after download is triggered
  };
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="bg-[#181818] w-[350px] h-[350px] lg:w-[350px] lg:h-[350px] relative rounded-full overflow-hidden">
            <Image
              src="/images/Ryan.png"
	  	layout="responsive"
              alt="hero image"
              width={300}
              height={300}
            />
	    <style jsx>{`
        .circle-image {
          width: {300}px;
          height: {300}px;
          border-radius: 50%; // This creates the circular effect
          overflow: hidden; // Ensures any overflow is hidden
        }
      `}</style>
          </div>
        </motion.div>
<motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-right justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Ryan Mulwa",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Code is poetry; write it with clarity, and it will speak volumes.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-sky-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
		onClick={handleDownload}
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-sky-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
               Download CV
              </span>
            </Link>
          </div>
        </motion.div>
              </div>
    </section>
  );
};

export default HeroSection;
