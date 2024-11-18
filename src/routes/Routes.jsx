import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import StartLearning from "../pages/StartLearning";
import Tutorials from "../pages/Tutorials";
import AboutUs from "../pages/AboutUs";
import ErrorElement from "../pages/ErrorElement";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/startLearning',
                element: <StartLearning />
            },
            {
                path: '/tutorial',
                element: <Tutorials />
            },
            {
                path: '/aboutUs',
                element: <AboutUs />
            }
        ]
    }
]);

export default routes;
