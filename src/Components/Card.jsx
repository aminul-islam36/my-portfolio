import { ExternalLink, Github } from "lucide-react";
import React from "react";

const Card = ({ project, index }) => {
  return (
    <div
      // AOS: Cards zoom in with a staggered delay based on their index
      data-aos="zoom-in"
      data-aos-delay={index * 100}
      className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg overflow-hidden relative group transition-all duration-300 hover:shadow-2xl hover:border-blue-500/50 cursor-pointer"
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <ExternalLink size={18} /> Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors duration-300"
          >
            <Github size={18} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
