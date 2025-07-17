import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./globals.css";
import { DM_Serif_Text, Teko } from "next/font/google";

export const metadata = {
    title: "My Portfolio Site",
    description: "Showcasing my work and profile",
};

const dmserif = DM_Serif_Text({
    subsets: ["latin"],
    weight: "400",
});

const teko = Teko({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col">
                <Navbar dmserif={dmserif.className} teko={teko.className} />
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
