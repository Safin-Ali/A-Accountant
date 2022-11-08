import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/form/Login';
import ReviewForm from '../components/form/ReviewForm';
import Signup from '../components/form/Signup';
import ReviewCard from '../components/review-card/ReviewCard';
import Home from '../pages/Home/Home';
import Main from '../pages/main/Main';
import Services from '../pages/services/Services';

const router = createBrowserRouter([
    // Main Page
    {path: '/', element: <Main></Main>, children:[
        {path: `/`, element:<Home></Home> }
    ]},

    // Services Page
    {path: '/services', element: <Main></Main>, children:[
        {path: `/services`, loader: async ()=> fetch(`http://localhost:5000/services`), element:<Services></Services> }
    ]},

    // Login Form
    {path:`/login`,element: <Login></Login>},

    // Signup Form
    {path:`/signup`,element: <Signup></Signup>},

    // Review Section
    {path: `/review`, element: <ReviewCard></ReviewCard>},
    {path: `/review-form`, element: <ReviewForm></ReviewForm>},
])

export default router;