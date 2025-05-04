import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Next Property",
    keywords:
        "rental, property, real estate, buy home, sell home, rent home, buy land, sell land, rent land, buy room, sell room, rent room",
    description:
        "Next Property is a real estate platform that allows users to buy and sell properties, as well as rent properties.",
};

const MainLayout = ({ children }) => {
    return (
        <html>
            <body>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
};

export default MainLayout;
