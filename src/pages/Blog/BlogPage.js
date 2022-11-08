import React from 'react';
import {useLoaderData} from 'react-router-dom'
import BlogSection from '../../components/blog/BlogSection';

const BlogPage = () => {
    const fetchDT = useLoaderData();
    return (
        <>
            {
                fetchDT.map(elm => <BlogSection key={elm._id} ques={elm}></BlogSection>)
            }
        </>
    );
};

export default BlogPage;