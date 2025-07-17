import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./globals.css";

export const metadata = {
    title: "My Portfolio Site",
    description: "Showcasing my work and profile",
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
