import React from 'react';
// import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { FaSquareXTwitter, FaSquareInstagram, FaLinkedin, FaSquareGithub } from "react-icons/fa6";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with contact info */}
        <div className="flex justify-between items-start mb-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold">
              #
            </div>
            <div>
              <h2 className="font-bold">FARZON NOSIRI</h2>
              <span className="text-orange-500">/ SOFTWARE ENGINEER</span>
            </div>
          </div>
          
          <div className="text-right">
            <div>
              <span className="font-bold">Call</span>
              <br />
              <a href="tel:+13032109813" className="text-gray-600">+13032109813</a>
            </div>
            <div className="mt-2">
              <span className="font-bold">Write</span>
              <br />
              <a href="mailto:me@farzon.dev" className="text-gray-600">me@farzon.dev</a>
            </div>
            <div className="mt-2">
              <span className="font-bold">Telegram</span>
              <br />
              <a href="https://t.me/ilovabazis" className="text-gray-600">@ilovabazis</a>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-32 h-32 rounded-lg overflow-hidden mb-4">
            <img 
              src="/api/placeholder/128/128" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-2xl font-bold mb-2">Farzon Nosiri</h1>
          <p className="text-gray-600 mb-8">Software engineer</p>
          
          {/* Social icons */}
          <div className="flex gap-4 mb-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaSquareGithub size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaSquareInstagram size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaSquareXTwitter size={24} />
            </a>
          </div>

          {/* Content sections */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Hello world!</h2>
            <h3 className="text-xl mb-6">Welcome to my digital corner!</h3>
            
            <p className="mb-6 text-gray-700">
              I am software engineer who loves turning complex problem to simple, scalable solutions.
            </p>
            
            <p className="mb-6 text-gray-700">
              With a combination of innovative technologies and industry best-practices, I have creatively solved complex problems and delivered elegant and high-quality solutions as a software engineer.
            </p>
            
            <p className="mb-6 text-gray-700">
              I have used state of the art technologies and tools to develop and deploy various projects ranging from simple web development to enterprise grade applications.
            </p>
            
            <p className="mb-8 text-gray-700">
              Coding is not only a skill, but a passion that motivates me to teach and mentor aspiring developers.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
                Resume
              </button>
              <button className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                Portfolio
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600 text-sm">
          © 2024 by Farzon Nosiri
        </div>
      </div>
    </div>
  );
};

export default Portfolio;