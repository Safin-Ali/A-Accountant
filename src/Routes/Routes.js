import { async } from '@firebase/util';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AddServices from '../components/form/AddServices';
import Login from '../components/form/Login';
import Signup from '../components/form/Signup';
import BlogPage from '../pages/Blog/BlogPage';
import Home from '../pages/Home/Home';
import Main from '../pages/main/Main';
import MyReviewed from '../pages/my-review/MyReviewed';
import PrivatePage from '../pages/private/PrivatePage';
import Service from '../pages/services/Service';
import Services from '../pages/services/Services';

const router = createBrowserRouter([
    // Main Page
    {path: '/', element: <Main></Main>, children:[
        {path: `/`, loader: async()=>fetch('https://a-accountant.vercel.app/services'), element:<Home></Home> },

         // Services Page
        {path: `/services`, loader: async ()=> fetch(`https://a-accountant.vercel.app/services`), element:<Services></Services> },

        // Service Page With ID
        {path: `/services/:id`, element:<Service></Service> },

        // My Reviews Page
        {path: `/my-review`, element:<PrivatePage><MyReviewed></MyReviewed></PrivatePage> },

        // Blog Page
        {path: `/blog`, loader:async()=> fetch('https://a-accountant.vercel.app/blog'), element:<BlogPage></BlogPage> },

        // Add Services Page
        {path: `/add-service`, element:<PrivatePage><AddServices></AddServices></PrivatePage> },
    ]},

    // Login Form
    {path:`/login`,element: <Login></Login>},

    // Signup Form
    {path:`/signup`,element: <Signup></Signup>},
])

export default router;