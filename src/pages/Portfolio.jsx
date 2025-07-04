import React, { useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import FooterSection from '../components/FooterSection';

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      title: "Pokerlytics",
      year: "2025",
      description: "An end-to-end poker analysis app with 80+ users. Features a skill rating engine and advanced analytics dashboard.",
      tech: ["Javascript", "React", "Supabase", "APIs"],
      color: "#f0f4f8",
      link: "https://pokerlytics.org"
    },
    {
      title: "Cofund",
      year: "2025",
      description: "An AI-driven financial platform offering personalized spending insights via LLMs and Python analytics. Built secure bank integrations and scalable backend infrastructure.",
      tech: ["Swift", "Node.js", "LLMs", "PostgreSQL"],
      color: "#f0f4f8", 
      link: ""
    },
    {
      title: "Autonomous Rover Exploration",
      year: "2025",
      description: "Developed a vision pipeline for lunar rover navigation using and LLMs trained on simulated terrain with LiDAR + Depth Pro data.",
      tech: ["Python", "OpenCV", "Ollama", "Robotics"],
      color: "#f0f4f8",
      link: "https://github.com/ericg4/RoverML"
    },
    {
      title: "FDA Recall Trend Analysis",
      year: "2024",
      description: "Analyzed 90K+ FDA recall records to surface risk trends. Built an interactive dashboard for high-level insights across medical device categories.",
      tech: ["Python", "Streamlit"],
      color: "#f0f4f8",
      link: "https://github.com/chadd28/FDA-Recall-Analysis"
    }
  ];

  // Scroll-based animations
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  
  // Project variants
  const projectVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({ 
      opacity: 1, 
      x: 0,
      transition: { delay: i * 0.15, duration: 0.5 } 
    }),
  };

  // Hero animation variants (slide up, no fade/scale)
  const heroVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 18, duration: 0.8 } }
  };

  // Scroll to top on refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div 
      className="relative bg-white text-gray-900 overflow-hidden antialiased"
      style={{ fontFamily: 'Times New Roman, Times, serif' }}
    >
      <div className="max-w-[1800px] mx-auto">
        {/* Hero Section */}
        <HeroSection containerRef={containerRef} heroVariants={heroVariants} />
        {/* Projects Section */}
        <ProjectsSection projects={projects} projectVariants={projectVariants} setActiveIndex={setActiveIndex} />
        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
};

export default Portfolio;
