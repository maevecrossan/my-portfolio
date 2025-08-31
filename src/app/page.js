import Carousel from "../components/Carousel";
import Link from "next/link";

export const metadata = {
    title: "Maeve Crossan — Full-Stack Developer",
    description:
        "Portfolio of Maeve Crossan, a full-stack developer with a focus on front-end development. Explore previous work and get in touch.",
};

const images = [
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
        src: "/images/peaceful-screenshot.png",
        alt: "Peaceful screenshot",
        width: 16,
        height: 9,
    },
];

export default function Homepage() {
    return (
        <>
            <main
                id="main-content"
                className="flex flex-col items-center min-h-screen w-full p-6 md:p-10"
            >
                
            {/* Greeting */}
            <section
                className="m-6 md:m-10 w-full max-w-3xl rounded-3xl p-8 md:p-10 bg-rose-100 backdrop-blur-xl border border-white/40 ring-4 ring-white ring-offset-2 ring-offset-rose-300 shadow-xl text-zinc-800"
                aria-labelledby="intro-heading"
            >
                <h2 id="intro-heading" className="mb-6 text-3xl md:text-4xl font-caprasimo text-rose-400">
                    Hello!
                </h2>
                <p className="text-zinc-700/90">I&apos;m Maeve, nice to meet you.</p>
                <p className="text-zinc-700/90">
                    I&apos;m a full-stack developer with a special interest in front-end development. You can learn more about me by clicking the button below.
                </p>
                <Link
                    href="/about"
                    className="btn font-dmserif mt-6 rounded-xl bg-rose-400 text-white shadow-md hover:bg-rose-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-200 border border-rose-100"
                >
                    Learn more
                </Link>
            </section>

            {/* Previous Work */}
            <section
                className="w-full max-w-5xl mx-auto px-4 py-10 md:py-14 rounded-3xl bg-white backdrop-blur-xl border border-white/40 ring-3 ring-white ring-offset-2 ring-offset-rose-300 shadow-xl text-zinc-800 flex flex-col items-center"
                aria-labelledby="work-heading"
            >
                <h2 id="work-heading" className="mb-6 text-3xl md:text-4xl font-caprasimo text-rose-400 text-center">
                    Previous Work Preview
                </h2>
                <figure aria-labelledby="work-heading" role="group" className="w-full rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 ring-3 ring-white/50 p-4">
                    <Carousel images={images} />
                    <figcaption className="sr-only">Screenshots from recent projects.</figcaption>
                </figure>
                <Link
                    href="/previous-work"
                    className="btn font-dmserif mt-6 rounded-xl bg-rose-100/90 text-rose-400 shadow-md hover:bg-rose-200 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-200 border border-rose-100"
                >
                    View my previous work
                </Link>
            </section>

            {/* Contact Me */}
            <section
                className="m-6 md:m-10 w-full max-w-3xl rounded-3xl p-8 md:p-10 bg-rose-100 backdrop-blur-xl border border-white/40 ring-3 ring-white ring-offset-2 ring-offset-rose-300 shadow-xl text-zinc-800"
                aria-labelledby="contact-heading"
            >
                <h2 id="contact-heading" className="mb-6 text-3xl md:text-4xl font-caprasimo text-rose-400">
                    Have a question?
                </h2>
                <p className="text-zinc-700/90">
                    Do you have a question about me or my work? Have a project in mind? Reach out to me below and let&apos;s connect.
                </p>
                <Link
                    href="/contact"
                    className="btn font-dmserif mt-6 rounded-xl bg-rose-400 text-white shadow-md hover:bg-rose-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-200 border border-rose-100"
                >
                    Contact me
                </Link>
            </section>
            </main>
        </>
    );
}
