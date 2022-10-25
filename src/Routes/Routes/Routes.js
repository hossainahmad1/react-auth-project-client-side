import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Categories from "../../pages/Categories/Categories/Categories";
import Course from "../../pages/Course/Course";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import News from "../../pages/News/News/News";
import Register from "../../pages/Register/Register";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                path: '/categories/:id',
                element: <Categories></Categories>
            },
            {
                path: '/news/:id',
                element: <News></News>
            }
        ]
    }
])