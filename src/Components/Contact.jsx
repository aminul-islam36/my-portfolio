import React, { useState, useRef } from "react";
import { Mail, MapPin, Send, Loader2, Phone } from "lucide-react";
import Title from "../Util/Title";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStatus({
        type: "success",
        message: "Message sent successfully! I will get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#0a192f] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Animated with Fade Down */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-blue-500 font-mono text-sm mb-2 tracking-[0.3em] uppercase">
            Connect
          </h2>
          <Title> Get In Touch</Title>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side: Contact Info - Animated with Fade Right */}
          <div className="space-y-8" data-aos="fade-right">
            <div>
              <h4 className="text-2xl font-bold mb-4">
                Let's discuss your project
              </h4>
              <p className="text-gray-400 max-w-md">
                I'm always open to discussing product design work or partnership
                opportunities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-blue-600/10 rounded-lg text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Me</p>
                  <p className="text-lg font-medium">+8801912874218</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-blue-600/10 rounded-lg text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Me</p>
                  <p className="text-lg font-medium">mmamin2021@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-blue-600/10 rounded-lg text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-lg font-medium">Mymensingh, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form - Animated with Fade Left */}
          <div
            data-aos="fade-left"
            className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 backdrop-blur-sm shadow-xl"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-style"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-style"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-style"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-style resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="global-btn w-full text-center block justify-center"
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </>
                )}
              </button>

              {status.message && (
                <p
                  className={`text-center text-sm mt-4 ${
                    status.type === "success"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
