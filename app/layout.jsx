import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { GlobalProvider } from "@/context/GlobalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/assets/styles/globals.css";
import "photoswipe/dist/photoswipe.css";

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
            <GlobalProvider>
                <html lang="en">
                    <body>
                        <Navbar />
                        <main>{children}</main>
                        <Footer />
                        <ToastContainer />
                    </body>
                </html>
            </GlobalProvider>
        </AuthProvider>
    );
};

export default MainLayout;

