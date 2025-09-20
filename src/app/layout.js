import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
import { nunito, melodrama } from "./fonts";

export const metadata = {
    title: "Maeve Crossan - Full-Stack Developer",
    description: "Portfolio of Maeve Crossan, a full-stack developer with a focus on front-end development. Explore previous work and get in touch.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${nunito.variable} ${melodrama.variable}`}>
            <body className={`${nunito.className} min-h-screen flex flex-col bg-evergreen`}>
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
