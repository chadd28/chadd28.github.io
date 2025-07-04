import React from 'react';

const FooterSection = () => (
  <footer className="bg-gray-100 text-gray-600 px-8 md:px-16 py-6 border-t border-gray-200 text-sm">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
      <div className="lg:col-span-4">
        <h3 className="text-lg font-normal mb-2 text-gray-900">Chad Diao</h3>
        <p className="text-gray-500 mb-0">
          Second-year CS & Statistics student at Rice University.
        </p>
      </div>
      <div className="lg:col-span-4 lg:col-start-9">
        <div className="flex flex-col gap-y-1 text-gray-500">
          <span>© {new Date().getFullYear()}</span>
          <a 
            href="mailto:chad.diao@rice.edu"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            chaddiao0@gmail.com
          </a>
          <div className="flex gap-6 mt-2">
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
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
