import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const { data: quiz } = useLoaderData();
    console.log(quiz);

    return (
        <section className="flex p-4">
            <div className="w-3/4">
                <h1>Quiz wold</h1>
            </div>
            <div className="w-3/12">
                <h1>answer wold</h1>
            </div>
        </section>
    )
}

export default Home;