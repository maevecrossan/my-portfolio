'use client';
import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className="bg-gray-100">
			<h1 className="flex text-center"> Maeve Crossan </h1>
			{/* Desktop Nav */}
			<ul className="flex gap-4 list-none p-4">
				<li><Link href="/" className="hover:underline">Home</Link></li>
				<li><Link href="/previous-work" className="hover:underline">Previous Work</Link></li>
				<li><Link href="/about" className="hover:underline">About Me</Link></li>
				<li><Link href="/contact" className="hover:underline">Contact</Link></li>
			</ul>

			{/* Burger Nav */}
			{/* <ul className="flexbox list-none p-4">
				<li><Link href="/" className="hover:underline">Home</Link></li>
				<li><Link href="/previous-work" className="hover:underline">Previous Work</Link></li>
				<li><Link href="/about" className="hover:underline">About Me</Link></li>
				<li><Link href="/contact" className="hover:underline">Contact</Link></li>
			</ul> */}
		</nav>
	);
}
