"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-100">
            <div className="flex flex-col items-center bg-base-100 shadow-sm px-4 py-2">
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
                                    <Link href="/">Homepage</Link>
                                </li>
                                <li>
                                    <Link href="/previous-work">Previous Work</Link>
                                </li>
                                <li>
                                    <Link href="/about">About</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Logo */}
                    <div>
                        <h1>
                            <Link href="/" className="text-xl">
                                Maeve Crossan
                            </Link>
                        </h1>
                    </div>
                </div>

                {/* Nav links: visible only on md+ screens */}
                <div className="mt-2 hidden md:flex space-x-4">
                    <Link href="/" className="btn btn-ghost">
                        Homepage
                    </Link>
                    <Link href="/previous-work" className="btn btn-ghost">
                        Previous Work
                    </Link>
                    <Link href="/about" className="btn btn-ghost">
                        About
                    </Link>
                    <Link href="/contact" className="btn btn-ghost">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
