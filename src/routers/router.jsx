import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../layout/Home/Home";
import Login from "../layout/Login/Login";
import SignUp from "../layout/SignUp/SignUp";
import AboutUs from "../layout/AboutUs/AboutUs";
import Contact from "../layout/Contact/Contact";
import Services from "../layout/Services/Services";
import ErrorPage from "../layout/ErrorPage/ErrorPage";
import EstateDetail from "../layout/EstateDetail/EstateDetail";
import PrivateRoutes from "./PrivetRouter";
import Profile from "../layout/Profile/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("/data.json"),
            },
            {
                path: "/estate/:id",
                element: (
                    <PrivateRoutes>
                        <EstateDetail />
                    </PrivateRoutes>
                ),
                loader: () => fetch("/data.json"),
            },
            {
                path: "/services",
                element: (
                    <PrivateRoutes>
                        <Services />
                    </PrivateRoutes>
                ),
            },
            {
                path: "/about",
                element: <AboutUs />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/profile",
                element: (
                    <PrivateRoutes>
                        <Profile />
                    </PrivateRoutes>
                ),
            },
            {
                path: "*",
                element: <ErrorPage />,
            },
        ],
    },
]);

export default router;
