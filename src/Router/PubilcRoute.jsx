import { createBrowserRouter } from "react-router";
import AboutPage from "../Pages/AboutPage/AboutPage";
import PublicLayout from "../Layouts/PublicLayout";
import Home from "../Pages/Home/Home";
import ContactPage from "../Pages/ContactPage/ContactPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "/contact",
                element: <ContactPage />
            }
        ]
    }
]);

export default routes;
