import React from "react";
import { Code2, Server, Wrench } from "lucide-react";
import Title from "../Util/Title";

const SkillCategory = ({ title, icon: Icon, skills, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="bg-gray-900/50 border border-gray-800 p-6 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-colors duration-300"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-blue-500/10 rounded-lg">
        <Icon className="text-blue-400" size={24} />
      </div>
      <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
    </div>
    <div className="space-y-5">
      {skills.map((skill, idx) => (
        <div key={idx} className="group">
          <div className="flex justify-between mb-1">
            <span className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300 text-sm font-medium">
              {skill.name}
            </span>
            <span className="text-gray-500 text-xs">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
            <div
              data-aos="slide-right"
              data-aos-duration="1000"
              style={{ width: `${skill.level}%` }}
              className="bg-linear-to-r from-blue-600 to-cyan-400 h-full rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillData = [
    {
      title: "Frontend",
      icon: Code2,
      skills: [
        { name: "React", level: 81 },
        { name: "Next", level: 70 },
        { name: "JavaScript ES6+", level: 82 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5/CSS3", level: 98 },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "Firebase", level: 92 },
        { name: "MongoDB", level: 85 },
      ],
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: " Vercel", level: 85 },
        { name: "Netlify", level: 80 },
        { name: "VS Code", level: 95 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-[#050b18] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-blue-500 font-mono text-sm mb-2 tracking-[0.3em] uppercase">
            My Expertise
          </h2>
          <Title>Skills & Technologies</Title>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillData.map((category, index) => (
            <SkillCategory
              key={index}
              index={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
