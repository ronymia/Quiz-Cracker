import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizWorld = () => {
    const { data } = useLoaderData();
    console.log(data.questions)
    return (
        <section className="flex p-4">
            <div className="w-9/12">
                <h1>Question</h1>
            </div>
            <div className="w-1/4">
                <h1>Answer</h1>
            </div>
        </section>
    )
}

export default QuizWorld;