'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCaretDown,
	faLocationDot,
	faFileArrowDown,
	faGlobe,
	faExternalLinkAlt,
	faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function AboutClient() {
	const [open, setOpen] = useState(false);
	const handleCvDownload = (event) => {
		event.preventDefault();

		const link = document.createElement('a');
		link.href = '/MaeveCrossan.pdf';
		link.download = 'MaeveCrossan.pdf';
		document.body.appendChild(link);
		link.click();
		link.remove();
	};

	const portfolioProjects = [
		{
			name: 'Templeogue College Swim Pool',
			summary: 'Website for the Templeogue College swimming pool, featuring class schedules and booking capabilities.',
			tech: 'JavaScript, Python, Tailwind CSS, Django, MySQL',
			github: 'https://github.com/morgan360/swimtcsp/tree/main',
			live: 'https://www.tcsp.ie/',
		},
		{
			name: 'Brandmark Agencies',
			summary: 'B2B marketing site for a retail brand agency with reusable brand portfolio pages.',
			tech: 'Next.js 15, React 19, Tailwind CSS, Font Awesome',
			github: 'https://github.com/maevecrossan/brandmark-app',
			live: 'https://www.brandmark.ie',
		},
		{
			name: 'Nomad Narratives',
			summary: 'Travel storytelling platform with community tagging and profile features.',
			tech: 'Django, React, Tailwind CSS, PostgreSQL',
			github: 'https://github.com/maevecrossan/nomad-narratives',
			live: 'https://nomad-narratives-05968209a16d.herokuapp.com/',
		},
		{
			name: 'La Luna',
			summary: 'Restaurant experience site with reservation flow and menu storytelling.',
			tech: 'Django, Bootstrap, PostgreSQL',
			github: 'https://github.com/maevecrossan/la-luna',
			live: 'https://la-luna-5259bef56a63.herokuapp.com/',
		},
		{
			name: 'Echoes of the Abyss',
			summary: 'Choose-your-own-adventure horror game with branching narrative paths.',
			tech: 'Python, Flask, HTML, CSS, JavaScript',
			github: 'https://github.com/maevecrossan/echoes-of-the-abyss',
			live: 'https://echoes-of-the-abyss-8920634f42db.herokuapp.com/',
		},
		{
			name: 'Byte Battles',
			summary: 'Retro themed tic-tac-toe with single and multiplayer modes.',
			tech: 'HTML, CSS, JavaScript',
			github: 'https://github.com/maevecrossan/byte-battles',
			live: 'https://maevecrossan.github.io/byte-battles/',
		},
		{
			name: 'Peaceful Path',
			summary: 'Mindfulness landing page promoting a guided meditation programme.',
			tech: 'HTML, CSS',
			github: 'https://github.com/maevecrossan/peaceful-path',
			live: 'https://maevecrossan.github.io/peaceful-path/',
		},
	];

	return (
		<main className="flex flex-col items-center min-h-screen w-full px-4 py-10 md:px-10 md:py-16 gap-12 bg-gradient-to-b from-mulberry/10 via-heather/5 to-leaf/10">
			{/* Header card */}
			<section
				className="relative w-full max-w-4xl overflow-hidden rounded-[3rem] bg-white/80 px-6 py-10 md:px-12 md:py-14 shadow-2xl border border-mulberry/10 ring-4 ring-white/40 ring-offset-4 ring-offset-mulberry/20 animate-drop-in"
				style={{ ['--delay']: '0ms' }}
				aria-labelledby="about-heading"
			>
				<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(126,99,119,0.25),transparent_60%)]" aria-hidden />
				<div className="relative flex flex-col items-center text-center gap-6">
					<h3 id="about-heading" className="text-4xl md:text-5xl font-melodrama text-mulberry">
						About Me
					</h3>
					<p className="text-base md:text-lg font-nunito text-mulberry/80 max-w-2xl">
						Hi, I&apos;m Maeve - a developer with a background in teaching and
						customer-facing roles, now focused on building accessible, responsive
						web experiences with clean UI and a friendly UX.
					</p>
				</div>
			</section>

			{/* Main content */}
			<section className="w-full max-w-6xl">
				<div
					className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-mulberry via-heather/90 to-leaf/85 p-8 md:p-12 shadow-2xl border border-white/20 ring-4 ring-white/30 ring-offset-4 ring-offset-mulberry/30 text-white animate-drop-in"
					style={{ ['--delay']: '140ms' }}
				>
					<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_55%)]" aria-hidden />
					<div className="relative grid grid-cols-1 lg:grid-cols-[0.9fr,1.1fr] gap-10 items-start">
						{/* LEFT: photo + quick facts */}
						<div className="flex flex-col items-center gap-6">
							<Image
								src="/images/headshot.jpg"
								alt="Maeve Crossan"
								width={220}
								height={220}
								className="rounded-full ring-4 ring-white/90 ring-offset-4 ring-offset-mulberry/30 shadow-xl"
							/>
							<div className="text-center space-y-2">
								<h4 className="text-mulberry text-2xl md:text-5xl font-bold font-melodrama">
									Maeve Crossan
								</h4>
								<h5 className="text-mulberry text-xl font-nunito font-semibold">
									Full-Stack Developer, Front End Specialist
								</h5>
							</div>

							<div className="w-full max-w-sm grid gap-4 text-sm text-white/90">
								<div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-center">
									<p>
										<FontAwesomeIcon icon={faLocationDot} className="mr-2 text-white" />
										Dublin, Ireland
									</p>
								</div>
								<div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4">
									<div className="flex flex-col items-center gap-2">
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
								<div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-center space-y-2">
									<p className="max-w-xs mx-auto">
										<strong>Diploma in Full Stack Software Development (Advanced Front End)</strong>{' '}
										with{' '}The Code Institute
										(Apr 2024 - Apr 2025)
									</p>

									<p>
										<a
											href="https://www.credential.net/a930bd8e-6681-4bbf-a5ef-f6b565007e45#acc.AfS1ICKn"
											className="font-semibold hover:underline"
											target="_blank"
											rel="noopener noreferrer"
										>
											<FontAwesomeIcon icon={faEye} className="mr-1 text-white" /> View Diploma
										</a>
									</p>

									<p>
										<a
											href="/MaeveCrossan.pdf"
											className="font-semibold hover:underline"
											download="MaeveCrossan.pdf"
											onClick={handleCvDownload}
										>
											<FontAwesomeIcon icon={faFileArrowDown} className="mr-1 text-white" />
											Download CV <span className="text-xs italic">(download will begin immediately)</span>
										</a>
									</p>
								</div>
							</div>
						</div>

						{/* RIGHT: combined summary */}
						<div className="m-2 md:m-4 lg:m-6 space-y-4 text-md">
							<h6 className="font-bold font-nunito text-mulberry text-2xl md:text-4xl">My Background</h6>
							<p className="text-white/90">
								I&apos;m a Full Stack Developer with an affinity for Front End development. I have a creative edge and a strong foundation in HTML, CSS, JavaScript, Python, and Django. I care about clean, accessible, user-friendly experiences and thrive in collaborative environments where communication and iteration matter.
							</p>
							<p className="text-white/90">
								My background is people-first - from teaching swimming across levels, training new instructors, and running front-of-house operations where clear communication and calm problem-solving are essential. This complements and reinforces the people-first focus highlighted in my summary above, and it shapes how I approach design, development, and delivery on the web.
							</p>
							<p className="text-white/90">
								I also spent two years in South Korea teaching English to elementary students. Adapting lessons across abilities and learning basic conversational Korean taught me to simplify complex ideas, respect context, and iterate quickly - the same muscles I use in product work.
							</p>
							<p className="text-white/90">
								On the technical side, I work with modern HTML/CSS/JS, Django and Tailwind, and I&apos;m expanding my full-stack skillset (including Next.js and Node.js) through hands-on projects - see my previous work{' '}
								<a href="/previous-work" className="font-semibold underline">here</a>.
							</p>
							<p className="text-white/90">
								Recent projects include a swim pool website redesign, a travel storytelling platform, a restaurant booking website, a text-based adventure, and a retro puzzle game - all designed with responsiveness and accessibility in mind.
							</p>
							<p className="text-white/90">
								Want to know more about my work? Check out my <a href="/previous-work" className="font-semibold hover:underline">previous projects</a>, or <a href="/contact" className="font-semibold hover:underline">get in touch</a>!
							</p>
						</div>
					</div>

					{/* Full-width accordion (spans entire pink box) */}
					<div className="mt-2 md:mt-4">
						<button
							type="button"
							onClick={() => setOpen((o) => !o)}
							aria-expanded={open}
							aria-controls="about-expanded-details"
							className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 font-nunito text-sm md:text-base text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-mulberry mx-auto"
						>
							{open ? 'Hide Details' : 'View Details'}
							<FontAwesomeIcon
								icon={faCaretDown}
								className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
								style={{ fontSize: '1rem' }}
							/>
						</button>

						<div
							id="about-expanded-details"
							className={`overflow-hidden transition-all duration-500 ease-out ${open ? 'max-h-[3200px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}
						>
							<div className="flex flex-col gap-6 rounded-[2.5rem] border border-white/15 bg-white/5 px-6 py-8 md:px-10 md:py-12 shadow-inner backdrop-blur-sm">
								{/* Experience */}
								<div className="pb-8 mt-2">
									<h6 className="font-bold font-nunito text-mulberry mb-4 text-2xl md:text-4xl">Experience</h6>
									<ul className="list-disc list-outside space-y-4 pl-6 text-white/90 max-w-3xl">
										<li>
											<strong>Freelance Full Stack Developer</strong> - project planning &amp; execution,
											project management, stakeholder management, UI/UX design, front end development,
											back end development. (April 2025 - present).
										</li>
										<li>
											<strong>Swimming Teacher &amp; Front of House</strong> - lesson planning and delivery,
											customer support, bookings, waiting-list management, and training new teachers (Mar 2023 - present).
										</li>
										<li>
											<strong>ESL Teacher (EPIK, South Korea)</strong> - lesson design &amp; delivery; cross-cultural communication
											(Feb 2021 - Feb 2023).
										</li>
										<li>
											<strong>Lifeguard &amp; Swimming Teacher</strong> - progressed from in-water teacher to experienced instructor
											(2014 - 2020).
										</li>
									</ul>
								</div>

								{/* Portfolio Projects */}
								<div className="border-t border-white pt-10 pb-8 mt-2">
									<h6 className="font-bold font-nunito text-mulberry mb-4 text-2xl md:text-4xl">Portfolio Projects</h6>
									<ul className="list-disc list-outside space-y-4 pl-6 text-white/90">
										{portfolioProjects.map(({ name, summary, tech, github, live }) => (
											<li key={name} className="space-y-1">
												<strong>{name}</strong> - {summary}
												<div>Technologies Used: {tech}.</div>
												<div className="flex flex-wrap items-center gap-4 text-sm">
													<a
														className="inline-flex items-center gap-2 hover:underline"
														target="_blank"
														rel="noopener noreferrer"
														href={github}
													>
														<FontAwesomeIcon icon={faGithub} />
														GitHub
													</a>
													<a
														className="inline-flex items-center gap-2 hover:underline"
														target="_blank"
														rel="noopener noreferrer"
														href={live}
													>
														<FontAwesomeIcon icon={faExternalLinkAlt} />
														Live Site
													</a>
												</div>
											</li>
										))}
									</ul>
								</div>

								{/* Technical Skills */}
								<div className="border-t border-white pt-10 pb-8 mt-2">
									<h6 className="font-bold font-nunito text-mulberry mb-4 text-2xl md:text-4xl">Technical Skills</h6>
									<div className="space-y-4 text-white/90 max-w-3xl">
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

								{/* Soft Skills */}
								<div className="border-t border-white pt-4">
									<h6 className="font-bold font-nunito text-mulberry mb-4 text-2xl md:text-4xl">Soft Skills</h6>
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
												className="bg-mulberry text-white px-3 py-1 m-0.5 rounded-full ring-2 ring-white"
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
			</section>
		</main>
	);
}
