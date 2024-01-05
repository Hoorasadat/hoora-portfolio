import React from 'react';
import CardList from './CardList';
import classNames from 'classnames';
import styles from './Projects.module.scss';

function App() {
    const categories = [
        {
            id: 1,
            title: "C# - .Net",
            image: "./images/dotnet.jpeg",
            linkTo: "dotnet"
        },
        {
            id: 2,
            title: "React/ Node",
            image: "./images/react.png",
            linkTo: "react"
        },
        {
            id: 3,
            title: "HTML - CSS - JS",
            image: "./images/htmlCssJs.png",
            linkTo: "htmlcss"
        }
    ];

    return(
        <section id="projects" className = {classNames(styles.projects)}>
            <div className="container">
                <div className={styles.projectWrapper}>
                    <h1 className="sectionTitle">Projects</h1>
                    <CardList categories={categories}/>
                </div>
            </div>
        </section>
    );
}

export default App;

