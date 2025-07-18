import Carousel from "../components/Carousel";

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
        <main className="flex flex-col items-center justify-center min-h-screen font-roboto p-4">
            <h2 className="mb-6 text-2xl font-semibold">Home</h2>
            <Carousel images={images} />
        </main>
    );
}
