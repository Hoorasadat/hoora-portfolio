import React from 'react';
import CardList from './CardList';
import classNames from 'classnames';
import styles from './Projects.module.scss';

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
        <section className = {classNames("text-center", styles.projects)}>
            <div className="container">
                <div className={styles.projectWrapper}>
                    <h2 className="sectionTitle">Portfolio</h2>
                    <CardList categories={categories}/>
                </div>
            </div>
        </section>
    );
}

export default App;

