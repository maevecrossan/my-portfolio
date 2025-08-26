"use client";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-amber-50 mt-8">
            <div className="flex flex-col items-center shadow-inner px-4 py-6 space-y-4">
                {/* Stacked Nav Links */}
                <div className="flex flex-col items-center space-y-2">
                    <Link href="/" className="font-teko items-center text-xl tracking-widest text-purple-900/50 hover:text-purple-900 transition-colors duration-300">Homepage</Link>
                    <Link href="/previous-work" className="font-teko items-center text-xl tracking-widest text-purple-900/50 hover:text-purple-900 transition-colors duration-300">Previous Work</Link>
                    <Link href="/about" className="font-teko items-center text-xl tracking-widest text-purple-900/50 hover:text-purple-900 transition-colors duration-300">About</Link>
                    <Link href="/contact" className="font-teko items-center text-xl tracking-widest text-purple-900/50 hover:text-purple-900 transition-colors duration-300">Contact</Link>
                </div>

                {/* Footer Note */}
                <div className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Maeve Crossan. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
