'use client';

import Link from "next/link";
import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function AboutMePage() {
    const [open, setOpen] = useState(false);

    return (
        <main className="flex flex-col items-center min-h-screen m-2">
            {/* Header card - flipped to white */}
            <div className="mx-auto px-4 ml-4 mr-4 mt-12 bg-white shadow-xl text-center rounded-xl ring-4 ring-white ring-offset-2 ring-offset-rose-300">
                <h3 className="text-rose-400 mt-10 mb-6 text-3xl font-semibold font-caprasimo">
                    About Me
                </h3>
                <p className="text-rose-400 mb-12 text-lg max-w-2xl mx-auto">
                    Hi, I’m Maeve — a developer with a background in teaching and
                    customer-facing roles, now focused on building accessible, responsive
                    web experiences with clean UI and a friendly UX.
                </p>
            </div>

            {/* Main content - flipped to rose */}
            <div className="w-full max-w-screen-xl py-10 px-4">
                <div className="w-full rounded-3xl p-8 md:p-10 bg-rose-100 backdrop-blur-xl shadow-xl text-white mt-10 ring-4 ring-white ring-offset-2 ring-offset-rose-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                        {/* LEFT: photo + quick facts */}
                        <div className="flex flex-col items-center">
                            <Image
                                src="/images/headshot.jpg"
                                alt="Maeve Crossan"
                                width={220}
                                height={220}
                                className="rounded-full ring-4 ring-white ring-offset-2 ring-offset-rose-300 mb-6"
                            />
                            <h4 className="text-rose-400 mb-2 text-3xl font-semibold font-caprasimo text-center">
                                Maeve Crossan
                            </h4>
                            <h5 className="text-rose-400/80 mb-4 text-lg font-dmserif text-center">
                                Full-Stack Developer, Front End Enthusiast
                            </h5>

                            <div className="text-sm text-rose-300 text-center space-y-2">
                                <p>
                                    <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-rose-300" />
                                    Dublin, Ireland
                                </p>
                                <p className="max-w-xs">
                                    <strong>Diploma in Full Stack Software Development (Advanced Front End)</strong>{' '}
                                    with{' '}
                                    <a
                                        href="https://www.codeinstitute.net/ie/"
                                        className="font-semibold hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        The Code Institute
                                    </a>
                                    <br />
                                    (Apr 2024 – Apr 2025).
                                </p>
                            </div>
                        </div>

                        {/* RIGHT: bio */}
                        <div className="m-2 md:m-6 text-md">
                            <h6 className="font-semibold font-dmserif text-rose-300 mb-2 text-2xl">A Little About Me</h6>
                            <p className="mb-4 text-gray-500">
                                I come from a people-first background: teaching swimming across
                                all levels, training new instructors, and handling front-of-house
                                operations where clear communication and calm problem-solving
                                matter. That mix of structured instruction, real-time support,
                                and attention to detail now shapes the way I design and build
                                for the web.
                            </p>
                            <p className="mb-4 text-gray-500">
                                I also spent two years in South Korea teaching English to
                                elementary students (ages 4–13). Adapting lessons across
                                abilities and learning basic conversational Korean taught me to
                                simplify complex ideas, respect context, and iterate quickly —
                                the same muscles I use in product work.
                            </p>
                            <p className="mb-4 text-gray-500">
                                On the technical side, I’m comfortable with modern HTML/CSS,
                                JavaScript, Django, and Tailwind, and I’m steadily expanding my
                                full-stack skillset through hands-on projects (see my previous
                                work{' '}
                                <a href="/previous-work" className="font-semibold underline">
                                    here
                                </a>
                                ).
                            </p>
                            <p className="mb-4 text-gray-500">
                                Recent projects include a swim-pool website redesign, a travel
                                storytelling platform, a restaurant site, an interactive narrative
                                game, and a retro puzzle game — all designed with responsiveness
                                and accessibility in mind.
                            </p>
                            <p className="mb-4 text-gray-500">Want to know more about my work? Check out my <a href="/previous-work" className="font-semibold hover:underline">previous projects</a>, or <a href="/contact" className="font-semibold hover:underline">get in touch</a>!
                            </p>
                        </div>

                    </div>

                    {/* Full-width accordion (spans entire pink box) */}
                    <div className="mt-2 md:mt-4">
                        <button
                            onClick={() => setOpen((o) => !o)}
                            className="btn bg-white hover:bg-gray-100 text-rose-900 text-md rounded-xl flex items-center justify-center px-4 py-2 transition-all duration-200 mx-auto"
                        >
                            {open ? 'Hide Details' : 'View Details'}
                            <FontAwesomeIcon
                                icon={faCaretDown}
                                className={`ml-2 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                                style={{ fontSize: '1rem' }}
                            />
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[2500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="flex flex-col gap-4">
                                {/* Experience */}
                                <div className="border-t border-rose-200 pt-4 mt-2">
                                    <h6 className="font-semibold font-dmserif text-rose-300 mb-2 text-xl">Experience</h6>
                                    <ul className="list-disc list-outside space-y-2 pl-6 text-gray-500">
                                        <li>
                                            <strong>Freelance Full Stack Developer</strong> — project planning &amp; execution,
                                            project management, stakeholder management, UI/UX design, front end development,
                                            back end development. (April 2025 – present).
                                        </li>
                                        <li>
                                            <strong>Swimming Teacher &amp; Front of House</strong> — lesson planning and delivery,
                                            customer support, bookings, waiting-list management, and training new teachers (Mar 2023 – present).
                                        </li>
                                        <li>
                                            <strong>ESL Teacher (EPIK, South Korea)</strong> — lesson design &amp; delivery; cross-cultural communication
                                            (Feb 2021 – Feb 2023).
                                        </li>
                                        <li>
                                            <strong>Lifeguard &amp; Swimming Teacher</strong> — progressed from in-water teacher to experienced instructor
                                            (2014 – 2020).
                                        </li>
                                    </ul>
                                </div>

                                {/* Education */}
                                <div className="border-t border-rose-200 pt-4 mt-2">
                                    <h6 className="font-semibold font-dmserif text-rose-300 mb-2 text-xl">Education</h6>
                                    <ul className="list-disc list-outside space-y-2 pl-6 text-gray-500">
                                        <li>
                                            Full Stack Software Development, Advanced Front End, Apr 2024 – Apr 2025, Code Institute (<Link href="https://api.accredible.com/v1/auth/invite?code=5a97c72029af66f61277&credential_id=a930bd8e-6681-4bbf-a5ef-f6b565007e45&url=https%3A%2F%2Fwww.credential.net%2Fa930bd8e-6681-4bbf-a5ef-f6b565007e45&ident=eca3c799-98aa-44a3-9b51-8d9e4c3b8658" target="_blank" rel="noopener noreferrer" className="hover:underline">View Certificate</Link>)
                                        </li>
                                        <li>
                                            TrinityCert TESOL (Level 5), 2020
                                        </li>
                                        <li>
                                            BA Creative &amp; Cultural Industries; BA Photography (TU Dublin)
                                        </li>
                                    </ul>
                                </div>

                                {/* Certificates */}
                                <div className="border-t border-rose-200 pt-4">
                                    <h6 className="font-semibold font-dmserif text-rose-300 mb-2 text-xl">Certificates</h6>
                                    <ul className="list-disc list-outside space-y-2 pl-6 text-gray-500">
                                        <li className="hover:underline">
                                            <a href="https://www.trinitycollege.com/qualifications/teaching-english/CertTESOL" target="_blank" rel="noopener noreferrer">
                                                TrinityCert TESOL (Level 5), 2020
                                            </a>
                                        </li>
                                        <li>Level 2 Swim Ireland Accredited Teacher</li>
                                    </ul>
                                </div>

                                {/* Technical Skills */}
                                <div className="border-t border-rose-200 pt-4">
                                    <h6 className="font-semibold font-dmserif text-rose-300 mb-2 text-xl">Technical Skills</h6>
                                    <div className="flex flex-wrap gap-2 text-sm ml-0.5">
                                        {[
                                            'HTML', 'CSS', 'JavaScript', 'Python', 'Django', 'Allauth', 'Tailwind CSS', 'Bootstrap',
                                            'Flask', 'Next.js', 'Node.js', 'React.js', 'JQuery', 'AI Integration', 'Microsoft Suite',
                                            'GitHub', 'Agile Methodologies', 'SQLite', 'PostGreSQL', 'Search Engine Optimization (SEO)', 'Adobe Lightroom',
                                        ].map((s) => (
                                            <span
                                                key={s}
                                                className="bg-white text-rose-700 px-3 py-1 m-0.5 rounded-full ring-2 ring-white ring-offset-2 ring-offset-rose-300"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Soft Skills */}
                                <div className="border-t border-rose-200 pt-4">
                                    <h6 className="font-semibold font-dmserif text-rose-300 mb-2 text-xl">Soft Skills</h6>
                                    <div className="flex flex-wrap gap-2 text-sm ml-0.5">
                                        {[
                                            'Time-keeping', 'Clear communication', 'Multitasking', 'Team Management', 'Project Management',
                                            'Stakeholder management', 'Cross-cultural collaboration', 'Adaptability', 'Quick problem solving',
                                            'Creativity', 'Resilience & patience', 'Attention to detail', 'Customer-focused mindset',
                                        ].map((s) => (
                                            <span
                                                key={s}
                                                className="bg-white text-rose-700 px-3 py-1 m-0.5 rounded-full ring-2 ring-white ring-offset-2 ring-offset-rose-300"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}