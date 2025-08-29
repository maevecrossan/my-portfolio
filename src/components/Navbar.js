"use client";
import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <nav className="bg-amber-50 shadow-xl">
            <div className="flex flex-col items-center px-4 py-2">
                {/* Top row: burger + logo (mobile), just logo (desktop) */}
                <div className="flex w-full items-center justify-between md:justify-center">
                    {/* Burger menu: only visible on mobile */}
                    <div className="md:hidden">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-circle bg-rose-300 text-white border border-rose-100"
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
                                className="menu menu-sm dropdown-content mt-3 z-[1] w-52 rounded-box p-2 shadow-xl uppercase font-teko font-medium text-rose-200 bg-amber-50 border border-rose-100"
                            >
                                <li>
                                    <Link
                                        href="/"
                                        className="text-2xl tracking-widest"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/previous-work"
                                        className="text-2xl tracking-widest"
                                    >
                                        Previous Work
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                        className="text-2xl tracking-widest"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="text-2xl tracking-widest"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Logo */}
                    <div className="font-caprasimo text-rose-300 flex flex-col items-center justify-center">
                        <h1 className="mx-3 mt-4 text-5xl tracking-wider text-center">
                            <Link href="/">Maeve Crossan</Link>
                        </h1>
                        <h2 className="mx-3 my-4 text-xl tracking-wider text-center font-semibold text-rose-200">
                            Full Stack Developer
                        </h2>
                    </div>

                    <div className="w-10 md:hidden" />
                </div>

                {/* Nav links: visible only on md+ screens */}
                <div className="mt-4 mb-1 hidden md:flex items-center text-xl uppercase tracking-widest font-teko whitespace-nowrap text-orange-200 font-medium">
                    <div className="flex gap-6 items-center text-orange-200">
                        {[
                            { href: "/", label: "Home" },
                            { href: "/previous-work", label: "Previous Work" },
                            { href: "/about", label: "About" },
                            { href: "/contact", label: "Contact" },
                        ].map((link, index) => (
                            <React.Fragment key={link.href}>
                                <div className="group relative w-max">
                                    <Link
                                        href={link.href}
                                        className="text-orange-200/70 hover:text-orange-300 transition-colors duration-300"
                                    >
                                        <span>{link.label}</span>
                                        <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-orange-300 transition-all duration-300 group-hover:w-3/6" />
                                        <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-orange-300 transition-all duration-300 group-hover:w-3/6" />
                                    </Link>
                                </div>
                                {index < 3 && (
                                    <span className="font-light text-orange-100">
                                        |
                                    </span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
