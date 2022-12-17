import { createBrowserRouter } from "react-router-dom";
import Account from "../Component/Account/Account";
import Category from "../Component/Category/Category";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Signup from "../Component/Login/Signup";
import ManageOrder from "../Component/ManageOrder/ManageOrder";
import OrderDetails from "../Component/Orders/OrderDetails";
import Orders from "../Component/Orders/Orders";
import Main from "../Layout/Main";
import PrivateRouter from "./PrivateRouter";


const router = createBrowserRouter([

    {
        path: "/",
        element: <Main></Main> ,
        children: [
            {
                path: "/",
                element: <PrivateRouter><Home></Home></PrivateRouter>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/orders",
                element: <PrivateRouter><Orders></Orders></PrivateRouter>
            },
            {
                path: "/orders/:id",
                element: <PrivateRouter><OrderDetails></OrderDetails></PrivateRouter>,
                loader: ({params})=>fetch(`https://fakestoreapi.com/products/${params.id}`)
            },
            {
                path: "/categories",
                element: <PrivateRouter><Category></Category></PrivateRouter>
            },
            {
                path: "/manageorder",
                element: <PrivateRouter><ManageOrder></ManageOrder></PrivateRouter>
            },
            {
                path: "/account",
                element:<PrivateRouter> <Account></Account></PrivateRouter>
            }
        ]
    }
])

export default router;