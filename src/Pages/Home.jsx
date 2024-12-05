import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800 relative top-14">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold animate-fade-in">
            Welcome to Marrfa Blogs
          </h1>
          <p className="mt-4 text-lg">
            A modern way to show blog and posts.
          </p>
        </div>
      </header>

      {/* About Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4 animate-fade-up">
            About the Project
          </h2>
          <p className="text-lg max-w-2xl mx-auto animate-fade-up">
            This project is designed to showcase a responsive and dynamic web
            application. It features a search page, responsive navigation bar,
            and a user-friendly interface built with React and Tailwind CSS.
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-6 animate-fade-up">
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* React */}
            <div className="p-4 bg-white shadow-lg rounded-lg animate-fade-in">
              <img
                src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                alt="React"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">React</h3>
              <p>Frontend framework for building UI components.</p>
            </div>
            {/* Tailwind CSS */}
            <div className="p-4 bg-white shadow-lg rounded-lg animate-fade-in">
              <img
                src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"
                alt="Tailwind CSS"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">Tailwind CSS</h3>
              <p>Utility-first CSS framework for styling.</p>
            </div>
            {/* Node.js */}
            <div className="p-4 bg-white shadow-lg rounded-lg animate-fade-in">
              <img
                src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                alt="Node.js"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">Node.js</h3>
              <p>Backend runtime for handling APIs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
