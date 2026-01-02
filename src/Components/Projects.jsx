import React from "react";
import Card from "./Card";
import Title from "../Util/Title";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "MERN E-commerce Platform",
      description: "Full-stack e-commerce site...",
      image: "https://i.ibb.co.com/C31VY735/Screenshot-20.png",
      techStack: ["React", "Node.js", "MongoDB"],
      category: "MERN Stack",
    },
    {
      id: 2,
      title: "Real-time Chat App",
      description: "Instant messaging using Socket.io...",
      image: "https://i.ibb.co.com/8nDD7NWq/Screenshot-21.png",
      techStack: ["React", "Socket.io"],
      category: "MERN Stack",
    },
    {
      id: 3,
      title: "Portfolio Website V2",
      description: "Personal showcase portfolio...",
      image: "https://i.ibb.co.com/q3jrf2Ft/Screenshot-22.png",
      techStack: ["React", "Tailwind CSS"],
      category: "React",
    },
    {
      id: 4,
      title: "Task Management App",
      description: "Drag-and-drop task manager...",
      image: "https://i.ibb.co.com/9HtZ3dx7/Screenshot-23.png",
      techStack: ["React", "Context API"],
      category: "React",
    },
    {
      id: 5,
      title: "User Auth API",
      description: "Robust RESTful API with JWT...",
      image: "https://i.ibb.co.com/8nDD7NWq/Screenshot-21.png",
      techStack: ["Node.js", "Express.js"],
      category: "Backend",
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description: "Responsive weather application...",
      image: "https://i.ibb.co.com/9HtZ3dx7/Screenshot-23.png",
      techStack: ["React", "Axios"],
      category: "Frontend",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-[#0a192f] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-4" data-aos="fade-up">
          <Title>Projects Showcase</Title>
        </div>

        <hr className=" border border-gray-800 my-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
