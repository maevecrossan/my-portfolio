// Homepage component

import Carousel from "../components/Carousel";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Maeve Crossan - Full-Stack Developer",
    description:
        "Portfolio of Maeve Crossan, a full-stack developer with a focus on front-end development. Explore previous work and get in touch.",
};

const images = [
    {
        src: "/images/brandmark-screenshot.png",
        alt: "Brandmark Agencies screenshot",
        width: 16,
        height: 9,
    },
    {
        src: "/images/tcsp-screenshot.png",
        alt: "TCSP screenshot",
        width: 16,
        height: 9,
    },
    {
        src: "/images/laluna-screenshot.png",
        alt: "LaLuna screenshot",
        width: 16,
        height: 9,
    },
    {
        src: "/images/nomad-screenshot.png",
        alt: "Nomad screenshot",
        width: 16,
        height: 9,
    },
    {
        src: "/images/byte-screenshot.png",
        alt: "Byte screenshot",
        width: 16,
        height: 9,
    },
    {
        src: "/images/echoes-screenshot.png",
        alt: "Echoes screenshot",
        width: 16,
        height: 9,
    },
    {
        src: "/images/peaceful-screenshot.png",
        alt: "Peaceful screenshot",
        width: 16,
        height: 9,
    },
];

const services = [
    {
        title: "Content Strategy",
        description:
            "Designed roadmaps that align messaging, visuals, and experience so every touchpoint feels intentional.",
    },
    {
        title: "Product Design",
        description:
            "Pairing research with rapid prototyping to craft interfaces that feel effortless and natural to use.",
    },
    {
        title: "Frontend Development",
        description:
            "Building performant experiences in React and Next.js with an eye on accessibility and detail.",
    },
    {
        title: "Brand Systems",
        description:
            "Creating cohesive design systems that make scaling your visual identity simple and consistent.",
    },
];

export default function Homepage() {
    return (
        <main
            id="main-content"
            className="flex flex-col items-center min-h-screen w-full px-4 py-10 md:px-10 md:py-16 gap-14 bg-gradient-to-b from-mulberry/10 via-heather/5 to-leaf/10"
        >
            <section
                className="w-full max-w-5xl rounded-full bg-leaf/90 px-6 py-3 md:px-10 md:py-4 text-white shadow-xl flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-nunito uppercase tracking-[0.3em] text-xs md:text-sm animate-drop-in"
                style={{ ["--delay"]: "0ms" }}
                aria-label="announcement bar"
            >
                <span>Now booking collaborations for 2025</span>
                <span className="hidden md:inline">•</span>
                <span>Remote-friendly</span>
                <span className="hidden md:inline">•</span>
                <span>Currently focused on design-led builds</span>
            </section>

            <section
                className="w-full max-w-6xl overflow-hidden rounded-[3rem] bg-mulberry text-white shadow-2xl border border-white/30 ring-4 ring-white/30 ring-offset-4 ring-offset-mulberry/60 animate-drop-in"
                style={{ ["--delay"]: "120ms" }}
                aria-labelledby="hero-heading"
            >
                <div className="relative px-8 py-12 md:px-14 md:py-16">
                    <div className="flex flex-col gap-6 justify-center max-w-5xl">
                        <p className="text-sm tracking-[0.4em] uppercase font-nunito text-white/70">
                            Maeve Crossan · Full-stack Developer
                        </p>
                        <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-start lg:grid-cols-2 lg:items-center">
                            <h1
                                id="hero-heading"
                                className="text-4xl md:text-6xl lg:text-7xl font-melodrama"
                            >
                                Crafting digital experiences that feel
                                considered, calm, and beautifully intentional.
                            </h1>
                            <div className="relative">
                                <div
                                    className="absolute inset-0 rounded-full bg-heather/40 blur-3xl"
                                    aria-hidden
                                />
                                <div className="relative mx-auto max-w-xs md:max-w-sm lg:max-w-md">
                                    <div className="rounded-[3rem] bg-gradient-to-br from-white/30 via-white/10 to-white/0 p-4 ring-1 ring-white/50 backdrop-blur-xl">
                                        <div className="relative overflow-hidden rounded-[2.25rem] bg-white/40">
                                            <Image
                                                src="/images/headshot.jpg"
                                                alt="Maeve Crossan smiling outdoors"
                                                width={640}
                                                height={800}
                                                className="object-cover h-full w-full"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-base md:text-lg text-white/80 font-nunito leading-relaxed max-w-2xl">
                            I blend thoughtful design with robust engineering to
                            bring brands to life on the web. From product
                            strategy to polished interfaces, I partner with
                            teams to ship work that resonates.
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                href="/contact"
                                className="rounded-full bg-white text-mulberry px-6 py-3 font-nunito text-sm md:text-base shadow-lg transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-mulberry"
                            >
                                Let&apos;s build together
                            </Link>
                            <Link
                                href="/previous-work"
                                className="rounded-full border border-white/60 px-6 py-3 font-nunito text-sm md:text-base text-white/90 transition hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-mulberry"
                            >
                                View recent work
                            </Link>
                        </div>
                        {/* <dl className="grid grid-cols-2 gap-4 max-w-sm pt-2">
                            <div>
                                <dt className="text-xs uppercase tracking-[0.35em] text-white/60 font-nunito">
                                    Years experience
                                </dt>
                                <dd className="text-3xl font-melodrama">5+</dd>
                            </div>
                            <div>
                                <dt className="text-xs uppercase tracking-[0.35em] text-white/60 font-nunito">
                                    Projects launched
                                </dt>
                                <dd className="text-3xl font-melodrama">24</dd>
                            </div>
                        </dl> */}
                    </div>
                </div>
            </section>

            <section
                className="w-full max-w-5xl rounded-[2.5rem] bg-heather text-white shadow-2xl border border-white/20 ring-4 ring-white/20 ring-offset-4 ring-offset-heather/70 overflow-hidden animate-drop-in"
                style={{ ["--delay"]: "260ms" }}
                aria-labelledby="about-heading"
            >
                <div className="grid gap-10 md:grid-cols-[1.05fr,0.95fr] px-8 py-12 md:px-12 md:py-16">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.4em] font-nunito text-white/70">
                            Meet Maeve
                        </p>
                        <h2
                            id="about-heading"
                            className="text-4xl md:text-5xl font-melodrama"
                        >
                            Hey, I&apos;m Maeve!
                        </h2>
                        <p className="font-nunito text-base md:text-lg text-white/85 leading-relaxed">
                            I thrive at the intersection of creativity and
                            engineering. My background spans product design,
                            component libraries, and marketing sites that need
                            to move quickly without losing polish. I build with
                            empathy so you and your audience feel seen and supported.
                        </p>
                        <p className="font-nunito text-base md:text-lg text-white/85 leading-relaxed">
                            When I partner with founders and teams, I focus on
                            clarity, collaboration, and results. Together we can
                            transform your ideas into purposeful experiences.
                        </p>
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 font-nunito text-sm md:text-base text-white shadow-lg backdrop-blur transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-heather"
                        >
                            Learn more about me
                        </Link>
                    </div>
                    <div className="relative flex flex-col justify-end">
                        <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-lg shadow-lg">
                            <h3 className="text-2xl font-melodrama mb-4">
                                What guides my work
                            </h3>
                            <ul className="space-y-3 font-nunito text-sm md:text-base text-white/80 list-disc ml-4">
                                <li> Crafting with intention and care</li>
                                <li> Accessibility as a design superpower</li>
                                <li> Collaborative, transparent partnerships</li>
                                <li> Shipping thoughtfully and iterating fast</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="w-full max-w-6xl rounded-[2.5rem] bg-white/70 px-8 py-12 md:px-12 md:py-16 shadow-2xl border border-mulberry/10 animate-drop-in"
                style={{ ["--delay"]: "320ms" }}
                aria-labelledby="services-heading"
            >
                <div className="mx-auto max-w-3xl text-center space-y-4">
                    <p className="text-xs uppercase tracking-[0.35em] font-nunito text-mulberry/70">
                        Services I Offer
                    </p>
                    <h2
                        id="services-heading"
                        className="text-4xl md:text-5xl font-melodrama text-mulberry"
                    >
                        Tailored support for design-led teams
                    </h2>
                    <p className="font-nunito text-base md:text-lg text-mulberry/80 leading-relaxed">
                        Every partnership is unique. I create flexible
                        engagements that meet you where you are -whether you need
                        a polished MVP, a refreshed marketing site, or ongoing
                        product momentum.
                    </p>
                </div>
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {services.map((service) => (
                        <article
                            key={service.title}
                            className="group rounded-3xl border border-mulberry/15 bg-white/70 p-8 shadow-lg transition hover:-translate-y-1 hover:border-mulberry/40 hover:shadow-2xl"
                        >
                            <h3 className="text-2xl font-melodrama text-mulberry mb-3">
                                {service.title}
                            </h3>
                            <p className="font-nunito text-sm md:text-base text-mulberry/80 leading-relaxed">
                                {service.description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section
                className="w-full max-w-6xl rounded-[2.5rem] bg-mulberry px-6 py-12 md:px-12 md:py-16 text-white shadow-2xl border border-white/20 animate-drop-in"
                style={{ ["--delay"]: "380ms" }}
                aria-labelledby="work-heading"
            >
                <div className="mx-auto max-w-3xl text-center space-y-4">
                    <p className="text-xs uppercase tracking-[0.35em] font-nunito text-white/70">
                        Recent Launches
                    </p>
                    <h2
                        id="work-heading"
                        className="text-4xl md:text-5xl font-melodrama"
                    >
                        A snapshot of recent collaborations
                    </h2>
                    <p className="font-nunito text-base md:text-lg text-white/80 leading-relaxed">
                        Scroll through a selection of client work spanning brand
                        refreshes, product launches, and bespoke marketing
                        experiences.
                    </p>
                </div>
                <figure className="mt-8 md:mt-10 rounded-3xl bg-white/10 border border-white/30 p-4 backdrop-blur-xl">
                    <Carousel images={images} />
                    <figcaption className="sr-only">
                        Screenshots from recent projects.
                    </figcaption>
                </figure>
                <div className="mt-8 flex justify-center">
                    <Link
                        href="/previous-work"
                        className="rounded-full border border-white/60 px-6 py-3 font-nunito text-sm md:text-base text-white/90 transition hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-mulberry"
                    >
                        Explore the full portfolio
                    </Link>
                </div>
            </section>

            <section
                className="w-full max-w-4xl rounded-[2.5rem] bg-leaf text-white px-8 py-12 md:px-12 md:py-16 shadow-2xl border border-white/20 animate-drop-in"
                style={{ ["--delay"]: "440ms" }}
                aria-labelledby="contact-heading"
            >
                <div className="space-y-6 text-center">
                    <p className="text-xs uppercase tracking-[0.35em] font-nunito text-white/70">
                        Ready When You Are
                    </p>
                    <h2
                        id="contact-heading"
                        className="text-4xl md:text-5xl font-melodrama"
                    >
                        Let&apos;s create something memorable.
                    </h2>
                    <p className="font-nunito text-base md:text-lg text-white/85 leading-relaxed">
                        Have a project in mind or curious about how we can
                        partner? I&apos;d love to hear from you. Reach out and
                        we can start mapping the next chapter for your brand.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="mailto:maevecrossan@gmail.com"
                            className="rounded-full border border-white/60 px-6 py-3 font-nunito text-sm md:text-base text-white/90 transition hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-leaf"
                        >
                            Email me directly
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
