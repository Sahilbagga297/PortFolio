import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/SahilBagga_Resumepwc.pdf';
    link.download = 'SahilBagga_Resumepwc.pdf';
    link.target = '_blank';

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-amber-100/30 via-transparent to-orange-100/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-50/50 via-amber-50/50 to-orange-50/50 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 p-4 sm:p-8 lg:p-12 font-sans">
        {/* Container for the entire about page content */}
        <div className="max-w-6xl mx-auto">
          {/* Header with animated title */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-800 mb-6 tracking-tight">
              About Me
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full"></div>
          </div>

          {/* About Me Section: Detailed Bio */}
          <section className="mb-16 relative">
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl"></div>
            <div className="relative p-6 sm:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-amber-800">My Journey & Passion</h2>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-amber-700 first-letter:mr-2 first-letter:float-left first-letter:leading-none">
                  Hello! I’m Sahil Bagga, a passionate Full Stack Web Developer with a strong interest in building scalable, user-friendly, and performance-driven web applications. 
                  I actively explore new technologies and enjoy applying them to real-world projects to 
                  strengthen my practical understanding of modern software development.
                </p>
                <p>
                  I have hands-on experience with the MERN stack (MongoDB, Express.js, React.js, Node.js) and
                  specialize in developing responsive frontends using React and building secure, efficient
                  backend APIs with Node.js and Express. I focus on writing clean, maintainable code and
                  designing applications that offer a seamless user experience.

                  I also have a growing foundation in Cloud Computing
                  and DevOps practices, including application deployment, version control, and containerization using Docker and Kubernetes. 
                  I have also worked with cloud platforms such as AWS , Google Cloud and MongoDb Atlas. I have also used deployment tools such as GitHub Actions and Render to host
                  full-stack applications, manage builds, and streamline development workflows.
                </p>
                <p>
                  As a fresher, I have gained valuable exposure through freelance projects,
                  personal projects, and collaborative team work, where I built complete web
                  applications from scratch and solved real-world problems for clients.
                  These experiences have helped me develop strong problem-solving skills,
                  adaptability, and a continuous learning mindset.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/80 to-orange-100/80 backdrop-blur-sm rounded-3xl shadow-2xl"></div>
            <div className="relative p-6 sm:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-yellow-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-orange-800">Skills & Expertise</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Technical Skills */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-amber-700 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-amber-600 rounded-lg mr-3 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                      </svg>
                    </div>
                    Technical Skills
                  </h3>
                  <div className="space-y-4">
                    {[
                      { category: "Programming Languages", skills: "JavaScript, Python, Java, C++, TypeScript, C" },
                      { category: "Frontend Frameworks", skills: "React, Next.js, Bootstrap, Tailwind CSS" },
                      { category: "Backend Frameworks", skills: "Node.js (Express), NestJS" },
                      { category: "Databases", skills: "MongoDB, MySQL, Firebase" },
                      { category: "Tools & Technologies", skills: "Git, GitHub, Docker, AWS, Google Cloud, MongoDb Atlas, Render, Vercel, Generative AI, OpenAI" },
                      { category: "UI/UX Design", skills: "Figma" }
                    ].map((item, index) => (
                      <div key={index} className="bg-white/50 rounded-xl p-4 hover:bg-white/70 transition-all duration-300 hover:shadow-lg">
                        <div className="font-semibold text-amber-800 mb-2">{item.category}</div>
                        <div className="text-gray-600">{item.skills}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-orange-700 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-orange-600 rounded-lg mr-3 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Soft Skills
                  </h3>
                  <div className="space-y-4">
                    {[
                      { skill: "Communication", desc: "Good verbal and written communication in Languages like English and Hindi" },
                      { skill: "Teamwork", desc: "Proven ability to collaborate effectively in agile environments by participating in hackathons and group projects." },
                      { skill: "Problem-Solving", desc: "Good analytical skills, and resolving complex issues." },
                      { skill: "Adaptability", desc: "Quick learner, comfortable with new technologies and changing requirements." },
                      { skill: "Leadership", desc: "Experience leading small teams and colaborating with other teams." }
                    ].map((item, index) => (
                      <div key={index} className="bg-white/50 rounded-xl p-4 hover:bg-white/70 transition-all duration-300 hover:shadow-lg">
                        <div className="font-semibold text-orange-800 mb-2">{item.skill}</div>
                        <div className="text-gray-600">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience & Education Section */}
          <section className="mb-16 relative">
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl"></div>
            <div className="relative p-6 sm:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-amber-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-yellow-800">Experience & Education</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Experience */}
                <div>
                  <h3 className="text-2xl font-semibold text-amber-700 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-amber-600 rounded-lg mr-3 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Work Experience
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-l-4 border-amber-500 hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-amber-800 text-lg mb-2">Internship</div>
                      <div className="text-orange-600 font-medium mb-3">T.C.E Education | June 2025 - August 2025</div>
                      <p className="text-gray-700">
                        I did my Internship in M.E.R.N stack development at T.C.E Education,Saket Nagar, Kanpur. 
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border-l-4 border-yellow-500 hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-yellow-800 text-lg mb-2">Backend Developer</div>
                      <div className="text-amber-600 font-medium mb-3">VyapGo  | May 2025 - October 2025</div>
                      <p className="text-gray-700">
                        I served as a Backend Developer at a Hyderabad based Startup named Vyapgo aiming to provide a smart solution for payment and inventry management for small scale business. 
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-2xl font-semibold text-orange-700 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-orange-600 rounded-lg mr-3 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    Education
                  </h3>
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-all duration-300">
                    <div className="font-bold text-orange-800 text-lg mb-2">Intermediate of Science (10+2)</div>
                    <div className="text-yellow-600 font-medium mb-3">Sir Padampat Singhania Education Center | 2021 - 2023</div>
                    <p className="text-gray-700">
                    Completed Intermediate of Science (10+2) from Sir Padampat Singhania Education Center, Kanpur. 
                    </p>
                  </div>
                  <br />
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-all duration-300">
                    <div className="font-bold text-orange-800 text-lg mb-2">Bachelor of Technology in Information Technology</div>
                    <div className="text-yellow-600 font-medium mb-3">Jaipur Engineering College and Research Center | 2023 - 2027</div>
                    <p className="text-gray-700">
                      Currently pursuing my Bachelor of Technology in Information Technology from Jaipur Engineering College and Research Center, Jaipur. 
                    </p>
                  </div>
                </div>
              </div>

              {/* Downloadable Resume */}
              <div className="mt-12 text-center">
                <button
                  onClick={handleDownloadResume}
                  className="group inline-flex items-center px-8 py-4 border-2 border-amber-600 text-lg font-semibold rounded-2xl text-amber-600 bg-white hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-amber-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                  Download Resume
                </button>
              </div>
            </div>
          </section>

          {/* Personal Touch Section */}
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/80 to-amber-100/80 backdrop-blur-sm rounded-3xl shadow-2xl"></div>
            <div className="relative p-6 sm:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-amber-800">Beyond the Code</h2>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  When I'm not immersed in lines of code, you can often find me enjoying swiming in the nearest swimming pool or playing badminton with my friends.
                  I believe these activities fuels my creativity and problem-solving which help me stay refreshed and inspired.
                </p>
                <p>
                  I’m also a keen reader and a big fan of sci-fi movies and web series. 
                  Exploring imaginative stories helps me unwind while giving me new perspectives 
                  and ideas that often inspire my learning and approach to development.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default About;