"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/previous-work", label: "Previous Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

const quickLinks = [
    { href: "https://github.com/maevecrossan", label: "GitHub", icon: faGithub },
    { href: "https://www.linkedin.com/in/maeve-crossan/", label: "LinkedIn", icon: faLinkedin },
    { href: "/MaeveCrossan.pdf", label: "Download CV", icon: faFileArrowDown, download: true },
];

export default function Navbar() {
    const pathname = usePathname();
    const isActive = (href) => pathname === href;
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="w-full">
            <div className="relative z-40 mx-auto flex w-full max-w-8xl flex-col gap-4 rounded-b-[2rem] border border-white/20 bg-white/45
            px-4 py-4 md:px-8 md:py-6 shadow-2xl ring-4 ring-white/15 ring-offset-4 ring-offset-mulberry/15 backdrop-blur-2xl">
                {/* Announcement strip */}
                <div className="hidden md:flex items-center justify-center gap-2 text-xs font-nunito uppercase tracking-[0.35em] 
                text-mulberry/80">
                    <span>Now booking collaborations for 2026</span>
                </div>

                <div className="relative flex w-full items-center justify-between gap-4">
                    {/* Burger menu */}
                    <div className="md:hidden">
                        {mobileOpen && (
                            <button
                                type="button"
                                onClick={() => setMobileOpen(false)}
                                className="fixed inset-0 z-1000 bg-black/0"
                                aria-label="Close navigation"
                            />
                        )}
                        <div className="relative z-50">
                            <button
                                type="button"
                                onClick={() => setMobileOpen((prev) => !prev)}
                                aria-expanded={mobileOpen}
                                className="btn btn-circle bg-mulberry text-white border border-white/30 hover:bg-mulberry/80"
                            >
                                <span className="sr-only">Toggle navigation</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h12" />
                                </svg>
                            </button>
                            {mobileOpen && (
                                <div className="absolute left-0 top-full mt-3 w-72 rounded-3xl border border-white/20 bg-heather/90 p-4 shadow-2xl backdrop-blur-xl">
                                    <nav className="flex flex-col gap-2">
                                        {navLinks.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className={`inline-flex items-center justify-between rounded-full px-4 py-2 font-nunito text-sm transition ${
                                                    isActive(link.href)
                                                        ? "bg-white text-mulberry font-semibold"
                                                        : "border border-white/30 bg-white/10 text-white/90 hover:bg-white/20"
                                                }`}
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </nav>
                                    <div className="mt-4 grid gap-2">
                                        {quickLinks.map((item) => (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                {...(item.download
                                                    ? { download: "MaeveCrossan.pdf" }
                                                    : { target: "_blank", rel: "noopener noreferrer" })}
                                                className="inline-flex items-center justify-center gap-2 rounded-full border 
                                                border-white/30 bg-white/10 px-4 py-2 text-sm font-nunito text-white/90 transition 
                                                hover:bg-white/20"
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                <FontAwesomeIcon icon={item.icon} className="text-base" />
                                                {item.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Logo / wordmark */}
                    <Link
                        href="/"
                        className="flex flex-col gap-1 items-center justify-center text-center mt-6
                        md:absolute md:left-1/2 md:-translate-x-1/2 md:px-12"
                    >
                        <span className="font-melodrama text-3xl md:text-5xl font-bold text-mulberry text-nowrap">Maeve Crossan</span>
                        <span className="font-nunito font-medium text-xs uppercase tracking-[0.35em] text-mulberry text-nowrap">
                            Full-Stack Developer
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-2 ml-auto pl-8">
                        {quickLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                {...(item.download
                                    ? { download: "MaeveCrossan.pdf" }
                                    : { target: "_blank", rel: "noopener noreferrer" })}
                                className="group inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 p-2 text-white/80 transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-mulberry/30"
                                aria-label={item.label}
                            >
                                <FontAwesomeIcon icon={item.icon} className="text-lg" />
                                <span className="pointer-events-none absolute bottom-0 translate-y-full rounded-full bg-white/90 px-3 
                                py-2 text-[10px] font-nunito uppercase tracking-[0.3em] text-mulberry opacity-0 shadow-lg transition 
                                group-hover:translate-y-[2rem] group-hover:opacity-100 text-center">
                                    {item.label}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Desktop nav */}
                <div className="hidden md:flex flex-wrap items-center justify-center gap-3 mt-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-nunito text-sm transition ${
                                isActive(link.href)
                                    ? "border-white bg-white text-mulberry font-semibold"
                                    : "border-white/30 bg-white/10 text-white/90 hover:bg-white/20"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
