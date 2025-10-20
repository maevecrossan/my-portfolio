"use client";

import Link from "next/link";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/previous-work", label: "Previous Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

const quickLinks = [
    { href: "https://github.com/maevecrossan", label: "GitHub" },
    { href: "https://www.linkedin.com/in/maeve-crossan/", label: "LinkedIn" },
    { href: "/MaeveCrossan.pdf", label: "Download CV", download: true },
];

export default function Footer() {
    return (
        <footer>
            <div className="mx-auto flex w-full max-w-8xl flex-col gap-4 rounded-t-[2rem] border border-white/20 bg-white/30
            px-4 py-4 md:px-8 md:py-6 shadow-2xl ring-4 ring-white/15 ring-offset-4 ring-offset-mulberry/15 backdrop-blur-2xl">
                <div className="text-center">
                    <p className="font-melodrama text-2xl md:text-3xl text-white/60 p-4">Let’s build something thoughtful together.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-[1fr,auto] md:items-center">
                    <nav className="flex flex-wrap justify-center gap-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="inline-flex items-center rounded-full border border-white/30 bg-white/15 px-4 py-2 font-nunito text-sm text-white/90 transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-mulberry/30"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex flex-wrap justify-center gap-3">
                        {quickLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                {...(item.download
                                    ? { download: "MaeveCrossan.pdf" }
                                    : { target: "_blank", rel: "noopener noreferrer" })}
                                className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 font-nunito text-sm text-white/80 transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-mulberry/30"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="border-t border-white/20 pt-4 text-center font-nunito text-xs uppercase tracking-[0.35em] text-white/60">
                    &copy; {new Date().getFullYear()} Maeve Crossan. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
