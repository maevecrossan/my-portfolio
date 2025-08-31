'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import Image from 'next/image';

export default function PreviousWorkClient() {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleProject = (projectId) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  return (
    <main className="flex flex-col items-center min-h-screen m-2 text-zinc-800">
      <div className="mx-auto px-4 ml-4 mr-4 mt-12 bg-rose-300 shadow-xl text-center rounded-xl ring-4 ring-rose-300 ring-offset-2 ring-offset-white animate-drop-in" style={{ ['--delay']: '0ms' }}>
        <h3 className="text-white mt-10 mb-6 text-3xl font-semibold font-dmserif">Previous Work</h3>
        <p className="text-white mb-12 text-lg">Here you can explore some of the projects I&apos;ve worked on.</p>
      </div>

      {/* Projects ordered by date (recent -> oldest) */}
      <div className='gap-8 w-full max-w-screen-xl py-10 px-4 animate-drop-in' style={{ ['--delay']: '140ms' }}>
        {/* Project Card #1 */}
        <div className="w-full rounded-3xl p-8 md:p-10 bg-white backdrop-blur-xl shadow-xl mt-10 ring-4 ring-rose-300 ring-offset-2 ring-offset-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div>
              <div className="border-b border-zinc-400/50 pb-4 mb-4">
                <h4 className="text-rose-400 mb-2 text-3xl font-semibold font-dmserif text-center">Templeogue College Swim Pool</h4>
                <h5 className="text-rose-300 mb-2 text-lg font-dmserif text-center">
                  <span>Role: </span>Front End Developer, UI/UX Consultant
                </h5>
                <div className="flex justify-center mb-4">
                  <Image src="/images/laluna-screenshot.png" alt="Project 1 screenshot" width={800} height={450} className="rounded-xl mt-4 ring-3 ring-rose-300 ring-offset-2 ring-offset-white" />
                </div>
                <div className="m-6 text-md">
                  <h6 className="font-semibold text-rose-400 mb-2 mt-2">Project Description:</h6>
                  <p className="text-gray-500 mt-4 mb-4">
                    This project was a redesign of the Templeogue College Swim Pool website to improve user experience and accessibility.
                    The redesign focused on creating a modern, accessible interface that would make it easier for users to find information
                    about swimming classes, pool schedules, and facility amenities. The project involved user research, wireframing, and
                    implementation of responsive design principles.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="m-6 pt-4">
                <div className="text-md">
                  <h6 className="font-semibold text-rose-400 mb-2">Technology Used:</h6>
                  <ul className="list-disc list-inside text-gray-500">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Tailwind CSS</li>
                    <li>Django</li>
                    <li>SQLite <span className="italic">(development)</span></li>
                    <li>MySQL <span className="italic">(production)</span></li>
                  </ul>
                  <div className="mt-4">
                    <h6 className="font-semibold text-rose-400 mb-2">Key Features:</h6>
                    <ul className="list-disc list-inside text-gray-500">
                      <li>Responsive design for mobile and desktop</li>
                      <li>Improved navigation structure</li>
                      <li>Enhanced accessibility features</li>
                      <li>Modern visual design</li>
                      <li>Mobile friendly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Links (unchanged) */}
          <div className="flex justify-center gap-4 mb-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-colors duration-200">
              <FontAwesomeIcon icon={faGithub} className="text-lg" />
              <span>GitHub</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-rose-400 hover:bg-rose-300 text-white rounded-xl transition-colors duration-200">
              <FontAwesomeIcon icon={faExternalLinkAlt} className="text-lg" />
              <span>Live Site</span>
            </a>
          </div>
        </div>
        {/* ... rest of cards unchanged ... */}
      </div>
    </main>
  );
}

