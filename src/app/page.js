import Carousel from "../components/Carousel";
import Link from "next/link";

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
        <main className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="rounded-box m-10 p-10 bg-white dark-grey-font shadow-xl">
                <h2 className="mb-6 text-2xl font-semibold font-dmserif underline">
                    Hi there!
                </h2>
                <p>I&apos;m Maeve, nice to meet you.</p>
                <p>
                    I&apos;m a full stack developer with a special interest in front
                    end development. You can learn more about me by clicking the
                    button below.
                </p>
                <button className="btn btn-neutral rounded mt-5">
                    <Link href="/about">Learn more</Link>
                </button>
            </div>
            <div className="rounded-box p-10 bg-zinc-900 shadow-xl flex flex-col items-center">
                <h3 className="mb-6 text-2xl font-semibold font-dmserif text-center underline">
                    Previous Work
                </h3>
                <Carousel images={images} />
                <button className="btn rounded mt-5">
                    <Link href="/previous-work">View Previous Work</Link>
                </button>
            </div>
            <div className="rounded-box m-10 p-10 bg-white dark-grey-font shadow-xl">
                <h2 className="mb-6 text-2xl font-semibold font-dmserif underline">
                    Have a question?
                </h2>
                <p>
                    Do you have a question about me or my work? Have a project in mind? Reach out to me below and lets connect.
                </p>
                <button className="btn btn-neutral rounded mt-5">
                    <Link href="/contact">Get in touch</Link>
                </button>
            </div>
        </main>
    );
}
