import { ChevronDown } from "lucide-react";
import image from "../assets/Himanshu.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16"
    >
      <div className="absolute inset-0 section-pattern opacity-30" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-6 py-16 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content Section */}
          <div className="lg:w-1/2 space-y-8">
            <div className="glass-card p-8 space-y-6">
              <div className="space-y-4">
                <p className="text-sm md:text-base text-emerald-600 dark:text-emerald-400 font-medium inline-block glass-effect px-4 py-2 rounded-full">
                  👋 Welcome to my portfolio
                </p>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Hi, I'm <span className="gradient-text">Himanshu Yadav</span>
                </h2>
                <h3 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300">
                  Software Engineer & Full Stack Developer
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                Software Development Engineer with over 3 years of experience in
                designing, coding, and testing robust React.js applications.
                Skilled in analyzing requirements, developing efficient
                solutions, and maintaining application quality across diverse
                client projects. Proven track record of improving user
                experience, optimizing performance, and collaborating with
                cross-functional teams to deliver high-quality software
                solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => {
                    const projectSection = document.getElementById("projects");
                    if (projectSection) {
                      projectSection.scrollIntoView({ behavior: "smooth" });
                    } else {
                      console.warn("Project section not found");
                    }
                  }}
                >
                  View Projects
                </button>
                <button className="px-8 py-4 rounded-full glass-effect hover:bg-white/10 dark:hover:bg-black/10 font-medium transition-all duration-300 transform hover:-translate-y-1">
                  <a
                    href="https://github.com/himan07/Himanshu_yadav_resume/raw/main/Himanshu_v3.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 relative">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              <div className="relative glass-card p-2 overflow-hidden">
                <img
                  src={image}
                  alt="Developer"
                  className="w-full h-auto rounded-xl transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute -right-4 top-1/4 glass-card p-4 animate-float">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                className="w-8 h-8"
                alt="React"
              />
            </div>
            <div className="absolute -left-2 top-1 glass-card p-4 animate-float">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                className="w-8 h-8"
                alt="JavaScript"
              />
            </div>
            <div className="absolute -left-4 top-1/2 glass-card p-4 animate-float animation-delay-1000">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                className="w-8 h-8"
                alt="TypeScript"
              />
            </div>
            <div className="absolute right-1/4 -bottom-4 glass-card p-4 animate-float animation-delay-2000">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                className="w-8 h-8"
                alt="Node.js"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-slate-400" />
        </div>
      </div>
    </section>
  );
}
