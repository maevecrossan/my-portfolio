"use client";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white/50 mt-8">
            <div className="flex flex-col items-center shadow-inner px-4 py-6 space-y-4">
                {/* Stacked Nav Links */}
                <div className="flex flex-col items-center space-y-2">
                    <Link href="/" className="font-teko items-center text-xl tracking-widest">Homepage</Link>
                    <Link href="/previous-work" className="font-teko items-center text-xl tracking-widest">Previous Work</Link>
                    <Link href="/about" className="font-teko items-center text-xl tracking-widest">About</Link>
                    <Link href="/contact" className="font-teko items-center text-xl tracking-widest">Contact</Link>
                </div>

                {/* Footer Note */}
                <div className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Maeve Crossan. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
