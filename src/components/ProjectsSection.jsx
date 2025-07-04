import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ProjectsSection = ({ projects, projectVariants, setActiveIndex }) => (
  <section className="px-8 md:px-16 py-24 border-t border-gray-200">
    <div className="flex flex-col lg:flex-row justify-between items-baseline mb-16">
      <h2 className="text-4xl lg:text-5xl font-normal text-black">My Work</h2>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-20 lg:gap-y-36">
      {projects.map((project, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true, amount: 0.1 });
        return (
          <motion.article 
            key={index}
            ref={ref}
            className={`${
              index % 2 === 0 ? 'lg:col-span-10' : 'lg:col-span-10 lg:col-start-3'
            } grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12`}
            custom={index}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={projectVariants}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="lg:col-span-4 flex flex-col">
              <h3 className="text-2xl lg:text-3xl font-normal mb-2 text-black">{project.title}</h3>
              <span className="text-gray-500 mb-4">{project.year}</span>
              <div className="flex flex-wrap items-center text-gray-500 text-sm mt-auto">
                {project.tech.map((tech, techIndex) => (
                  <React.Fragment key={techIndex}>
                    <span className="flex items-center">{tech}</span>
                    {techIndex < project.tech.length - 1 && (
                      <span className="mx-2 text-sm leading-none flex items-center">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg leading-relaxed text-black mb-6">
                {project.description}
              </p>
              {project.link && project.link !== "" && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 hover:text-blue-800 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  View Project →
                </motion.a>
              )}
            </div>
          </motion.article>
        );
      })}
    </div>
  </section>
);

export default ProjectsSection;
