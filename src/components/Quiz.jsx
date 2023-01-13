import React from 'react'

const Quiz = ({ quiz }) => {
    const { logo, name } = quiz;

    return (
        <article className="shadow-md p-3">
            <figure>
                <img className="w-full shadow" src={logo} alt="" />
            </figure>
            <div className="flex items-center justify-between mt-4">
                <h2 className="font-semibold text-xl">{name}</h2>
                <button type="button"
                    className="bg-orange-500 m-2 text-white font-medium p-2 rounded-sm shadow-sm"
                >start quiz</button>
            </div>
        </article>
    )
}

export default Quiz;