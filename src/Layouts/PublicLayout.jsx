import DesktopNav from "../components/DesktopNav/DesktopNav";
import FooterSection from "../components/FooterSection/FooterSection";
import MobileNav from "../components/MobileNav/MobileNav";
import { Outlet } from "react-router";

const PublicLayout = () => {
    return (
        <>
            <DesktopNav />
            <MobileNav />
            <Outlet />
            <FooterSection />
        </>
    );
};
export default PublicLayout;