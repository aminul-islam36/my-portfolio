import React, { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, ArrowUp, Heart } from "lucide-react";
import { Link } from "react-router";
import Logo from "../Util/Logo";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050b18] border-t border-gray-800 pt-16 pb-8 text-gray-400 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-start">
          {/* Brand Section - Slides in from left */}
          <div className="space-y-4" data-aos="fade-right">
            <Logo />
            <p className="text-sm leading-relaxed max-w-xs mt-3">
              Professional MERN Stack Developer who thrives on turning complex
              problems into elegant digital realities. With a deep mastery of
              React, Node.js, and MongoDB.
            </p>
          </div>

          {/* Quick Links - Fades up */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm">
              {["About", "Skills", "Projects"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div data-aos="fade-left" data-aos-delay="400">
            <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">
              Follow Me
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/aminul-islam36"
                target="_blank"
                className="icon-style"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/aminul-islam36"
                target="_blank"
                className="icon-style"
              >
                <Linkedin size={20} />
              </a>
              <a href="/" className="icon-style">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 mb-8" />

        {/* Bottom Section */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wide"
          data-aos="fade-up"
        >
          <p>© {currentYear} Md Aminul Islam. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" />{" "}
            using MERN Stack
          </p>
        </div>
      </div>

      {/* Back to Top Button - Using Tailwind for Show/Hide instead of AnimatePresence */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-110 active:scale-90 ${
          showTopBtn
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 translate-y-10 invisible"
        }`}
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
