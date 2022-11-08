import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import AllServices from "../../pages/Services/AllServices/AllServices";
import ServiceDetails from "../../pages/Services/ServiceDetails/ServiceDetails";
import Services from "../../pages/Services/Services/Services";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            }
        ]
    }
]);

export default router;