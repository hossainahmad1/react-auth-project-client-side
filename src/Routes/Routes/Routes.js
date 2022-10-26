import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Categories from "../../pages/Categories/Categories/Categories";
import CheckOut from "../../pages/CheckOut/CheckOut";
import Course from "../../pages/Course/Course";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import News from "../../pages/News/News/News";
import Register from "../../pages/Register/Register";
import RightSideRoute from "../../pages/RightSideRoute/RightSideRoute";
import PrivateRoute from "../../PrivateRoute/PrivateRoute/PrivateRoute";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        // path: '/',
        // element: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <Course></Course>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            {
                path: '/categories/:id',
                element: <Categories></Categories>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <News></News>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/rightsideroute',
                element: <RightSideRoute></RightSideRoute>,
                loader: () => fetch('http://localhost:5000/news')
            }
        ]
    }
])