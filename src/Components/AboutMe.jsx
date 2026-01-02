import React from "react";
import CountUp from "react-countup";
import HeroImage from "/amin.png";
import {
  FileDown,
  MessageSquare,
  Code2,
  Database,
  Globe,
  Cpu,
} from "lucide-react";
import Title from "../Util/Title";

const AboutMe = () => {
  const stats = [
    { label: "Years Experience", value: 3, suffix: "+" },
    { label: "Projects Done", value: 50, suffix: "+" },
    { label: "Tech Mastered", value: 15, suffix: "" },
    { label: "Happy Clients", value: 30, suffix: "+" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-20 overflow-hidden bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex justify-between flex-col lg:flex-row items-center gap-5">
          {/* LEFT COLUMN: Animated Stats */}
          <div className="max-w-135 flex-1 flex-wrap order-3 lg:order-1 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x">
            {stats.map((stat, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={index * 150}
                className="snap-center min-w-40 flex-1 bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:border-purple-500/50 transition-all group"
              >
                <h4 className="text-3xl font-bold text-white mb-1">
                  <CountUp
                    end={stat.value}
                    duration={3}
                    enableScrollSpy
                    scrollSpyOnce={false}
                  />
                  {stat.suffix}
                </h4>
                <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
                <div className="h-1 w-0 group-hover:w-full bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-500 mt-2" />
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: Content */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="order-2 lg:order-3 space-y-6 flex-1 max-w-135"
          >
            <Title>About Me</Title>
            <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
              <p>
                I am a passionate{" "}
                <span className="text-white font-semibold">
                  MERN Stack Developer
                </span>{" "}
                who thrives on turning complex problems into elegant digital
                realities.
              </p>
              <p>
                With a deep mastery of
                <span className="text-blue-400"> React</span>,{" "}
                <span className="text-green-400">Node.js</span>, and{" "}
                <span className="text-purple-400">MongoDB</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="global-btn">
                <FileDown size={20} /> Download Resume
              </button>
              <button className="flex items-center gap-2 px-8 py-3 border border-white/20 rounded-full font-bold hover:bg-white/10 transition-all cursor-pointer">
                <MessageSquare size={20} /> Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
