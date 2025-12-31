import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin, ExternalLink, Code, Palette, Zap, Coffee, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Sahil_Bagga_image = "/profile.jpg";
const Home = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills = [
    { icon: <Code className="w-6 h-6" />, label: "Mern Stack Development", level: "Advanced" },
    { icon: <Palette className="w-6 h-6" />, label: "UI/UX Design", level: "Advanced" },
    { icon: <Zap className="w-6 h-6" />, label: "AI Agents", level: "Beginner" },
  ];

  const achievements = [
    { number: "10+", label: "Projects Completed" },
    { number: "2+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Sahil_Bagga_Resume.pdf';
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Large flowing shapes */}
        <div 
          className="absolute w-[800px] h-[800px] bg-gradient-to-r from-amber-200/30 to-orange-300/20 rounded-full blur-3xl transition-all duration-[3000ms] ease-out animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03 + scrollY * 0.1}px) rotate(${mousePosition.x * 0.01}deg)`,
            top: '-20%',
            left: '-10%'
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-yellow-300/25 to-amber-400/15 rounded-full blur-3xl transition-all duration-[2000ms] ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02 - scrollY * 0.05}px) rotate(${mousePosition.x * -0.01}deg)`,
            bottom: '-15%',
            right: '-5%'
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-orange-200/20 to-red-200/15 rounded-full blur-2xl transition-all duration-[2500ms] ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            top: '40%',
            right: '20%'
          }}
        />
      </div>

      {/* Organic Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="organic-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="#D97706" opacity="0.3">
                <animate attributeName="r" values="1;3;1" dur="4s" repeatCount="indefinite"/>
              </circle>
              <circle cx="70" cy="40" r="1.5" fill="#F59E0B" opacity="0.4">
                <animate attributeName="r" values="0.5;2.5;0.5" dur="3s" repeatCount="indefinite"/>
              </circle>
              <circle cx="40" cy="80" r="1" fill="#92400E" opacity="0.5">
                <animate attributeName="r" values="0.5;2;0.5" dur="5s" repeatCount="indefinite"/>
              </circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#organic-pattern)"/>
        </svg>
      </div>

      <div className="relative z-10">
        {/* Enhanced Navigation */}

                               {/* Enhanced Main Content */}
                   <div className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              
              {/* Left Column - Enhanced Text Content */}
              <div className="space-y-10">
                {/* Greeting Badge */}
                <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 rounded-full px-4 py-2 shadow-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-amber-800 font-medium text-sm">Available for new opportunities</span>
                  </div>
                </div>

                <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <h1 className="text-6xl lg:text-8xl font-extrabold leading-tight">
                    <span className="text-amber-900">Hi, I'm</span>
                    <br />
                    <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent relative">
                      Sahil Bagga
                      <div className="absolute -inset-4 bg-gradient-to-r from-amber-200/20 to-orange-200/20 blur-2xl -z-10 rounded-3xl"></div>
                    </span>
                  </h1>
                </div>

                <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <div className="space-y-4">
                    <p className="text-2xl lg:text-3xl font-light text-amber-800 leading-relaxed">
                      Mern-stack Developer passionate about creating{' '}
                      <span className="font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent relative">
                        visually appealing and user-friendly websites.
                      </span>
                    </p>
                    <p className="text-lg text-amber-700 leading-relaxed max-w-xl font-medium">
                      I specialize in building scalable web applications with modern technologies. 
                      Although i am a Fresher, I transform complex problems into elegant, 
                      user-friendly solutions that drive business growth and user satisfaction.
                    </p>
                  </div>
                </div>

                {/* Enhanced Skills */}
                <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-amber-800 flex items-center space-x-2">
                      <Star className="w-5 h-5 text-orange-500" />
                      <span>Core Expertise</span>
                    </h3>
                    <div className="space-y-3">
                      {skills.map((skill, index) => (
                        <div 
                          key={index}
                          className="group bg-white/70 backdrop-blur-sm border border-amber-200/60 rounded-2xl p-4 hover:bg-white/90 hover:border-orange-300/60 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="text-orange-600 group-hover:text-orange-700 transition-colors duration-300 p-2 bg-orange-100 rounded-xl">
                                {skill.icon}
                              </div>
                              <div>
                                <span className="text-amber-800 font-semibold text-lg">{skill.label}</span>
                                <p className="text-amber-600 text-sm">{skill.level}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-orange-400 fill-current' : 'text-orange-200'}`} />
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Achievement Stats */}
                <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <div className="grid grid-cols-3 gap-6">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="text-center bg-gradient-to-br from-white/80 to-amber-50/80 backdrop-blur-sm border border-amber-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                          {achievement.number}
                        </div>
                        <div className="text-amber-700 font-medium text-sm mt-1">{achievement.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Call to Actions */}
                <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <button 
                    onClick={() => navigate('/Work')}
                    className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40"
                  >
                    <span>View My Work</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                  
                  <button 
                    onClick={handleDownloadResume}
                    className="group bg-white/80 backdrop-blur-sm border-2 border-amber-300/60 hover:border-orange-400/80 text-amber-800 hover:text-orange-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/95 transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl"
                  >
                    <Download className="w-6 h-6" />
                    <span>Download Resume</span>
                  </button>
                </div>

                                 {/* Enhanced Social Links */}
                 <div className={`flex space-x-8 transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                   {[
                     { icon: <Github className="w-7 h-7" />, label: "GitHub", color: "hover:bg-gray-100", url: "https://github.com/Sahilbagga297" },
                     { icon: <Linkedin className="w-7 h-7" />, label: "LinkedIn", color: "hover:bg-blue-100", url: "https://www.linkedin.com/in/sahil-bagga-22327b295/" },
                     { icon: <Mail className="w-7 h-7" />, label: "Email", color: "hover:bg-red-100", url: "mailto:sahilbagga297@gmail.com" }
                   ].map((social, index) => (
                     <a 
                       key={index}
                       href={social.url}
                       target="_blank"
                       rel="noopener noreferrer"
                       className={`bg-white/70 backdrop-blur-sm border border-amber-200/60 p-4 rounded-2xl text-amber-700 hover:text-amber-900 transition-all duration-300 hover:scale-110 transform shadow-lg hover:shadow-xl ${social.color}`}
                       aria-label={social.label}
                     >
                       {social.icon}
                     </a>
                   ))}
                 </div>
              </div>

              {/* Right Column - Enhanced Profile Section */}
              <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <div className="relative">
                  {/* Floating decorative elements */}
                  <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full blur-xl opacity-60 animate-bounce"></div>
                  <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-r from-orange-300 to-red-300 rounded-full blur-xl opacity-40 animate-pulse"></div>
                  
                  <div className="relative bg-gradient-to-br from-white/90 to-amber-50/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-amber-200/50 shadow-2xl shadow-amber-200/20">
                    <div className="aspect-square bg-gradient-to-br from-amber-400 via-orange-400 to-red-400 rounded-3xl p-2 shadow-xl">
                      <div className="w-full h-full bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl flex items-center justify-center overflow-hidden border-4 border-white/50">
                        <div className="w-full h-full bg-gradient-to-br from-amber-100/50 to-orange-100/50 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-100 h-100 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl border-4 border-white/30 overflow-hidden">
                              <img src={Sahil_Bagga_image} alt="Sahil Bagga" className="w-full h-full object-cover" />
                            </div>
                           
                            <p className="text-amber-600 text-6xl font-semibold">Sahil Bagga</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Floating Elements */}
                    <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-xl border-2 border-white/30 animate-bounce">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                        <span>Available for hire</span>
                      </div>
                    </div>
                    <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-xl border-2 border-white/30">
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 fill-current" />
                        <span>Fresher</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Contact Section */}
        <div className="px-6 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className={`bg-gradient-to-r from-white/90 to-amber-50/90 backdrop-blur-xl border-2 border-amber-200/50 rounded-3xl p-10 shadow-2xl shadow-amber-200/20 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
                <div className="text-center lg:text-left">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent mb-4">
                    Let's create something amazing together
                  </h3>
                  <p className="text-xl text-amber-700 max-w-2xl">
                    Ready to bring your next project to life? I'm here to help you build exceptional digital experiences.
                  </p>
                </div>
                                 <div className="flex justify-center">
                   <button 
                     onClick={() => navigate('/Contact')}
                     className="group bg-white/80 border-2 border-amber-300 text-amber-800 hover:text-orange-700 hover:border-orange-400 px-8 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center space-x-3 ml-40n"
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
    </div>
  );
};
export default Home;