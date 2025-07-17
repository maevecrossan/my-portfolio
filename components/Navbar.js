"use client";
import Link from "next/link";
import { Teko } from "next/font/google";

const teko = Teko({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export default function Navbar({ dmserif, teko }) {
    return (
        <nav className="bg-raisin-black">
            <div className="flex flex-col items-center shadow-sm px-4 py-2">
                {/* Top row: burger + logo (mobile), just logo (desktop) */}
                <div className="flex w-full items-center justify-between md:justify-center">
                    {/* Burger menu: only visible on mobile */}
                    <div className="md:hidden">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h7"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
                            >
                                <li>
                                    <Link
                                        href="/"
                                        className="text-base uppercase"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/previous-work"
                                        className="text-base uppercase"
                                    >
                                        Previous Work
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                        className="text-base uppercase"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="text-base uppercase"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Logo */}
                    <div>
                        <h1 className="mx-3 mt-4 text-5xl tracking-wider font-serif">
                            <Link href="/">Maeve Crossan</Link>
                        </h1>
                        <p className="mx-3 mt-4 text-xl tracking-wider text-center font-serif">
                            <Link href="/">Full Stack Developer</Link>
                        </p>
                    </div>

                    <div className="w-10 md:hidden" />
                </div>

                {/* Nav links: visible only on md+ screens */}
                <div className="mt-4 mb-1 hidden md:flex items-center text-lg uppercase">
                    <Link
                        href="/"
                        className={`px-5 hidden md:flex items-center text-lg uppercase ${teko}`}
                    >
                        Home
                    </Link>
                    <span className={`font-light ${teko}`}>|</span>
                    <Link
                        href="/previous-work"
                        className={`px-5 hidden md:flex items-center text-lg uppercase ${teko}`}
                    >
                        Previous Work
                    </Link>
                    <span className={`font-light ${teko}`}>|</span>
                    <Link
                        href="/about"
                        className={`px-5 hidden md:flex items-center text-lg uppercase ${teko}`}
                    >
                        About
                    </Link>
                    <span className={`font-light ${teko}`}>|</span>
                    <Link
                        href="/contact"
                        className={`px-5 hidden md:flex items-center space-x-2 text-lg uppercase ${teko}`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
