import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import StartLearning from "../pages/StartLearning";
import Tutorials from "../pages/Tutorials";
import AboutUs from "../pages/AboutUs";
import ErrorElement from "../pages/ErrorElement";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivetRoute from "./PrivetRoute";
import MyProfile from "../pages/MyProfile";

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
                element: (
                    <PrivetRoute>
                        <StartLearning />
                    </PrivetRoute>
                )
            },
            {
                path: '/tutorial',
                element: (
                    <PrivetRoute>
                        <Tutorials />
                    </PrivetRoute>
                )
            },
            {
                path: '/myProfile',
                element: (
                    <PrivetRoute>
                        <MyProfile />
                    </PrivetRoute>
                )
            },
            {
                path: '/aboutUs',
                element: <AboutUs />
            },
            {
                path: '/auth',
                element: <AuthLayout />,
                children: [
                    {
                        path: '/auth/login',
                        element: <Login />
                    },
                    {
                        path: '/auth/register',
                        element: <Register />
                    }
                ]
            }
        ]
    }
]);

export default routes;
