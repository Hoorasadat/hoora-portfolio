import React, { useState } from 'react';
import CardList from './CardList';
import Scroll from './Scroll';

function App() {
    const categories = [
        {
            id: 1,
            title: ".Net",
            image: "./images/asp.jpeg"
        },
        {
            id: 2,
            title: "React",
            image: "./images/react.png"
        },
        {
            id: 3,
            title: "HTML/CSS/JS",
            image: "./images/htmlCssJs.png"
        }
    ];

    return(
        <div className = "text-center">
            <h1 className='f2'>Portfolio</h1>
            <Scroll>
                <CardList categories={categories}/>
            </Scroll>
        </div>
    );
}

export default App;
