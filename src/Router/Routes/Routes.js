import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import AddService from "../../pages/AddService/AddService";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyReviews from "../../pages/MyReviews/MyReviews";
import Register from "../../pages/Register/Register";
import AllServices from "../../pages/Services/AllServices/AllServices";
import ServiceDetails from "../../pages/Services/ServiceDetails/ServiceDetails";
import UpdateReview from "../../pages/Services/ServiceDetails/UpdateReview";
import Services from "../../pages/Services/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
                path: '/register',
                element: <Register></Register>
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
                loader: ({ params }) => fetch(`https://foto-hunter-server.vercel.app/service/${params.id}`)
            },
            {
                path: '/review/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://foto-hunter-server.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <h2 className='text-5xl dark:text-white text-center my-48'> 404 error!! This route is not found.</h2>
            }
        ]
    }
]);

export default router;