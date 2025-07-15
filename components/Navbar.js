'use client';
import Link from 'next/link';

export default function Navbar() {
	return (
		<nav>
			<h1>Maeve Crossan</h1>
			<ul>
				<li><Link href="/">Home</Link></li>
				<li><Link href="/previous-work">Previous Work</Link></li>
				<li><Link href="/about">About Me</Link></li>
				<li><Link href="/contact">Contact</Link></li>
			</ul>
		</nav>
	);
}
