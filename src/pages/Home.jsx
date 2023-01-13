import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../components/Quiz';

const Home = () => {
    const { data } = useLoaderData();

    return (
        <section className="flex p-4">
            <div className="w-3/4 grid grid-cols-3 gap-6">
                {
                    data.map(quiz => <Quiz key={quiz.id} quiz={quiz} />)
                }
            </div>
            <div className="w-3/12">
                <h1>answer wold</h1>
            </div>
        </section>
    )
}

export default Home;