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
            <div className="rounded-box m-10 p-10 bg-white/50 text-zinc-800 shadow-xl">
                <h3 className="text-gray-700 mb-6 text-3xl font-semibold font-dmserif ">
                    Hi there!
                </h3>
                <p className="text-gray-700">I&apos;m Maeve, nice to meet you.</p>
                <p className="text-gray-700">
                    I&apos;m a full stack developer with a special interest in front
                    end development. You can learn more about me by clicking the
                    button below.
                </p>
                <button className="btn bg-pink-700 hover:bg-pink-800 text-white rounded-xl mt-5">
                    <Link href="/about">Learn more</Link>
                </button>
            </div>

            <div className="rounded-box w-full max-w-screen-lg mx-auto px-4 py-10 bg-white/50 shadow-xl 
            text-zinc-800 flex flex-col items-center">
                <h4 className="text-gray-700 mb-6 text-3xl font-semibold font-dmserif text-center ">
                    Previous Work
                </h4>
                <Carousel images={images} />
                <button className="btn bg-pink-700 hover:bg-pink-800 text-white rounded-xl mt-5">
                    <Link href="/previous-work">View Previous Work</Link>
                </button>
            </div>

            <div className="rounded-box m-10 p-10 bg-white/50 text-zinc-800 shadow-xl">
                <h4 className="text-gray-700 mb-6 text-3xl font-semibold font-dmserif  ">
                    Have a question?
                </h4>
                <p className="text-gray-700">
                    Do you have a question about me or my work? Have a project in mind? Reach out to me below and lets connect.
                </p>
                <button className="btn bg-pink-700 hover:bg-pink-800 text-white rounded-xl mt-5">
                    <Link href="/contact">Get in touch</Link>
                </button>
            </div>
        </main>
    );
}
