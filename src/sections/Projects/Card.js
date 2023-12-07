import React from 'react';
import styles from './Projects.module.scss'

const Card = (props) => {
    const { title, image } = props;
    const photo = require(`${image}`);

    return (
        <div className="text-center d-inline-block rounded-3 p-3 m-2 border-2 shadow-lg hover-grow">
            <span className={styles.projectWrapper__text_title}>{`${title} Projects`}</span>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <img
                            src={photo}
                            alt="Unknown"
                            className=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
