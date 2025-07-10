import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Products from "@/Pages/Products/Products";
import Product from "@/Pages/Product/Product";

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
            {
                path: '/product/:id',
                element: <Product />,
                loader: async ({ params }) => await fetch(`https://gadget-cell-server.vercel.app/products/${params.id}`)
            },
        ],
    },
]);

export default router;