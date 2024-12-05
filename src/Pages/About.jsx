import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 relative top-12">
      <motion.div
        className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          About Me
        </h1>
        <motion.p
          className="text-gray-700 text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          I am a passionate software developer with strong expertise in{" "}
          <span className="font-semibold text-blue-600">JavaScript</span>,{" "}
          <span className="font-semibold text-blue-600">Java</span> and{" "}
          <span className="font-semibold text-blue-600">Python</span>. My
          foundation in{" "}
          <span className="font-semibold text-blue-600">React.js</span>,{" "}
          <span className="font-semibold text-blue-600">Node.js</span>,{" "}
          <span className="font-semibold text-blue-600">Express.js</span> and{" "}
          <span className="font-semibold text-blue-600">Mongodb</span>{" "}
          development, including{" "}
          <span className="font-semibold text-blue-600">Tailwind CSS</span>, is
          showcased through multiple projects. I am highly adaptable and capable
          of learning any tech stack quickly, enabling me to effectively
          contribute to any project.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.8, delay: 0.3 },
            },
          }}
        >
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-blue-600">
              Problem-Solving Skills
            </h2>
            <p className="text-gray-700 mt-2">
              Solved <span className="font-semibold">250+</span> problems on{" "}
              <span className="font-semibold">LeetCode</span> and{" "}
              <span className="font-semibold">GeeksforGeeks</span>.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-blue-600">
              API Integration Expertise
            </h2>
            <p className="text-gray-700 mt-2">
              Skilled in API handling on the frontend, ensuring seamless
              integration and functionality.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-blue-600">
              Career Highlights
            </h2>
            <p className="text-gray-700 mt-2">
              Scored in the{" "}
              <span className="font-semibold">91st percentile</span> on the{" "}
              <span className="font-semibold">Cocube Examination</span>.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-blue-600">
              Professional Experience
            </h2>
            <ul className="list-disc ml-4 mt-2 text-gray-700">
              <li>
                <span className="font-semibold">
                  Associate Software Engineer
                </span>{" "}
                @<span className="text-blue-600"> Jalan Technologies</span>.
              </li>
              <li>
                <span className="font-semibold">Software Engineer Intern </span>
                @ <span className="text-blue-600"> OyeLabs</span>.
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 space-y-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <h2 className="text-xl font-semibold text-gray-800">
            Explore My Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-bold">
            <a
              href="https://github.com/Prashant-Malviya"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition text-center"
            >
              GitHub Profile
            </a>
            <a
              href="https://www.linkedin.com/in/prashant-malviya-57270b1b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition text-center"
            >
              LinkedIn Profile
            </a>
            <a
              href="https://drive.google.com/file/d/1EmKPBsjuDb3gLhKDraSuWNjpEcnyHbib/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition text-center"
            >
              Resume
            </a>
            <a
              href="https://youtube-app-by-prashant-malviya.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition text-center"
            >
              Live Project
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 text-center text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <p className="font-bold">
            If you find potential in my work, I would love the opportunity to
            contribute to your team!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
