import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ containerRef, heroVariants }) => (
  <motion.header 
    ref={containerRef}
    className="min-h-[100vh] flex items-center justify-center px-8 md:px-32 xl:px-64 pt-16 pb-24 bg-white"
    variants={heroVariants}
    initial="hidden"
    animate="visible"
  >
    <div className="w-full max-w-3xl flex flex-col justify-center">
      <motion.h1 
        className="text-3xl md:text-5xl xl:text-6xl font-normal tracking-tight text-black mb-8 leading-none text-left"
        style={{ fontFamily: 'Times New Roman, Times, serif' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Chad Diao
      </motion.h1>
      <motion.div 
        className="text-lg text-black max-w-2xl leading-relaxed text-left"
        style={{ fontFamily: 'Times New Roman, Times, serif' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="flex flex-col gap-2 mb-8 text-base text-gray-700" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
          <div className="flex items-center gap-2">
            <span>ML Intern @ BCM</span>
            <span className="text-xs">•</span>
            <span>Rice CS</span>
          </div>
        </div>
        <p className="mb-4">
          Hi, I'm Chad, a 2nd-year CS + Statistics student at Rice interested in scalable software and AI Agents. This summer, I’m a Machine Learning Intern at Baylor College of Medicine, where I’m building deep learning pipelines for behavioral video analysis and neural decoding to answer questions about the human hippocampus.
        </p>
        <p className="mb-4">
          I currently serve as Internal Vice President of ML@Rice, where I was previously a software developer and marketing lead. I help grow the university's largest applied AI club through workshops, projects, and research mentorship.
        </p>
        <p className="mb-4">
          On the side, I'm building <a href="https://pokerlytics.org" target="_blank" rel="noopener noreferrer" className="underline">Pokerlytics</a>, a social platform for analyzing poker sessions with a skill rating engine using Bayesian priors and log-scaled features. I'm also leading backend development at Cofund, an AI-powered financial platform. 
        </p>
        <p className="mb-8">
          I'm currently open to opportunities for Summer 2026. Reach out at <a href="mailto:chaddiao0@gmail.com" className="hover:text-blue-900">chaddiao0@gmail.com</a>.
        </p>
        <div className="flex justify-end gap-x-8 mt-8 w-full">
          <a
            href="https://linkedin.com/in/chaddiao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-colors"
          >
            [ linkedin ]
          </a>
          <a
            href="https://github.com/chadd28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-colors"
          >
            [ github ]
          </a>
        </div>
      </motion.div>
    </div>
  </motion.header>
);

export default HeroSection;
