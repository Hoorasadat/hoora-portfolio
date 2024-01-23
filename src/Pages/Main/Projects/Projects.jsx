import React from 'react';
import CategoriesList from './Categories/CategoriesList';
import classNames from 'classnames';
import styles from './Projects.module.scss';
import dotnetImage from './images/dotnet.jpeg';
import reactImage from './images/react.png';
import htmlImage from './images/htmlCssJs.png';

function App() {
    const categories = [
        {
            id: 1,
            title: "C# - .Net",
            image: dotnetImage,
            linkTo: "csharp-dotnet"
        },
        {
            id: 2,
            title: "React/ Node",
            image: reactImage,
            linkTo: "react-node"
        },
        {
            id: 3,
            title: "HTML - CSS - JS",
            image: htmlImage,
            linkTo: "html-css-js"
        }
    ];

    return(
        <section id="projects" className = {classNames(styles.projects)}>
            <div className="container">
                <div className={styles.projectWrapper}>
                    <h1 className="sectionTitle">Projects</h1>
                    <CategoriesList categories={categories}/>
                </div>
            </div>
        </section>
    );
}

export default App;

