import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import OrderDetails from "../Component/Orders/OrderDetails";
import Orders from "../Component/Orders/Orders";
import Main from "../Layout/Main";


const router = createBrowserRouter([

    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/orders",
                element: <Orders></Orders>
            },
            {
                path: "/orders/:id",
                element: <OrderDetails></OrderDetails>,
                loader: ({params})=>fetch(`https://fakestoreapi.com/products/${params.id}`)
            }
        ]
    }
])

export default router;