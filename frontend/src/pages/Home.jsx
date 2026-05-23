import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin, Code, Palette, Zap, Coffee, Star, Trophy, FolderKanban, Briefcase, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Sahil_Bagga_image = "/profile.jpg";
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { icon: <Code className="w-6 h-6" />, label: "Mern Stack Development", level: "Advanced", stars: 5 },
    { icon: <Palette className="w-6 h-6" />, label: "Generative AI", level: "Intermediate", stars: 4 },
    { icon: <Zap className="w-6 h-6" />, label: "Cloud Computing", level: "Beginner", stars: 3 },
  ];

  const achievements = [
    { icon: FolderKanban, number: "5+", label: "Projects Built", detail: "Full-stack web apps" },
    { icon: Briefcase, number: "2", label: "Internships", detail: "Data Science Intern @ Celebal Tech, Jaipur." },
    { icon: Code, label: "Technologies", detail: "MERN, cloud & AI" },
    { icon: GraduationCap, number: "2027", label: "B.Tech IT", detail: "Graduating student" },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/SahilBagga_Resumepwc.pdf';
    link.download = 'SahilBagga_Resumepwc.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}>
      <div className="relative">
        {/* Main Content */}
        <div className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

              {/* Left Column - Text Content */}
              <div className="space-y-8 lg:space-y-10">

                <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold leading-tight">
                    <span className="text-gray-400">Hi, I'm</span>
                    <br />
                    <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent relative">
                      Sahil Bagga
                      <div className="absolute -inset-4 bg-gradient-to-r from-gray-600/10 to-gray-500/10 blur-2xl -z-10 rounded-3xl"></div>
                    </span>
                  </h1>
                </div>

                <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <div className="space-y-4">
                    <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 leading-relaxed">
                      Mern-stack Developer passionate about creating{' '}
                      <span className="font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent relative">
                        visually appealing and user-friendly websites.
                      </span>
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed max-w-xl font-medium">
                      I specialize in building scalable web applications with modern technologies.
                      Although i am a Fresher, I transform complex problems into elegant,
                      user-friendly solutions that drive business growth and user satisfaction.
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-300 flex items-center space-x-2">
                      <Star className="w-5 h-5 text-gray-400" />
                      <span>Core Expertise</span>
                    </h3>
                    <div className="space-y-3">
                      {skills.map((skill, index) => (
                        <div
                          key={index}
                          className="group bg-gray-900/60 backdrop-blur-sm border border-gray-700/60 rounded-2xl p-4 hover:bg-gray-800/80 hover:border-gray-600/80 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gray-700/20"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="text-gray-300 group-hover:text-white transition-colors duration-300 p-2 bg-gray-800/80 rounded-xl group-hover:bg-gray-700/80">
                                {skill.icon}
                              </div>
                              <div>
                                <span className="text-gray-200 font-semibold text-lg">{skill.label}</span>
                                <p className="text-gray-400 text-sm">{skill.level}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < skill.stars ? 'text-gray-400 fill-current' : 'text-gray-700'}`} />
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-300 flex items-center space-x-2">
                      <Trophy className="w-5 h-5 text-gray-400" />
                      <span>Highlights</span>
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {achievements.map((achievement, index) => {
                        const Icon = achievement.icon;
                        return (
                          <div
                            key={index}
                            className="group relative overflow-hidden bg-gray-900/60 backdrop-blur-sm border border-gray-700/60 rounded-2xl p-4 sm:p-5 hover:bg-gray-800/80 hover:border-gray-600/80 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gray-700/20"
                          >
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-gray-600/10 to-gray-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative flex flex-col gap-3">
                              <div className="flex items-start justify-between">
                                <div className="p-2 bg-gray-800/80 rounded-xl text-gray-300 group-hover:text-white group-hover:bg-gray-700/80 transition-colors duration-300">
                                  <Icon className="w-5 h-5" />
                                </div>
                                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                  {achievement.number}
                                </span>
                              </div>
                              <div>
                                <p className="text-gray-200 font-semibold">{achievement.label}</p>
                                <p className="text-gray-500 text-xs sm:text-sm mt-0.5">{achievement.detail}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Call to Actions */}
                <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <button
                    onClick={() => navigate('/Work')}
                    className="group bg-gradient-to-r from-gray-200 to-white hover:from-white hover:to-gray-100 text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl shadow-gray-800/50 hover:shadow-gray-700/60"
                  >
                    <span>View My Work</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>

                  <button
                    onClick={handleDownloadResume}
                    className="group bg-gray-900/80 backdrop-blur-sm border-2 border-gray-700/60 hover:border-gray-600/80 text-gray-200 hover:text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-800/90 transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl hover:shadow-gray-700/20"
                  >
                    <Download className="w-6 h-6" />
                    <span>Download Resume</span>
                  </button>
                </div>

                {/* Social Links */}
                <div className={`flex space-x-8 transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  {[
                    { icon: <Github className="w-7 h-7" />, label: "GitHub", color: "hover:bg-gray-700/50", url: "https://github.com/Sahilbagga297" },
                    { icon: <Linkedin className="w-7 h-7" />, label: "LinkedIn", color: "hover:bg-blue-900/30", url: "https://www.linkedin.com/in/sahil-bagga-22327b295/" },
                    { icon: <Mail className="w-7 h-7" />, label: "Email", color: "hover:bg-red-900/30", url: "mailto:sahilbagga297@gmail.com" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-gray-900/70 backdrop-blur-sm border border-gray-700/60 p-4 rounded-2xl text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 transform shadow-lg hover:shadow-2xl hover:shadow-gray-700/20 ${social.color} hover:border-gray-600/80`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Column - Profile Section */}
              <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <div className="relative">
                  {/* Floating decorative elements */}
                  <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-gray-500/30 to-gray-600/20 rounded-full blur-xl opacity-60 animate-bounce"></div>
                  <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-r from-gray-600/20 to-gray-700/15 rounded-full blur-xl opacity-40 animate-pulse"></div>

                  <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-gray-700/50 shadow-2xl shadow-gray-900/40 mx-auto mt-10 lg:mt-0">
                    <div className="aspect-square bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 rounded-3xl p-2 shadow-xl">
                      <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center overflow-hidden border-4 border-gray-700/50">
                        <div className="w-full h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl border-4 border-gray-700/50 overflow-hidden">
                              <img src={Sahil_Bagga_image} alt="Sahil Bagga" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-gray-200 text-3xl sm:text-4xl md:text-6xl font-semibold">Sahil Bagga</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="px-6 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className={`bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl border-2 border-gray-700/50 rounded-3xl p-10 shadow-2xl shadow-gray-900/40 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                    Let's create something amazing together
                  </h3>
                  <p className="text-xl text-gray-400 max-w-2xl">
                    Ready to bring your next project to life? I'm here to help you build exceptional digital experiences.
                  </p>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={() => navigate('/Contact')}
                    className="group bg-gray-800/80 border-2 border-gray-700 text-gray-200 hover:text-white hover:border-gray-600 px-8 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center space-x-3 hover:bg-gray-700/80 shadow-lg hover:shadow-2xl hover:shadow-gray-700/20"
                  >
                    <Coffee className="w-6 h-6" />
                    <span>Schedule a Call</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>

  );
};

export default Home;