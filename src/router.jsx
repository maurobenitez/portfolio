import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "./layout/LayoutPublic";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { loader as projectLoader } from "./pages/Project";
import {loader as homeLoader} from "./pages/Home";
import Project from "./pages/Project";
const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                errorElement: <NotFound />,
                children: [
                    {
                        index: true,
                        element: <Home />,
                        loader: homeLoader,
                    },
                    {
                        path: "projects/:projectId",
                        element: <Project />,
                        loader: projectLoader,
                    }, 
                ],
            },
        ]
    },
]);

export default router;