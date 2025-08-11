'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

export default function PreviousWorkPage() {
    const [expandedProjects, setExpandedProjects] = useState({});

    const toggleProject = (projectId) => {
        setExpandedProjects(prev => ({
            ...prev,
            [projectId]: !prev[projectId]
        }));
    };

    return (
        <main className="flex flex-col items-center min-h-screen m-2">
            <div className="w-full max-w-screen-lg mx-auto px-4 py-4 m-10 bg-white/80 shadow-xl rounded-xl text-center">
                <h3 className="text-gray-700 mt-10 mb-6 text-3xl font-semibold font-dmserif ">
                    Previous Work
                </h3>
                <p className="text-gray-700 mb-12 text-lg">
                    Here you can explore some of the projects I&apos;ve worked on in the past.
                </p>
            </div>

            {/* Projects ordered by date (recent -> oldest) */}


            {/* ------------------------------------------------- Project Card #1 */}
            <div className="w-full max-w-screen-lg mx-auto px-4 py-10 bg-white/50 shadow-xl text-zinc-800 rounded-xl">
                <div className="border-b border-zinc-400/50 pb-4 mb-4">
                    <h4 className="text-gray-600 mb-2 text-2xl font-semibold font-dmserif text-center">
                        Templeogue College Swim Pool
                    </h4>
                    <h5 className="text-gray-600 mb-2 text-lg font-dmserif text-center">
                        <span>Role: </span>Front End Developer, UI/UX Consultant
                    </h5>

                    <div className="flex justify-center mb-4">
                        <img
                            src="/images/laluna-screenshot.png"
                            alt="Project 1 screenshot"
                            width={800}
                            height={450}
                            className="rounded-lg mt-4"
                        />
                    </div>
                </div>

                <div className="m-6 text-md text-center">
                    <h6 className="font-semibold text-gray-700 mb-2 mt-2">Project Description:</h6>
                    <p className="text-gray-700 mt-4 mb-4">
                        This project was a redesign of the Templeogue College Swim Pool website to improve user experience and accessibility.
                        The redesign focused on creating a modern, accessible interface that would make it easier
                        for users to find information about swimming classes, pool schedules, and facility amenities.
                        The project involved user research, wireframing, and implementation of responsive design principles.
                    </p>
                </div>

                {/* Project Links */}
                <div className="flex justify-center gap-4 mb-4">
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faGithub} className="text-lg" />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-pink-600/80 hover:bg-pink-700 text-white rounded-xl transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                        <span>Live Site</span>
                    </a>
                </div>

                <button
                    onClick={() => toggleProject('project1')}
                    className="btn bg-purple-900 hover:bg-purple-800 text-white text-md rounded-xl mt-5 flex items-center justify-center mx-auto px-4 py-2 transition-all duration-200"
                >
                    {expandedProjects.project1 ? 'Hide Details' : 'View Details'}
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        className={`ml-2 transition-transform duration-200 ${expandedProjects.project1 ? 'rotate-180' : ''}`}
                        style={{ fontSize: '1rem' }}
                    />
                </button>

                {/* Accordion Content */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedProjects.project1 ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="m-6 pt-4 border-t border-zinc-400/30">
                        <div className="text-md">
                            <h6 className="font-semibold text-gray-700 mb-2">Technology Used:</h6>
                            <ul className="list-disc list-inside text-gray-700">
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
                                <h6 className="font-semibold text-gray-700 mb-2">Key Features:</h6>
                                <ul className="list-disc list-inside text-gray-700">
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


            {/* ------------------------------------------------- Project Card #2 */}
            <div className="w-full max-w-screen-lg mx-auto px-4 py-10 bg-white/50 shadow-xl text-zinc-800 rounded-xl mt-10">
                <div className="border-b border-zinc-400/50 pb-4 mb-4">
                    <h4 className="text-gray-600 mb-2 text-2xl font-semibold font-dmserif text-center">
                        Nomad Narratives
                    </h4>
                    <h5 className="text-gray-600 mb-2 text-lg font-dmserif text-center">
                        <span>Role: </span>Lead Developer
                    </h5>
                    <div className="flex justify-center mb-4">
                        <img
                            src="/images/nomad-screenshot.png"
                            alt="Project 2 screenshot"
                            width={800}
                            height={450}
                            className="rounded-lg mt-4"
                        />
                    </div>
                </div>
                <div className="m-6 text-md text-center">
                    <h6 className="font-semibold text-gray-700 mb-2 mt-2">Project Description:</h6>
                    <p className="text-gray-700 mt-4 mb-4">
                        Nomad Narratives is a project focused on creating a storytelling platform for travellers to share their experiences,
                        tag locations and connect with other travellers. A comprehensive platform that allows travelers to document their journeys, share stories with rich media content,
                        and discover new destinations through community-generated content. The platform features location tagging, user profiles,
                        and social networking capabilities.
                    </p>
                </div>

                {/* Project Links */}
                <div className="flex justify-center gap-4 mb-4">
                    <a
                        href="https://github.com/maevecrossan/nomad-narratives"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faGithub} className="text-lg" />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://nomad-narratives-05968209a16d.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-pink-600/80 hover:bg-pink-700 text-white rounded-xl transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                        <span>Live Site</span>
                    </a>
                </div>

                <button
                    onClick={() => toggleProject('project2')}
                    className="btn bg-purple-900 hover:bg-purple-800 text-white text-md rounded-xl mt-5 flex items-center justify-center mx-auto px-4 py-2 transition-all duration-200"
                >
                    {expandedProjects.project2 ? 'Hide Details' : 'View Details'}
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        className={`ml-2 transition-transform duration-200 ${expandedProjects.project2 ? 'rotate-180' : ''}`}
                        style={{ fontSize: '1rem' }}
                    />
                </button>

                {/* Accordion Content */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedProjects.project2 ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="m-6 pt-4 border-t border-zinc-400/30">
                        <div className="text-md">
                            <h6 className="font-semibold text-gray-700 mb-2">Technology Used:</h6>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>ReactJS</li>
                                <li>React Router</li>
                                <li>React Bootstrap</li>
                                <li>Python</li>
                                <li>Django</li>
                                <li>SQLite <span className="italic">(development)</span></li>
                                <li>PostgreSQL <span className="italic">(production)</span></li>
                            </ul>
                            <div className="mt-6">
                                <h6 className="font-semibold text-gray-700 mb-2">Key Features:</h6>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>Interactive story creation with media uploads</li>
                                    <li>Location-based story discovery</li>
                                    <li>User networking and following system</li>
                                    <li>Travel route planning and sharing</li>
                                    <li>Mobile friendly</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* ------------------------------------------------- Project Card #3 */}
            <div className="w-full max-w-screen-lg mx-auto px-4 py-10 bg-white/50 shadow-xl text-zinc-800 rounded-xl mt-10">
                <div className="border-b border-zinc-400/50 pb-4 mb-4">
                    <h4 className="text-gray-600 mb-2 text-2xl font-semibold font-dmserif text-center">
                        La Luna
                    </h4>
                    <h5 className="text-gray-600 mb-2 text-lg font-dmserif text-center">
                        <span>Role: </span>Lead Developer
                    </h5>
                    <div className="flex justify-center mb-4">
                        <img
                            src="/images/laluna-screenshot.png"
                            alt="Project 3 screenshot"
                            width={800}
                            height={450}
                            className="rounded-lg mt-4"
                        />
                    </div>
                </div>
                <div className="m-6 text-md text-center">
                    <h6 className="font-semibold text-gray-700 mb-2 mt-2">Project Description:</h6>
                    <p className="text-gray-700 mt-4 mb-4">
                        La Luna is a website for a fictional restaurant that allows users to browse the menu,
                        make reservations, and learn about the restaurant's history. A sophisticated restaurant website featuring an elegant design that captures
                        the ambiance of fine dining. The site includes interactive menu browsing, online reservation
                        system, and rich storytelling about the restaurant's heritage and culinary philosophy.
                    </p>
                </div>

                {/* Project Links */}
                <div className="flex justify-center gap-4 mb-4">
                    <a
                        href="https://github.com/maevecrossan/la-luna"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faGithub} className="text-lg" />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://la-luna-5259bef56a63.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-pink-600/80 hover:bg-pink-700 text-white rounded-xl transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                        <span>Live Site</span>
                    </a>
                </div>

                <button
                    onClick={() => toggleProject('project3')}
                    className="btn bg-purple-900 hover:bg-purple-800 text-white text-md rounded-xl mt-5 flex items-center justify-center mx-auto px-4 py-2 transition-all duration-200"
                >
                    {expandedProjects.project3 ? 'Hide Details' : 'View Details'}
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        className={`ml-2 transition-transform duration-200 ${expandedProjects.project3 ? 'rotate-180' : ''}`}
                        style={{ fontSize: '1rem' }}
                    />
                </button>

                {/* Accordion Content */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedProjects.project3 ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="m-6 pt-4 border-t border-zinc-400/30">
                        <div className="text-md">
                            <h6 className="font-semibold text-gray-700 mb-2">Technology Used:</h6>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Django</li>
                                <li>SQLite <span className="italic">(development)</span></li>
                                <li>PostgreSQL <span className="italic">(production)</span></li>
                            </ul>
                            <div className="mt-4">
                                <h6 className="font-semibold text-gray-700 mb-2">Key Features:</h6>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>Interactive menu with detailed dish descriptions</li>
                                    <li>Online reservation booking system</li>
                                    <li>Photo gallery showcasing ambiance and cuisine</li>
                                    <li>About section with restaurant history</li>
                                    <li>Mobile friendly</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ------------------------------------------------- Project Card #4 */}
            <div className="w-full max-w-screen-lg mx-auto px-4 py-10 bg-white/50 shadow-xl text-zinc-800 rounded-xl mt-10">
                <div className="border-b border-zinc-400/50 pb-4 mb-4">
                    <h4 className="text-gray-600 mb-2 text-2xl font-semibold font-dmserif text-center">
                        Echoes of the Abyss
                    </h4>
                    <h5 className="text-gray-600 mb-2 text-lg font-dmserif text-center">
                        <span>Role: </span>Lead Developer
                    </h5>
                    <div className="flex justify-center mb-4">
                        <img
                            src="/images/echoes-screenshot.png"
                            alt="Project 4 screenshot"
                            width={800}
                            height={450}
                            className="rounded-lg mt-4"
                        />
                    </div>
                </div>
                <div className="m-6 text-md text-center">
                    <h6 className="font-semibold text-gray-700 mb-2 mt-2">Project Description:</h6>
                    <p className="text-gray-700 mt-4 mb-4">
                        Echoes of the Abyss is a choose-your-own-adventure style game that allows players to explore an abandoned
                        building with a dark secret. You play as an urban explorer navigating through the eerie environment, making choices that
                        affect the outcome of the story. An immersive interactive narrative experience that combines atmospheric storytelling with decision-based gameplay.
                        Players navigate through a mysterious abandoned building, uncovering secrets while making choices that influence the
                        story's direction and multiple possible endings.
                    </p>
                </div>

                {/* Project Links */}
                <div className="flex justify-center gap-4 mb-4">
                    <a
                        href="https://github.com/maevecrossan/echoes-of-the-abyss"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faGithub} className="text-lg" />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://echoes-of-the-abyss-8920634f42db.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-pink-600/80 hover:bg-pink-700 text-white rounded-xl transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                        <span>Live Site</span>
                    </a>
                </div>

                <button
                    onClick={() => toggleProject('project4')}
                    className="btn bg-purple-900 hover:bg-purple-800 text-white text-md rounded-xl mt-5 flex items-center justify-center mx-auto px-4 py-2 transition-all duration-200"
                >
                    {expandedProjects.project4 ? 'Hide Details' : 'View Details'}
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        className={`ml-2 transition-transform duration-200 ${expandedProjects.project4 ? 'rotate-180' : ''}`}
                        style={{ fontSize: '1rem' }}
                    />
                </button>

                {/* Accordion Content */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedProjects.project4 ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="m-6 pt-4 border-t border-zinc-400/30">
                        <div className="text-md">
                            <h6 className="font-semibold text-gray-700 mb-2">Technology Used:</h6>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Python</li>
                                <li>JavaScript</li>
                            </ul>
                            <div className="mt-4">
                                <h6 className="font-semibold text-gray-700 mb-2">Key Features:</h6>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>Branching storylines with multiple endings</li>
                                    <li>Atmospheric sound design and visuals</li>
                                    <li>Decision tracking and consequences</li>
                                    <li>Immersive environmental storytelling</li>
                                    <li>Mobile friendly</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ------------------------------------------------- Project Card #5 */}
            <div className="w-full max-w-screen-lg mx-auto px-4 py-10 bg-white/50 shadow-xl text-zinc-800 rounded-xl mt-10">
                <div className="border-b border-zinc-400/50 pb-4 mb-4">
                    <h4 className="text-gray-600 mb-2 text-2xl font-semibold font-dmserif text-center">
                        Byte Battles
                    </h4>
                    <h5 className="text-gray-600 mb-2 text-lg font-dmserif text-center">
                        <span>Role: </span>Lead Developer
                    </h5>
                    <div className="flex justify-center mb-4">
                        <img
                            src="/images/byte-screenshot.png"
                            alt="Project 5 screenshot"
                            width={800}
                            height={450}
                            className="rounded-lg mt-4"
                        />
                    </div>
                </div>
                <div className="m-6 text-md text-center">
                    <h6 className="font-semibold text-gray-700 mb-2 mt-2">Project Description:</h6>
                    <p className="text-gray-700 mt-4 mb-4">
                        Battle Bytes is a fun, retro-inspired tic-tac-toe game designed for casual players of all ages. It offers both 
                        single-player and local multiplayer modes on one device. The game features a clean, clutter-free interface with 
                        nostalgic pixel art vibes, vibrant colours, and an intuitive experience suitable for kids, casual gamers, and 
                        anyone looking to pass the time with a classic puzzle.
                    </p>
                </div>

                {/* Project Links */}
                <div className="flex justify-center gap-4 mb-4">
                    <a
                        href="https://github.com/maevecrossan/byte-battles"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faGithub} className="text-lg" />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://maevecrossan.github.io/byte-battles/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-pink-600/80 hover:bg-pink-700 text-white rounded-xl transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                        <span>Live Site</span>
                    </a>
                </div>

                <button
                    onClick={() => toggleProject('project5')}
                    className="btn bg-purple-900 hover:bg-purple-800 text-white text-md rounded-xl mt-5 flex items-center justify-center mx-auto px-4 py-2 transition-all duration-200"
                >
                    {expandedProjects.project5 ? 'Hide Details' : 'More Details'}
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        className={`ml-2 transition-transform duration-200 ${expandedProjects.project5 ? 'rotate-180' : ''}`}
                        style={{ fontSize: '1rem' }}
                    />
                </button>

                {/* Accordion Content */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedProjects.project5 ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="m-6 pt-4 border-t border-zinc-400/30">
                        <div className="text-md">
                            <h6 className="font-semibold text-gray-700 mb-2">Technology Used:</h6>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                            <div className="mt-4">
                                <h6 className="font-semibold text-gray-700 mb-2">Key Features:</h6>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>Turn-based strategic gameplay</li>
                                    <li>Multiple game shapes and variations</li>
                                    <li>AI opponent with difficulty levels</li>
                                    <li>Score tracking and game statistics</li>
                                    <li>Mobile friendly</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ------------------------------------------------- Project Card #6 */}
            <div className="w-full max-w-screen-lg mx-auto px-4 py-10 bg-white/50 shadow-xl text-zinc-800 rounded-xl mt-10">
                <div className="border-b border-zinc-400/50 pb-4 mb-4">
                    <h4 className="text-gray-600 mb-2 text-2xl font-semibold font-dmserif text-center">
                        Peaceful Path
                    </h4>
                    <h5 className="text-gray-600 mb-2 text-lg font-dmserif text-center">
                        <span>Role: </span>Lead Developer
                    </h5>
                    <div className="flex justify-center mb-4">
                        <img
                            src="/images/peaceful-screenshot.png"
                            alt="Project 6 screenshot"
                            width={800}
                            height={450}
                            className="rounded-lg mt-4"
                        />
                    </div>
                </div>
                <div className="m-6 text-md text-center">
                    <h6 className="font-semibold text-gray-700 mb-2 mt-2">Project Description:</h6>
                    <p className="text-gray-700 mt-4 mb-4">
                        Peaceful Path is a landing page for a program designed to help users find inner peace and
                        relaxation through guided meditations and mindfulness exercises. A serene and calming landing page designed to promote mental wellness through meditation and
                        mindfulness practices. The design emphasizes tranquility and ease of use, encouraging visitors
                        to explore the program's offerings and begin their journey toward inner peace.
                    </p>
                </div>

                {/* Project Links */}
                <div className="flex justify-center gap-4 mb-4">
                    <a
                        href="https://github.com/maevecrossan/peaceful-path"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faGithub} className="text-lg" />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://maevecrossan.github.io/peaceful-path/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-pink-600/80 hover:bg-pink-700 text-white rounded-xl transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                        <span>Live Site</span>
                    </a>
                </div>

                <button
                    onClick={() => toggleProject('project6')}
                    className="btn bg-purple-900 hover:bg-purple-800 text-white text-md rounded-xl mt-5 flex items-center justify-center mx-auto px-4 py-2 transition-all duration-200"
                >
                    {expandedProjects.project6 ? 'Hide Details' : 'View Details'}
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        className={`ml-2 transition-transform duration-200 ${expandedProjects.project6 ? 'rotate-180' : ''}`}
                        style={{ fontSize: '1rem' }}
                    />
                </button>

                {/* Accordion Content */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedProjects.project6 ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="m-6 pt-4 border-t border-zinc-400/30">
                        <div className="text-md">
                            <h6 className="font-semibold text-gray-700 mb-2">Technology Used:</h6>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                            <div className="mt-4">
                                <h6 className="font-semibold text-gray-700 mb-2">Key Features:</h6>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>Calming and peaceful design aesthetic</li>
                                    <li>Introductory landing page</li>
                                    <li>Program information and benefits</li>
                                    <li>Mobile friendly</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}