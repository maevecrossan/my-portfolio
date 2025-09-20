"use client";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-moss shadow-inner">
            <div className="flex flex-col items-center px-4 py-6 space-y-4">
                {/* Stacked Nav Links */}
                <div className="flex flex-col items-center space-y-2 mt-4">
                    <Link href="/" className="font-nunito items-center text-xl tracking-widest text-white/50 hover:text-white transition-colors duration-300">Homepage</Link>
                    <Link href="/previous-work" className="font-nunito items-center text-xl tracking-widest text-white/50 hover:text-white transition-colors duration-300">Previous Work</Link>
                    <Link href="/about" className="font-nunito items-center text-xl tracking-widest text-white/50 hover:text-white transition-colors duration-300">About</Link>
                    <Link href="/contact" className="font-nunito items-center text-xl tracking-widest text-white/50 hover:text-white transition-colors duration-300">Contact</Link>
                </div>

                {/* Footer Note */}
                <div className="text-sm text-white/70">
                    &copy; {new Date().getFullYear()} Maeve Crossan. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
