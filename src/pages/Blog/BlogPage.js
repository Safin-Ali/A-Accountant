import React from 'react';
import {useLoaderData} from 'react-router-dom'
import BlogSection from '../../components/blog/BlogSection';
import { Helmet } from 'react-helmet';

const BlogPage = () => {
    const fetchDT = useLoaderData();
    return (
        <>
        <Helmet>
            <title>Blog</title>
        </Helmet>
            {
                fetchDT.map(elm => <BlogSection key={elm._id} ques={elm}></BlogSection>)
            }
        </>
    );
};

export default BlogPage;