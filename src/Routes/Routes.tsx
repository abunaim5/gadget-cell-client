import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Products from "@/Pages/Products/Products";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        // errorElement:
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/products',
                element: <Products />
            },
        ],
    },
]);

export default router;