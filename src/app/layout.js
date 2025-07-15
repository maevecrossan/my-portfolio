import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

export const metadata = {
	title: 'My Portfolio Site',
	description: 'Showcasing my work and profile',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
		<body>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</body>
		</html>
	);
}
