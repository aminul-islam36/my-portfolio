import { TypeAnimation } from "react-type-animation";
import HeroImg from "/amin.png";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full py-20 pb-50 flex items-center justify-center bg-linear-to-br from-gray-900 via-black to-blue-900 overflow-hidden px-6"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 z-10">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-blue-400 tagesschrift italic text-lg mb-2">
            Hi, my name is
          </h2>
          <h1 className="tagesschrift italic text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight autotype">
            Md Aminul Islam.
          </h1>
          <h2 className="text-gray-400 mb-3 italic font-semibold text-2xl md:text-3.5xl">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                1500,
                "React Next.js Specialist",
                1500,
                "Problem Solver",
                1500,
              ]}
              speed={300}
              repeat={Infinity}
            />
          </h2>
          <p className="text-gray-300 italic md:text-lg mb-10 max-w-xl leading-relaxed">
            I'm a MERN stake web developer with hands-on experience ( building
            user-friendly web applications) with react, next.js,mongodb,
            Express, node.js. I focus on building clean and sustainable code for
            growing your project. I enjoy solving real world problems and always
            trying to learn new technologies . I love to increase my skills
            every day
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="global-btn text-white">
              View Projects
            </a>
            <a href="#contact" className="outline-btn text-white">
              Contact Me
            </a>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="1200"
          className="relative group "
        >
          <div className="absolute -skew-4 -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl border-2 border-gray-800 bg-gray-900 -skew-4">
            <img
              src={HeroImg}
              alt="Md Aminul Islam"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator - Using Tailwind animate-bounce for infinite loop */}
      <a
        href="#about"
        className="absolute cursor-pointer bottom-20 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce"
      >
        <ArrowDown size={30} />
      </a>
    </section>
  );
};

export default Hero;
