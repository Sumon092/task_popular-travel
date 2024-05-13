import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Suspense } from "react";
import NotFound from "../pages/NotFound";
import MasterPrice from "../pages/MasterPrice";
import CustomPrice from "../pages/CustomPrice";
import Home from "../pages/Home";

const routes = createBrowserRouter([
    {
        path: '/',
        element: (<App />),
        children: [
            { index: true, element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/master-price', element: <MasterPrice /> },
            { path: '/custom-price', element: <CustomPrice /> },
        ]
    },
    { path: "*", element: (<Suspense>    <NotFound />  </Suspense>), },
])
export default routes;