import React from 'react';

const BlogSection = ({ques}) => {
    const {question,answ} = ques;
    return (
        <div className={`mx-[10%] p-10 text-center my-5 border rounded-lg drop-shadow`}>
            <h3 className={`my-3 font-bold`}>{question}</h3>
            <p className={`my-3 font-semibold`}>{answ}</p>
        </div>
    );
};

export default BlogSection;