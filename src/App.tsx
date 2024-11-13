import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-white">
      <Header />
      <main className="relative overflow-hidden">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8">
        <div className="container mx-auto px-6 text-center text-slate-600 dark:text-slate-400">
          <p className="glass-effect inline-block px-6 py-3 rounded-full">
            © {new Date().getFullYear()} Portfolio.dev. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;