"use client";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-ny-pink mt-8">
            <div className="flex flex-col items-center shadow-inner px-4 py-6 bg-zinc-900 space-y-4">
                {/* Stacked Nav Links */}
                <div className="flex flex-col items-center space-y-2">
                    <Link href="/" className="btn btn-ghost btn-sm">Homepage</Link>
                    <Link href="/previous-work" className="btn btn-ghost btn-sm">Previous Work</Link>
                    <Link href="/about" className="btn btn-ghost btn-sm">About</Link>
                    <Link href="/contact" className="btn btn-ghost btn-sm">Contact</Link>
                </div>

                {/* Footer Note */}
                <div className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Maeve Crossan. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
