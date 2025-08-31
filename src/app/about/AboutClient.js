'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faLocationDot,
  faFileArrowDown,
  faEnvelope,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function AboutClient() {
  const [open, setOpen] = useState(false);

  return (
    <main className="flex flex-col items-center min-h-screen m-2">
      {/* Header card - flipped to white */}
      <div
        className="mx-auto px-4 ml-4 mr-4 mt-12 bg-white shadow-xl text-center rounded-xl ring-4 ring-white ring-offset-2 ring-offset-rose-300 animate-drop-in"
        style={{ ['--delay']: '0ms' }}
      >
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
        <div
          className="w-full rounded-3xl p-8 md:p-10 bg-rose-100 backdrop-blur-xl shadow-xl text-white mt-10 ring-4 ring-white ring-offset-2 ring-offset-rose-300 animate-drop-in"
          style={{ ['--delay']: '140ms' }}
        >
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
              <h4 className="text-rose-400 mb-2 text-xl md:text-4xl font-semibold font-caprasimo text-center">
                Maeve Crossan
              </h4>
              <h5 className="text-rose-400/80 mb-4 text-lg font-dmserif text-center">
                Full-Stack Developer, Front End Specialist
              </h5>

              <div className="text-sm text-rose-300 text-center space-y-2">
                <p>
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-rose-300" />
                  Dublin, Ireland
                </p>
                {/* Contact */}
                <div className="flex flex-col items-center gap-1">
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="https://github.com/maevecrossan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-medium hover:underline"
                    >
                      <FontAwesomeIcon icon={faGithub} /> github.com/maevecrossan
                    </a>
                    <a
                      href="https://www.linkedin.com/in/maeve-crossan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-medium hover:underline"
                    >
                      <FontAwesomeIcon icon={faLinkedin} /> linkedin.com/in/maeve-crossan/
                    </a>
                    <a
                      href="https://maevecrossan.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-medium hover:underline"
                    >
                      <FontAwesomeIcon icon={faGlobe} /> maevecrossan.com
                    </a>
                  </div>
                </div>

                {/* Course blurb */}
                <p className="max-w-xs mt-2 mx-auto">
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
                  (Apr 2024 – Apr 2025)
                </p>
                <p>
                  <a
                    href="/maevecrossan.pdf"
                    className="font-semibold hover:underline"
                    download="maevecrossan.pdf"
                  >
                    <FontAwesomeIcon icon={faFileArrowDown} className="mr-1 text-rose-300" />
                    Download CV <span className="text-xs italic">(download will begin immediately)</span>
                  </a>
                </p>
              </div>
            </div>

            {/* RIGHT: combined summary */}
            <div className="m-2 md:m-6 text-md">
              <h6 className="font-semibold font-dmserif text-rose-300 mb-2 text-lg md:text-2xl">A Little About Me</h6>
              <p className="mb-4 text-gray-500">
                I’m a Front‑End Developer with a creative edge and a solid foundation in HTML, CSS, JavaScript, Python, and Django. I care about clean, accessible, user‑friendly experiences and thrive in collaborative environments where communication and iteration matter.
              </p>
              <p className="mb-4 text-gray-500">
                My background is people‑first — from teaching swimming across levels, training new instructors, and running front‑of‑house operations where clear communication and calm problem‑solving are essential. This complements and reinforces the people‑first focus highlighted in my summary above, and it shapes how I approach design, development, and delivery on the web.
              </p>
              <p className="mb-4 text-gray-500">
                I also spent two years in South Korea teaching English to elementary students (ages 4–13). Adapting lessons across abilities and learning basic conversational Korean taught me to simplify complex ideas, respect context, and iterate quickly — the same muscles I use in product work.
              </p>
              <p className="mb-4 text-gray-500">
                On the technical side, I work with modern HTML/CSS/JS, Django and Tailwind, and I’m expanding my full‑stack skillset (including Next.js and Node.js) through hands‑on projects — see my previous work{' '}
                <a href="/previous-work" className="font-semibold underline">here</a>.
              </p>
              <p className="mb-4 text-gray-500">
                Recent projects include a swim‑pool website redesign, a travel storytelling platform, a restaurant site, a text‑based adventure, and a retro puzzle game — all designed with responsiveness and accessibility in mind.
              </p>
              <p className="mb-4 text-gray-500">
                Want to know more about my work? Check out my <a href="/previous-work" className="font-semibold hover:underline">previous projects</a>, or <a href="/contact" className="font-semibold hover:underline">get in touch</a>!
              </p>
            </div>
          </div>

          {/* Full-width accordion (spans entire pink box) */}
          <div className="mt-2 md:mt-4">
            <button
              onClick={() => setOpen((o) => !o)}
              className="btn font-dmserif mt-6 rounded-xl bg-rose-400 text-white shadow-md hover:bg-rose-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-200 border border-rose-100 px-4 py-2 flex items-center justify-center mx-auto"
            >
              {open ? 'Hide Details' : 'View Details'}
              <FontAwesomeIcon
                icon={faCaretDown}
                className={`ml-2 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                style={{ fontSize: '1rem' }}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[2500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
            >
              <div className="flex flex-col gap-4">
                {/* Experience */}
                <div className="border-t border-rose-200 pt-4 mt-2">
                  <h6 className="font-semibold font-dmserif text-rose-300 mb-2 text-lg md:text-2xl">Experience</h6>
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
                  <h6 className="font-semibold font-dmserif text-rose-300 mb-2 text-lg md:text-2xl">Education</h6>
                  <ul className="list-disc list-outside space-y-2 pl-6 text-gray-500">
                    <li>
                      Full Stack Software Development, Advanced Front End, Apr 2024 - Apr 2025, Code Institute (
                      <Link
                        href="https://api.accredible.com/v1/auth/invite?code=5a97c72029af66f61277&credential_id=a930bd8e-6681-4bbf-a5ef-f6b565007e45&url=https%3A%2F%2Fwww.credential.net%2Fa930bd8e-6681-4bbf-a5ef-f6b565007e45&ident=eca3c799-98aa-44a3-9b51-8d9e4c3b8658"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        View Certificate
                      </Link>
                      )
                    </li>
                    <li>TrinityCert TESOL (Level 5), 2020</li>
                    <li>BA Creative &amp; Cultural Industries; BA Photography (TU Dublin)</li>
                  </ul>
                </div>

                {/* Certificates */}
                <div className="border-t border-rose-200 pt-4">
                  <h6 className="font-semibold font-dmserif text-rose-300 mb-2 text-lg md:text-2xl">Certificates</h6>
                  <ul className="list-disc list-outside space-y-2 pl-6 text-gray-500">
                    <li className="hover:underline">
                      <a
                        href="https://www.trinitycollege.com/qualifications/teaching-english/CertTESOL"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        TrinityCert TESOL (Level 5), 2020
                      </a>
                    </li>
                    <li>Level 2 Swim Ireland Accredited Teacher</li>
                  </ul>
                </div>

                {/* Technical Skills */}
                <div className="border-t border-rose-200 pt-4 max-w-4xl">
                  <h6 className="font-semibold font-dmserif text-rose-300 mb-2 text-lg md:text-2xl">Technical Skills</h6>
                  <div className="space-y-2 text-gray-500">
                    <p>
                      <strong>Languages &amp; Tools:</strong> HTML5, CSS3, JavaScript (ES5 &amp; ES6+), Python, Node.js, Next.js
                    </p>
                    <p>
                      <strong>Frameworks &amp; Libraries:</strong> React, React Router, Bootstrap, React-Bootstrap, Django, Django Allauth,
                      Django Crispy Forms, Django Extensions, Flask, Axios (AJAX/data fetching), Tailwind CSS, jQuery
                    </p>
                    <p>
                      <strong>Styling &amp; Design:</strong> Responsive and Accessible Web Design, Mobile-first Principles
                    </p>
                    <p>
                      <strong>State &amp; Data Handling:</strong> RESTful APIs, JWT Authentication, OAuth2, Form Validation
                    </p>
                    <p>
                      <strong>Testing, Linting &amp; Developer Tools:</strong> React Testing Library, Jest, Pylint, Django Extensions, Chrome DevTools
                    </p>
                    <p>
                      <strong>Version Control &amp; Deployment:</strong> Git, GitHub, Gunicorn, Whitenoise (for Django deployment)
                    </p>
                    <p>
                      <strong>Databases:</strong> PostgreSQL, SQLite (development), MongoDB, MySQL
                    </p>
                    <p>
                      <strong>Other:</strong> Web Accessibility Principles (ARIA, semantic HTML), Agile Development, Microsoft Office Suite,
                      AI Integration, Search Engine Optimization (SEO), Adobe Lightroom
                    </p>
                  </div>
                </div>

                {/* Portfolio Projects */}
                <div className="border-t border-rose-200 pt-4">
                  <h6 className="font-semibold font-dmserif text-rose-300 mb-2 text-lg md:text-2xl">Portfolio Projects</h6>
                  <ul className="list-disc list-outside space-y-2 pl-6 text-gray-500">
                    <li>
                      <strong>Nomad Narratives</strong> — Travel Blog for Explorers
                      <div>Technologies Used: HTML, CSS, JavaScript, Python, Django, React.</div>
                      <div>
                        <FontAwesomeIcon icon={faGithub} className="mr-1" />
                        <a
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/maevecrossan/nomad-narratives"
                        >
                          github.com/maevecrossan/nomad-narratives
                        </a>
                      </div>
                    </li>
                    <li>
                      <strong>La Luna</strong> — Restaurant Information and Booking System
                      <div>Technologies Used: HTML, CSS, JavaScript, Python, Django, React.</div>
                      <div>
                        <FontAwesomeIcon icon={faGithub} className="mr-1" />
                        <a
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/maevecrossan/la-luna"
                        >
                          github.com/maevecrossan/la-luna
                        </a>
                      </div>
                    </li>
                    <li>
                      <strong>Echoes of the Abyss</strong> — Text-based Choose Your Own Adventure Game (Python based)
                      <div>Technologies Used: HTML, CSS, JavaScript, Python</div>
                      <div>
                        <FontAwesomeIcon icon={faGithub} className="mr-1" />
                        <a
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/maevecrossan/echoes-of-the-abyss"
                        >
                          github.com/maevecrossan/echoes-of-the-abyss
                        </a>
                      </div>
                    </li>
                    <li>
                      <strong>Byte Battles</strong> — Retro style Tic-Tac-Toe Game (JavaScript based)
                      <div>Technologies Used: HTML, CSS, JavaScript</div>
                      <div>
                        <FontAwesomeIcon icon={faGithub} className="mr-1" />
                        <a
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/maevecrossan/byte-battles"
                        >
                          github.com/maevecrossan/byte-battles
                        </a>
                      </div>
                    </li>
                    <li>
                      <strong>Peaceful Path</strong> — Mindfulness Company (HTML &amp; CSS based)
                      <div>Technologies Used: HTML, CSS.</div>
                      <div>
                        <FontAwesomeIcon icon={faGithub} className="mr-1" />
                        <a
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/maevecrossan/peaceful-path"
                        >
                          github.com/maevecrossan/peaceful-path
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Soft Skills */}
                <div className="border-t border-rose-200 pt-4">
                  <h6 className="font-semibold font-dmserif text-rose-300 mb-2 text-lg md:text-2xl">Soft Skills</h6>
                  <div className="max-w-3xl flex flex-wrap gap-2 text-sm ml-0.5">
                    {[
                      'Time-keeping',
                      'Clear communication',
                      'Multitasking',
                      'Team Management',
                      'Project Management',
                      'Stakeholder management',
                      'Cross-cultural collaboration',
                      'Adaptability',
                      'Quick problem solving',
                      'Creativity',
                      'Resilience & patience',
                      'Attention to detail',
                      'Customer-focused mindset',
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
