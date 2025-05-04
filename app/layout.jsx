import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
    title: "Next Property",
    keywords:
        "rental, property, real estate, buy home, sell home, rent home, buy land, sell land, rent land, buy room, sell room, rent room",
    description:
        "Next Property is a real estate platform that allows users to buy and sell properties, as well as rent properties.",
};

const MainLayout = ({ children }) => {
    return (
        <AuthProvider>
            <html>
                <body>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </body>
            </html>
        </AuthProvider>
    );
};

export default MainLayout;
