'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PreviousWorkClient() {
	const [expandedProjects, setExpandedProjects] = useState({});

	const toggleProject = (projectId) => {
		setExpandedProjects((prev) => ({
			...prev,
			[projectId]: !prev[projectId],
		}));
	};

	return (
		<main className="flex flex-col items-center min-h-screen w-full px-4 py-10 
		md:px-10 md:py-16 gap-16 bg-gradient-to-b from-mulberry/10 via-heather/5 to-leaf/10">
			<section
				className="w-full max-w-3xl overflow-hidden rounded-[3rem] bg-mulberry 
				text-white shadow-2xl border border-white/30 ring-4 ring-white/30 
				ring-offset-4 ring-offset-mulberry/60 animate-drop-in"
				style={{ ['--delay']: '0ms' }}
				aria-labelledby="previous-work-heading"
			>
				<div className="relative grid gap-10 px-8 py-12 md:px-14 md:py-16 md:grid-cols-[1.15fr,0.85fr] md:items-center">
					<div className="space-y-6 max-w-xl">
						<p className="text-xs uppercase tracking-[0.4em] font-nunito text-white/70">
							Case Studies &amp; Launches
						</p>
						<h1 id="previous-work-heading" className="text-4xl md:text-5xl lg:text-6xl font-melodrama">
							Previous Work
						</h1>
						<p className="font-nunito text-base md:text-lg text-white/85 leading-relaxed">
							Explore the collaborations, experiments, and client launches that have shaped my
							practice - each rooted in intentional design and thoughtful engineering.
						</p>
						<div className="flex flex-wrap gap-4">
							<Link
								href="/contact"
								className="rounded-full bg-white text-mulberry px-6 py-3
								 font-nunito text-sm md:text-base shadow-lg transition 
								 hover:bg-white/90 focus:outline-none focus-visible:ring-2 
								 focus-visible:ring-white focus-visible:ring-offset-2 
								 focus-visible:ring-offset-mulberry"
							>
								Start a project conversation
							</Link>
							<Link
								href="mailto:maevecrossan@gmail.com"
								className="rounded-full border border-white/60 px-6 py-3 
								font-nunito text-sm md:text-base text-white/90 transition 
								hover:border-white focus:outline-none focus-visible:ring-2 
								focus-visible:ring-white focus-visible:ring-offset-2 
								focus-visible:ring-offset-mulberry"
							>
								Email me directly
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* WIP Projects */}
			<section
				className="w-full max-w-6xl mx-auto rounded-[3rem] bg-white/70 px-6 py-10 md:px-12 md:py-14 shadow-2xl border border-mulberry/15 animate-drop-in"
				style={{ ['--delay']: '80ms' }}
				aria-labelledby="wip-heading"
			>
				<div className="flex flex-col items-center text-center space-y-4 mb-8">
					<span className="inline-flex items-center gap-2 rounded-full border border-mulberry/20 bg-mulberry/10 px-4 py-2 text-xs uppercase tracking-[0.35em] font-nunito text-mulberry/70">
						In Progress
					</span>
					<h2 id="wip-heading" className="text-3xl md:text-4xl font-melodrama text-mulberry">
						Work in Progress
					</h2>
					<p className="max-w-2xl font-nunito text-base md:text-lg text-mulberry/80 leading-relaxed">
						Quick peeks at experiments on the bench - for fun and personal growth.
					</p>
				</div>
				<dl className="grid gap-6 md:grid-cols-1">
					<div className="rounded-2xl border border-mulberry/20 bg-white p-6 shadow-lg text-left">
						<dt className="text-xs uppercase tracking-[0.35em] font-nunito text-mulberry/70">
							Cosy Focus - A gamified habit tracking app.
						</dt>
						<dd className="mt-3 text-base md:text-lg font-nunito text-mulberry/90 leading-relaxed">
							The aim of cosy focus is to add a game element to a to-do list. Have an exam to study for or work to get done? We aim provide an environment that helps you keep off your devices and focus the task at hand. The best part? You can earn XP to expand and unlock new study spaces. Using your avatar, you can visit new locations, from cosy coffee shops to peaceful rainforests. Cosy focus adds a visual element to studying and focusing, tracking how long you've been focusing on a task.
						</dd>
					</div>
				</dl>
			</section>

			<section className="w-full max-w-6xl space-y-12">
				{/* Projects ordered by date (recent -> oldest) */}
				{/* --------------------------------------------------- Portfolio Site */}
				<article
					className="relative w-full overflow-hidden rounded-[3rem] p-8 md:p-14 text-white shadow-2xl bg-gradient-to-br from-heather via-mulberry to-evergreen ring-4 ring-white/30 ring-offset-4 ring-offset-mulberry/60 border border-white/30 animate-drop-in"
					style={{ ['--delay']: '140ms' }}
				>
					<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_55%)]" aria-hidden />
					<div className="relative grid gap-10 md:grid-cols-[1.15fr,0.85fr] items-start">
						<div className="space-y-6">
							<span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-2 text-xs uppercase tracking-[0.35em] font-nunito text-white/80">
								Featured Build
							</span>
							<div>
								<h4 className="text-4xl md:text-5xl font-melodrama leading-tight">
									Portfolio Site
									<span className="block text-lg font-nunito text-white/70">(You&apos;re exploring it now)</span>
								</h4>
								<p className="mt-4 text-sm md:text-base font-nunito uppercase tracking-[0.35em] text-white/70">
									Role : Sole Designer &amp; Developer
								</p>
							</div>
							<p className="text-base md:text-lg font-nunito text-white/85 leading-relaxed max-w-2xl">
								This site is my sandbox for pairing intentional art direction with engineering craft. Built on the
								Next.js App Router, it layers custom animation, reusable components, and polished narratives to
								showcase my client work and process.
							</p>
							<div className="grid gap-6 md:grid-cols-2">
								<div className="rounded-2xl border border-white/20 bg-white/10 p-6">
									<h6 className="font-semibold text-white mb-3 text-base">Technology Used</h6>
									<ul className="space-y-2 text-sm md:text-base text-white/80 font-nunito">
										<li>Next.js 15 App Router</li>
										<li>React 19</li>
										<li>Node.js tooling</li>
										<li>Tailwind CSS + DaisyUI</li>
										<li>Font Awesome 7</li>
									</ul>
								</div>
								<div className="rounded-2xl border border-white/20 bg-white/10 p-6">
									<h6 className="font-semibold text-white mb-3 text-base">Key Highlights</h6>
									<ul className="space-y-2 text-sm md:text-base text-white/80 font-nunito">
										<li>API-powered contact + download flows</li>
										<li>Responsive, motion-rich storytelling</li>
										<li>Accordion case studies with device-aware layouts</li>
										<li>Accessible carousel + custom animation system</li>
										<li>Instant CV preview &amp; download links</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="relative">
							<div className="absolute inset-0 rounded-full bg-heather/30 blur-3xl pointer-events-none" aria-hidden />
						</div>
					</div>

					{/* Project Links */}
					<div className="relative mt-10 flex flex-wrap justify-center gap-4">
						<a
							href="https://github.com/maevecrossan/my-portfolio"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 rounded-full bg-white text-mulberry px-6 py-3 font-nunito text-sm md:text-base shadow-lg transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-mulberry"
						>
							<FontAwesomeIcon icon={faGithub} className="text-lg" />
							<span>GitHub</span>
						</a>
						<a
							href="https://maevecrossan.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 font-nunito text-sm md:text-base text-white/90 transition hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-mulberry"
						>
							<FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
							<span>Live Site</span>
						</a>
					</div>
				</article>

				{/* ------------------------------------------------- Brandmark Project Card */}
				<article
					className="relative w-full overflow-hidden rounded-[3rem] p-8 md:p-14 text-white shadow-2xl bg-gradient-to-br from-heather via-mulberry to-evergreen ring-4 ring-white/30 ring-offset-4 ring-offset-mulberry/60 border border-white/30 animate-drop-in"
					style={{ ['--delay']: '200ms' }}
				>
					<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_55%)]" aria-hidden />
					{/* Two-column on lg+, stacked on sm/md */}
					<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
						{/* LEFT: Title/Role/Image */}
						<div>
							<div className="border-b border-white/20 pb-6 mb-6">
								<p className="text-xs uppercase tracking-[0.35em] font-nunito text-white/60 text-center lg:text-left">
									Client Spotlight
								</p>
								<h4 className="text-white mb-3 text-3xl md:text-4xl font-melodrama text-center lg:text-left">
									Brandmark Agencies
								</h4>
								<h5 className="text-white/80 mb-6 text-sm md:text-base font-nunito text-center lg:text-left">
									<span className="font-semibold text-white">Role:</span> Sole Designer &amp; Developer
								</h5>
								<div className="relative rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-lg">
									<div className="absolute inset-0 rounded-[1.75rem] border border-white/30 pointer-events-none" aria-hidden />
									<Image
										src="/images/brandmark-screenshot.png"
										alt="Brandmark Agencies website screenshot"
										width={800}
										height={450}
										className="relative rounded-[1.5rem] border border-white/15"
									/>
								</div>
								<div className="mt-6 rounded-3xl border border-white/15 bg-white/10 p-6 text-md">
									<h6 className="font-semibold text-lg text-white mb-3">Project Description</h6>
									<p className="text-white/80 leading-relaxed">
										Rebuilt the Brandmark Agencies marketing site on the Next.js App
										Router with a custom Tailwind design
										system, reusable brand pages, and storytelling
										that supports retailer outreach across Ireland.
									</p>
								</div>
							</div>
						</div>

						{/* RIGHT: Description + Details (visible on lg+) */}
						<div className="hidden lg:block">
							<div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-sm space-y-6">
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Technology Used</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
										<li>Next.js 15 App Router</li>
										<li>React 19</li>
										<li>Tailwind CSS 4 with custom theme tokens</li>
										<li>Next/Image for optimised media</li>
										<li>Font Awesome 7 icon system</li>
									</ul>
								</div>
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Key Features</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
										<li>Hero carousel showcasing brand imagery with accessible overlays</li>
										<li>Filterable brand portfolio with reusable detail pages</li>
										<li>Contact hub with spam-safe email/phone links and Google Maps embed</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					{/* Project Links */}
					<div className="flex justify-center gap-4 mb-4">
						<a
							href="https://github.com/maevecrossan/brandmark-app"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 bg-leaf hover:bg-moss/80
							 border-2 border-leaf hover:border-white/80 text-white font-medium rounded-xl 
							 transition-colors duration-200"
						>
							<FontAwesomeIcon icon={faGithub} className="text-lg" />
							<span>GitHub</span>
						</a>
						<a
							href="https://www.brandmark.ie"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 bg-heather hover:bg-heather/80 
							text-white border-2 border-heather hover:border-white/80 rounded-xl transition-colors 
							duration-200"
						>
							<FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
							<span>Live Site</span>
						</a>
					</div>

					{/* Toggle + accordion (sm/md only) */}
					<button
						type="button"
						onClick={() => toggleProject('brandmark')}
						aria-expanded={Boolean(expandedProjects.brandmark)}
						aria-controls="brandmark-details"
						className="mt-8 flex items-center justify-center gap-2 rounded-full 
						border border-white/50 bg-white/10 px-5 py-3 font-nunito text-sm 
						text-white transition hover:bg-white/20 focus:outline-none 
						focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 
						focus-visible:ring-offset-mulberry lg:hidden"
					>
						{expandedProjects.brandmark ? 'Hide Details' : 'View Details'}
						<FontAwesomeIcon
							icon={faCaretDown}
							className={`transition-transform duration-200 ${expandedProjects.brandmark ? 'rotate-180' : ''}`}
							style={{ fontSize: '0.9rem' }}
						/>
					</button>

					<div
						id="brandmark-details"
						className={`overflow-hidden transition-all duration-300 ease-in-out 
							lg:hidden ${expandedProjects.brandmark ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
							}`}
					>
						<div className="mt-6 border-t border-white/15 pt-6">
							<div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-sm space-y-6">
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Technology Used</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
										<li>Next.js 15 App Router</li>
										<li>React 19</li>
										<li>Tailwind CSS 4 with custom theme tokens</li>
										<li>Next/Image for optimised media</li>
										<li>Font Awesome 7 icon system</li>
									</ul>
								</div>
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Key Features</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
										<li>Responsive layout tuned for mobile, tablet, and desktop</li>
										<li>Hero carousel of lifestyle imagery with gradient overlays</li>
										<li>Filterable portfolio and dedicated brand pages</li>
										<li>Case-study section covering Secrid retail installations</li>
										<li>Contact hub with obfuscated email/phone links and embedded Google Map</li>
										<li>PWA metadata and structured data for richer sharing</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</article>

				{/* ------------------------------------------------- TCSP Project Card */}
				<article
					className="relative w-full overflow-hidden rounded-[3rem] p-8 md:p-14 text-white shadow-2xl bg-gradient-to-br from-heather via-mulberry to-evergreen ring-4 ring-white/30 ring-offset-4 ring-offset-mulberry/60 border border-white/30 animate-drop-in"
					style={{ ['--delay']: '260ms' }}
				>
					<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_55%)]" aria-hidden />
					{/* Two-column on lg+, stacked on sm/md */}
					<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
						{/* LEFT: Title/Role/Image */}
						<div>
							<div className="border-b border-white/20 pb-6 mb-6">
								<p className="text-xs uppercase tracking-[0.35em] font-nunito text-white/70 text-center lg:text-left">
									Community Rebuild
								</p>
								<h4 className="text-white mb-3 text-3xl md:text-4xl font-melodrama text-center lg:text-left">
									Templeogue College Swim Pool
								</h4>
								<h5 className="text-white/80 mb-6 text-sm md:text-base font-nunito text-center lg:text-left">
									<span className="font-semibold text-white">Role:</span> Front End Developer, UI/UX Consultant
								</h5>
								<div className="relative mx-auto max-w-3xl rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-lg">
									<div className="absolute inset-0 rounded-[1.75rem] border border-white/30 pointer-events-none" aria-hidden />
									<Image
										src="/images/tcsp-screenshot.png"
										alt="Templeogue College Swim Pool redesign preview"
										width={800}
										height={450}
										className="relative rounded-[1.5rem] border border-white/15"
									/>
								</div>
								<div className="mt-6 rounded-3xl border border-white/15 bg-white/10 p-6 text-md">
									<h6 className="font-semibold text-lg text-white mb-3">Project Description</h6>
									<p className="text-white/80 leading-relaxed">
										This redesign modernises the Templeogue College Swim Pool website to improve
										wayfinding and accessibility.
										The refreshed experience makes it effortless for families to review class
										schedules, explore facility amenities,
										and register for sessions while staying inclusive for every visitor.
									</p>
								</div>
							</div>
						</div>

						{/* RIGHT: Description + Details (visible on lg+) */}
						<div className="hidden lg:block">
							<div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-sm space-y-6">
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Technology Used</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
										<li>HTML</li>
										<li>CSS</li>
										<li>JavaScript</li>
										<li>Python</li>
										<li>Tailwind CSS</li>
										<li>Django</li>
										<li>
											SQLite <span className="italic">(development)</span>
										</li>
										<li>
											MySQL <span className="italic">(production)</span>
										</li>
									</ul>
								</div>
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Key Features</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
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

					{/* Project Links */}
					<div className="flex justify-center gap-4 mb-4">
						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 bg-leaf hover:bg-moss/80 
							border-2 border-leaf hover:border-white/80 text-white rounded-xl transition-colors 
							duration-200"
						>
							<FontAwesomeIcon icon={faGithub} className="text-lg" />
							<span>GitHub</span>
						</a>
						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 bg-heather hover:bg-heather/80 
							text-white border-2 border-heather hover:border-white/80 rounded-xl transition-colors 
							duration-200"
						>
							<FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
							<span>Live Site</span>
						</a>
					</div>

					{/* Toggle + accordion (sm/md only) */}
					<button
						type="button"
						onClick={() => toggleProject('tcsp')}
						aria-expanded={Boolean(expandedProjects.tcsp)}
						aria-controls="tcsp-details"
						className="mt-8 flex items-center justify-center gap-2 rounded-full 
						border border-white/50 bg-white/10 px-5 py-3 font-nunito text-sm 
						text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 
						focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-heather 
						lg:hidden"
					>
						{expandedProjects.tcsp ? 'Hide Details' : 'View Details'}
						<FontAwesomeIcon
							icon={faCaretDown}
							className={`transition-transform duration-200 ${expandedProjects.tcsp ? 'rotate-180' : ''}`}
							style={{ fontSize: '0.9rem' }}
						/>
					</button>

					<div
						id="tcsp-details"
						className={`overflow-hidden transition-all duration-300 ease-in-out 
							lg:hidden ${expandedProjects.tcsp ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
							}`}
					>
						<div className="mt-6 border-t border-white/15 pt-6">
							<div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-sm space-y-6">
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Technology Used</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
										<li>HTML</li>
										<li>CSS</li>
										<li>JavaScript</li>
										<li>Python</li>
										<li>Tailwind CSS</li>
										<li>Django</li>
										<li>
											SQLite <span className="italic">(development)</span>
										</li>
										<li>
											MySQL <span className="italic">(production)</span>
										</li>
									</ul>
								</div>
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Key Features</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
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
				</article>


				{/* ------------------------------------------------- Project Card #2 */}
				<article
					className="relative w-full overflow-hidden rounded-[3rem] p-8 md:p-14 text-white shadow-2xl bg-gradient-to-br from-heather via-mulberry to-evergreen ring-4 ring-white/30 ring-offset-4 ring-offset-mulberry/60 border border-white/30 animate-drop-in"
					style={{ ['--delay']: '320ms' }}
				>
					<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_55%)]" aria-hidden />
					<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
						<div>
							<div className="border-b border-white/20 pb-6 mb-6">
								<p className="text-xs uppercase tracking-[0.35em] font-nunito text-white/60 text-center lg:text-left">
									Digital Storytelling Platform
								</p>
								<h4 className="text-white mb-3 text-3xl md:text-4xl font-melodrama text-center lg:text-left">
									Nomad Narratives
								</h4>
								<h5 className="text-white/80 mb-6 text-sm md:text-base font-nunito text-center lg:text-left">
									<span className="font-semibold text-white">Role:</span> Sole Developer
								</h5>
								<div className="relative mx-auto max-w-3xl rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-lg">
									<div className="absolute inset-0 rounded-[1.75rem] border border-white/30 pointer-events-none" aria-hidden />
									<Image
										src="/images/nomad-screenshot.png"
										alt="Nomad Narratives website screenshot"
										width={800}
										height={450}
										className="relative rounded-[1.5rem] border border-white/15"
									/>
								</div>
								<div className="mt-6 rounded-3xl border border-white/15 bg-white/10 p-6 text-md">
									<h6 className="font-semibold text-lg text-white mb-3">Project Description</h6>
									<p className="text-white/80 leading-relaxed">
										Nomad Narratives is a storytelling platform for travellers to share their
										experiences, tag locations, and connect with fellow explorers.
										It enables immersive travel logs with rich media content,
										empowering the community to discover new destinations through
										curated narratives.
									</p>
								</div>
							</div>
						</div>
						<div className="hidden lg:block">
							<div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-sm space-y-6">
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Technology Used</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
										<li>HTML</li>
										<li>CSS</li>
										<li>JavaScript</li>
										<li>ReactJS</li>
										<li>React Router</li>
										<li>React Bootstrap</li>
										<li>Python</li>
										<li>Django</li>
										<li>
											SQLite <span className="italic">(development)</span>
										</li>
										<li>
											PostgreSQL <span className="italic">(production)</span>
										</li>
									</ul>
								</div>
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Key Features</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
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



					<div className="flex justify-center gap-4 mb-4">
						<a
							href="https://github.com/maevecrossan/nomad-narratives"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 bg-leaf hover:bg-moss/80 
							border-2 border-leaf hover:border-white/80 text-white rounded-xl 
							transition-colors duration-200"
						>
							<FontAwesomeIcon icon={faGithub} className="text-lg" />
							<span>GitHub</span>
						</a>
						<a
							href="https://nomad-narratives-05968209a16d.herokuapp.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 bg-heather hover:bg-heather/80 
							text-white border-2 border-heather hover:border-white/80 rounded-xl transition-colors 
							duration-200"
						>
							<FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
							<span>Live Site</span>
						</a>
					</div>

					<button
						type="button"
						onClick={() => toggleProject('nomad')}
						aria-expanded={Boolean(expandedProjects.nomad)}
						aria-controls="nomad-details"
						className="mt-8 flex items-center justify-center gap-2 rounded-full 
						border border-white/50 bg-white/10 px-5 py-3 font-nunito text-sm 
						text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 
						focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-mulberry 
						lg:hidden"
					>
						{expandedProjects.nomad ? 'Hide Details' : 'View Details'}
						<FontAwesomeIcon
							icon={faCaretDown}
							className={`transition-transform duration-200 ${expandedProjects.nomad ? 'rotate-180' : ''}`}
							style={{ fontSize: '0.9rem' }}
						/>
					</button>

					<div
						id="nomad-details"
						className={`overflow-hidden transition-all duration-300 ease-in-out 
							lg:hidden ${expandedProjects.nomad ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
							}`}
					>
						<div className="mt-6 border-t border-white/15 pt-6">
							<div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-sm space-y-6">
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Technology Used</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
										<li>HTML</li>
										<li>CSS</li>
										<li>JavaScript</li>
										<li>ReactJS</li>
										<li>React Router</li>
										<li>React Bootstrap</li>
										<li>Python</li>
										<li>Django</li>
										<li>
											SQLite <span className="italic">(development)</span>
										</li>
										<li>
											PostgreSQL <span className="italic">(production)</span>
										</li>
									</ul>
								</div>
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Key Features</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
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
				</article>


				{/* ------------------------------------------------- Project Card #3 */}
				<article
					className="relative w-full overflow-hidden rounded-[3rem] p-8 md:p-14 text-white shadow-2xl bg-gradient-to-br from-heather via-mulberry to-evergreen ring-4 ring-white/30 ring-offset-4 ring-offset-mulberry/60 border border-white/30 animate-drop-in"
					style={{ ['--delay']: '380ms' }}
				>
					<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_55%)]" aria-hidden />
					<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
						<div>
							<div className="border-b border-white/20 pb-6 mb-6">
								<p className="text-xs uppercase tracking-[0.35em] font-nunito text-white/70 text-center lg:text-left">
									Restaurant Experience
								</p>
								<h4 className="text-white mb-3 text-3xl md:text-4xl font-melodrama text-center lg:text-left">
									La Luna
								</h4>
								<h5 className="text-white/80 mb-6 text-sm md:text-base font-nunito text-center lg:text-left">
									<span className="font-semibold text-white">Role:</span> Sole Developer
								</h5>
								<div className="relative mx-auto max-w-3xl rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-lg">
									<div className="absolute inset-0 rounded-[1.75rem] border border-white/30 pointer-events-none" aria-hidden />
									<Image
										src="/images/laluna-screenshot.png"
										alt="La Luna website screenshot"
										width={800}
										height={450}
										className="relative rounded-[1.5rem] border border-white/15"
									/>
								</div>
								<div className="mt-6 rounded-3xl border border-white/15 bg-white/10 p-6 text-md">
									<h6 className="font-semibold text-lg text-white mb-2 mt-2">Project Description:</h6>
									<p className="text-white/80 mt-4 mb-4">
										La Luna is a website for a fictional restaurant that allows users to browse the menu,
										make reservations, and learn about the restaurant&apos;s history.
										A sophisticated restaurant website featuring an elegant design that captures
										the ambiance of fine dining. The site includes interactive menu browsing, online reservation
										system, and rich storytelling about the restaurant&apos;s heritage and culinary philosophy.
									</p>
								</div>
							</div>
						</div>
						<div className="hidden lg:block">
							<div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-sm space-y-6">
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Technology Used</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
										<li>HTML</li>
										<li>CSS</li>
										<li>JavaScript</li>
										<li>Django</li>
										<li>
											SQLite <span className="italic">(development)</span>
										</li>
										<li>
											PostgreSQL <span className="italic">(production)</span>
										</li>
									</ul>
								</div>
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Key Features</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
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

					<div className="flex justify-center gap-4 mb-4">
						<a
							href="https://github.com/maevecrossan/la-luna"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 bg-leaf 
							hover:bg-moss/80 border-2 border-leaf hover:border-white/80 
							text-white rounded-xl transition-colors duration-200"
						>
							<FontAwesomeIcon icon={faGithub} className="text-lg" />
							<span>GitHub</span>
						</a>
						<a
							href="https://la-luna-5259bef56a63.herokuapp.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 bg-heather 
							hover:bg-heather/80 text-white border-2 border-heather 
							hover:border-white/80 rounded-xl transition-colors 
							duration-200"
						>
							<FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
							<span>Live Site</span>
						</a>
					</div>

					<button
						type="button"
						onClick={() => toggleProject('laluna')}
						aria-expanded={Boolean(expandedProjects.laluna)}
						aria-controls="laluna-details"
						className="mt-8 flex items-center justify-center gap-2 rounded-full 
						border border-white/50 bg-white/10 px-5 py-3 font-nunito text-sm 
						text-white transition hover:bg-white/20 focus:outline-none 
						focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2
						ocus-visible:ring-offset-heather lg:hidden"
					>
						{expandedProjects.laluna ? 'Hide Details' : 'View Details'}
						<FontAwesomeIcon
							icon={faCaretDown}
							className={`transition-transform duration-200 ${expandedProjects.laluna ? 'rotate-180' : ''}`}
							style={{ fontSize: '0.9rem' }}
						/>
					</button>

					<div
						id="laluna-details"
						className={`overflow-hidden transition-all duration-300 ease-in-out 
							lg:hidden ${expandedProjects.laluna ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
							}`}
					>
						<div className="mt-6 border-t border-white/15 pt-6">
							<div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-sm space-y-6">
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Technology Used</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
										<li>HTML</li>
										<li>CSS</li>
										<li>JavaScript</li>
										<li>Django</li>
										<li>
											SQLite <span className="italic">(development)</span>
										</li>
										<li>
											PostgreSQL <span className="italic">(production)</span>
										</li>
									</ul>
								</div>
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Key Features</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
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
				</article>

				{/* ------------------------------------------------- Project Card #4 */}
				<article
					className="relative w-full overflow-hidden rounded-[3rem] p-8 md:p-14 text-white shadow-2xl bg-gradient-to-br from-heather via-mulberry to-evergreen ring-4 ring-white/30 ring-offset-4 ring-offset-mulberry/60 border border-white/30 animate-drop-in"
					style={{ ['--delay']: '440ms' }}
				>
					<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_55%)]" aria-hidden />
					<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
						<div>
							<div className="border-b border-white/20 pb-6 mb-6">
								<p className="text-xs uppercase tracking-[0.35em] font-nunito text-white/60 text-center lg:text-left">
									Narrative Game
								</p>
								<h4 className="text-white mb-3 text-3xl md:text-4xl font-melodrama text-center lg:text-left">
									Echoes of the Abyss
								</h4>
								<h5 className="text-white/80 mb-6 text-sm md:text-base font-nunito text-center lg:text-left">
									<span className="font-semibold text-white">Role:</span> Sole Developer
								</h5>
								<div className="relative mx-auto max-w-3xl rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-lg">
									<div className="absolute inset-0 rounded-[1.75rem] border border-white/30 pointer-events-none" aria-hidden />
									<Image
										src="/images/echoes-screenshot.png"
										alt="Echoes of the Abyss website screenshot"
										width={800}
										height={450}
										className="relative rounded-[1.5rem] border border-white/15"
									/>
								</div>
								<div className="mt-6 rounded-3xl border border-white/15 bg-white/10 p-6 text-md">
									<h6 className="font-semibold text-lg text-white mb-3">Project Description</h6>
									<p className="text-white/80 leading-relaxed">
										Echoes of the Abyss is a choose-your-own-adventure experience
										set inside a deserted research facility.
										Players traverse atmospheric environments, collecting clues and
										making choices that branch into multiple endings,
										each underscored by bespoke sound design and layered storytelling.
									</p>
								</div>
							</div>
						</div>
						<div className="hidden lg:block">
							<div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-sm space-y-6">
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Technology Used</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
										<li>HTML</li>
										<li>CSS</li>
										<li>Python</li>
										<li>JavaScript</li>
									</ul>
								</div>
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Key Features</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
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



					<div className="flex justify-center gap-4 mb-4">
						<a
							href="https://github.com/maevecrossan/echoes-of-the-abyss"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 bg-leaf 
							hover:bg-moss/80 border-2 border-leaf hover:border-white/80 
							text-white rounded-xl transition-colors duration-200"
						>
							<FontAwesomeIcon icon={faGithub} className="text-lg" />
							<span>GitHub</span>
						</a>
						<a
							href="https://echoes-of-the-abyss-8920634f42db.herokuapp.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 bg-heather 
							hover:bg-heather/80 text-white border-2 border-heather 
							hover:border-white/80 rounded-xl transition-colors duration-200"
						>
							<FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
							<span>Live Site</span>
						</a>
					</div>

					<button
						type="button"
						onClick={() => toggleProject('echoes')}
						aria-expanded={Boolean(expandedProjects.echoes)}
						aria-controls="echoes-details"
						className="mt-8 flex items-center justify-center gap-2 
						rounded-full border border-white/50 bg-white/10 px-5 py-3 
						font-nunito text-sm text-white transition hover:bg-white/20 
						focus:outline-none focus-visible:ring-2 focus-visible:ring-white 
						focus-visible:ring-offset-2 focus-visible:ring-offset-mulberry 
						lg:hidden"
					>
						{expandedProjects.echoes ? 'Hide Details' : 'View Details'}
						<FontAwesomeIcon
							icon={faCaretDown}
							className={`transition-transform duration-200 ${expandedProjects.echoes ? 'rotate-180' : ''}`}
							style={{ fontSize: '0.9rem' }}
						/>
					</button>

					<div
						id="echoes-details"
						className={`overflow-hidden transition-all duration-300 
							ease-in-out lg:hidden ${expandedProjects.echoes ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
							}`}
					>
						<div className="mt-6 border-t border-white/15 pt-6">
							<div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-sm space-y-6">
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Technology Used</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
										<li>HTML</li>
										<li>CSS</li>
										<li>Python</li>
										<li>JavaScript</li>
									</ul>
								</div>
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Key Features</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
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
				</article>

				{/* ------------------------------------------------- Project Card #5 */}
				<article
					className="relative w-full overflow-hidden rounded-[3rem] p-8 md:p-14 text-white shadow-2xl bg-gradient-to-br from-heather via-mulberry to-evergreen ring-4 ring-white/30 ring-offset-4 ring-offset-mulberry/60 border border-white/30 animate-drop-in"
					style={{ ['--delay']: '500ms' }}
				>
					<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_55%)]" aria-hidden />
					<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
						<div>
							<div className="border-b border-white/20 pb-6 mb-6">
								<p className="text-xs uppercase tracking-[0.35em] font-nunito text-white/70 text-center lg:text-left">
									Retro Mini Game
								</p>
								<h4 className="text-white mb-3 text-3xl md:text-4xl font-melodrama text-center lg:text-left">
									Byte Battles
								</h4>
								<h5 className="text-white/80 mb-6 text-sm md:text-base font-nunito text-center lg:text-left">
									<span className="font-semibold text-white">Role:</span> Sole Developer
								</h5>
								<div className="relative mx-auto max-w-3xl rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-lg">
									<div className="absolute inset-0 rounded-[1.75rem] border border-white/30 pointer-events-none" aria-hidden />
									<Image
										src="/images/byte-screenshot.png"
										alt="Byte Battles website screenshot"
										width={800}
										height={450}
										className="relative rounded-[1.5rem] border border-white/15"
									/>
								</div>
								<div className="mt-6 rounded-3xl border border-white/15 bg-white/10 p-6 text-md">
									<h6 className="font-semibold text-lg text-white mb-3">Project Description</h6>
									<p className="text-white/80 leading-relaxed">
										Byte Battles is a retro-inspired tic-tac-toe experience with
										single-player and local multiplayer modes.
										Nostalgic pixel accents meet a minimal interface to keep
										gameplay intuitive for kids, casual gamers, and anyone looking for a quick challenge.
									</p>
								</div>
							</div>
						</div>
						<div className="hidden lg:block">
							<div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-sm space-y-6">
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Technology Used</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
										<li>HTML</li>
										<li>CSS</li>
										<li>JavaScript</li>
									</ul>
								</div>
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Key Features</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
										<li>Turn-based strategic gameplay</li>
										<li>Score tracking</li>
										<li>Mobile friendly</li>
									</ul>
								</div>
							</div>
						</div>
					</div>



					<div className="flex justify-center gap-4 mb-4">
						<a
							href="https://github.com/maevecrossan/byte-battles"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 bg-leaf hover:bg-moss/80 
							border-2 border-leaf hover:border-white/80 text-white rounded-xl 
							transition-colors duration-200"
						>
							<FontAwesomeIcon icon={faGithub} className="text-lg" />
							<span>GitHub</span>
						</a>
						<a
							href="https://maevecrossan.github.io/byte-battles/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 bg-heather hover:bg-heather/80 
							text-white border-2 border-heather hover:border-white/80 rounded-xl 
							transition-colors duration-200"
						>
							<FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
							<span>Live Site</span>
						</a>
					</div>

					<button
						type="button"
						onClick={() => toggleProject('byte')}
						aria-expanded={Boolean(expandedProjects.byte)}
						aria-controls="byte-details"
						className="mt-8 flex items-center justify-center gap-2 rounded-full border border-white/50 
						bg-white/10 px-5 py-3 font-nunito text-sm text-white transition hover:bg-white/20 focus:outline-none 
						focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-heather 
						lg:hidden"
					>
						{expandedProjects.byte ? 'Hide Details' : 'View Details'}
						<FontAwesomeIcon
							icon={faCaretDown}
							className={`transition-transform duration-200 ${expandedProjects.byte ? 'rotate-180' : ''}`}
							style={{ fontSize: '0.9rem' }}
						/>
					</button>

					<div
						id="byte-details"
						className={`overflow-hidden transition-all duration-300 ease-in-out 
							lg:hidden ${expandedProjects.byte ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
							}`}
					>
						<div className="mt-6 border-t border-white/15 pt-6">
							<div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-sm space-y-6">
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Technology Used</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
										<li>HTML</li>
										<li>CSS</li>
										<li>JavaScript</li>
									</ul>
								</div>
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Key Features</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
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
				</article>

				{/* ------------------------------------------------- Project Card #6 */}
				<article
					className="relative w-full overflow-hidden rounded-[3rem] p-8 md:p-14 text-white shadow-2xl bg-gradient-to-br from-heather via-mulberry to-evergreen ring-4 ring-white/30 ring-offset-4 ring-offset-mulberry/60 border border-white/30 animate-drop-in"
					style={{ ['--delay']: '560ms' }}
				>
					<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_55%)]" aria-hidden />
					<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
						<div>
							<div className="border-b border-white/20 pb-6 mb-6">
								<p className="text-xs uppercase tracking-[0.35em] font-nunito text-white/60 text-center lg:text-left">
									Wellness Landing Page
								</p>
								<h4 className="text-white mb-3 text-3xl md:text-4xl font-melodrama text-center lg:text-left">
									Peaceful Path
								</h4>
								<h5 className="text-white/80 mb-6 text-sm md:text-base font-nunito text-center lg:text-left">
									<span className="font-semibold text-white">Role:</span> Sole Developer
								</h5>
								<div className="relative mx-auto max-w-3xl rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-lg">
									<div className="absolute inset-0 rounded-[1.75rem] border border-white/30 pointer-events-none" aria-hidden />
									<Image
										src="/images/peaceful-screenshot.png"
										alt="Peaceful Path website screenshot"
										width={800}
										height={450}
										className="relative rounded-[1.5rem] border border-white/15"
									/>
								</div>
								<div className="mt-6 rounded-3xl border border-white/15 bg-white/10 p-6 text-md">
									<h6 className="font-semibold text-lg text-white mb-3">Project Description</h6>
									<p className="text-white/80 leading-relaxed">
										Peaceful Path introduces a mindfulness programme through a
										calming single-page experience.
										Soft gradients, measured typography, and guided storytelling
										invite visitors to learn about the benefits of meditation and
										take the first step toward a calmer routine.
									</p>
								</div>
							</div>
						</div>
						<div className="hidden lg:block">
							<div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-sm space-y-6">
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Technology Used</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
										<li>HTML</li>
										<li>CSS</li>
									</ul>
								</div>
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Key Features</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
										<li>Calming and peaceful design aesthetic</li>
										<li>Introductory landing page</li>
										<li>Program information and benefits</li>
										<li>Mobile friendly</li>
									</ul>
								</div>
							</div>
						</div>
					</div>



					<div className="flex justify-center gap-4 mb-4">
						<a
							href="https://github.com/maevecrossan/peaceful-path"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 bg-leaf hover:bg-moss/80 
							border-2 border-leaf hover:border-white/80 text-white rounded-xl 
							transition-colors duration-200"
						>
							<FontAwesomeIcon icon={faGithub} className="text-lg" />
							<span>GitHub</span>
						</a>
						<a
							href="https://maevecrossan.github.io/peaceful-path/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 bg-heather hover:bg-heather/80 
							text-white border-2 border-heather hover:border-white/80 rounded-xl 
							transition-colors duration-200"
						>
							<FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
							<span>Live Site</span>
						</a>
					</div>

					<button
						type="button"
						onClick={() => toggleProject('peaceful')}
						aria-expanded={Boolean(expandedProjects.peaceful)}
						aria-controls="peaceful-details"
						className="mt-8 flex items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-5 py-3 font-nunito text-sm text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-mulberry lg:hidden"
					>
						{expandedProjects.peaceful ? 'Hide Details' : 'View Details'}
						<FontAwesomeIcon
							icon={faCaretDown}
							className={`transition-transform duration-200 ${expandedProjects.peaceful ? 'rotate-180' : ''}`}
							style={{ fontSize: '0.9rem' }}
						/>
					</button>

					<div
						id="peaceful-details"
						className={`overflow-hidden transition-all duration-300 ease-in-out 
							lg:hidden ${expandedProjects.peaceful ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
							}`}
					>
						<div className="mt-6 border-t border-white/15 pt-6">
							<div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-sm space-y-6">
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Technology Used</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
										<li>HTML</li>
										<li>CSS</li>
									</ul>
								</div>
								<div>
									<h6 className="font-semibold text-white mb-3 text-base">Key Features</h6>
									<ul className="list-disc list-inside text-white/80 space-y-2">
										<li>Calming and peaceful design aesthetic</li>
										<li>Introductory landing page</li>
										<li>Program information and benefits</li>
										<li>Mobile friendly</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</article>
			</section>
		</main>
	);
}
