import React from 'react';
import { Code2, Database, Terminal, Wrench } from 'lucide-react';

export default function Skills() {
  const skills = {
    Languages: {
      icon: <Code2 className="w-6 h-6" />,
      items: ['JavaScript', 'TypeScript', 'HTML5/CSS'],
    },
    Frameworks: {
      icon: <Terminal className="w-6 h-6" />,
      items: ['React', 'Next.js', 'React Native', 'Redux', 'Node', 'Express.js'],
    },
    Testing: {
      icon: <Wrench className="w-6 h-6" />,
      items: ['Jest', 'Cypress.io', 'Jasmine', 'JUnit'],
    },
    'Tools & Databases': {
      icon: <Database className="w-6 h-6" />,
      items: ['Git', 'VS Code', 'Webpack', 'Babel', 'Material-UI', 'AWS', 'MongoDB'],
    },
  };

  return (
    <section id="skills" className="py-24 bg-slate-100/50 dark:bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-slate-600 dark:text-slate-400">
            A comprehensive list of my technical skills and expertise
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, { icon, items }]) => (
            <div
              key={category}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl card-hover"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] text-white">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold">{category}</h3>
              </div>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center space-x-2 text-slate-600 dark:text-slate-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}