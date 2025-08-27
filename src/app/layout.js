import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
import { dmserif, roboto, teko, caprasimo } from "./fonts";

export const metadata = {
    title: "My Portfolio Site",
    description: "Showcasing my work and profile",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${dmserif.variable} ${roboto.variable} ${teko.variable} ${caprasimo.variable}`}>
            <body className="min-h-screen flex flex-col bg-blue-200">
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
