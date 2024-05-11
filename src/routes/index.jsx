import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import { Suspense } from "react";
import NotFound from "../pages/NotFound";
import MasterPrice from "../pages/MasterPrice";

const routes = createBrowserRouter([
    {
        path: '/',
        element: (<App />),
        children: [
            { index: true, element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/master-price', element: <MasterPrice /> }
        ]
    },
    { path: "*", element: (<Suspense>    <NotFound />  </Suspense>), },
])
export default routes;