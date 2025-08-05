// pages/index.js
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#hero') {
      // Wait for browser to finish its default scroll
      setTimeout(() => {
        const el = document.getElementById('hero');
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: y, behavior: 'auto' });
        }
      }, 100);
    }
  }, []);

  return (
    <main className="pt-20 text-white bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] px-4 py-20">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="min-h-screen bg-gradient-to-b from-[#1e293b] to-[#0f172a] px-4 py-20">
        <Experience />
      </section>

      {/* Skills */}
      <section id="skills" className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] px-4 py-20">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-screen bg-gradient-to-b from-[#1e293b] to-[#0f172a] px-4 py-20">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] px-4 py-20">
        <Contact />
      </section>
    </main>
  );
}
