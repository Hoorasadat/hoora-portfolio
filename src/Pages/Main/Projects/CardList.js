import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import styles from './CardList.module.scss';



const CardList = (props) => {
    const { categories } = props;
    const cardsArray = categories.map(category => {
        const photo = require (`${category.image}`);
        return (
            <Card
                key={category.id}
                className={classNames(styles.card, "d-flex justify-content-center mb-5 p-4")}
            >
                <Link to={`/${category.linkTo}`}>
                    <img
                        src={photo}
                        alt="Nothing available"
                        className={classNames(styles.img, "mt-5 border border-dark")}
                    />
                    <div className="card-body">
                        <p className={classNames(styles.title, "pt-3 text-white font-weight-bold")}>{`${category.title} Projects`}</p>
                    </div>
                </Link>
            </Card>
        );
    });
    return (
        <div className="d-flex flex-column align-items-center">
            {cardsArray}
        </div>
    )
};

export default CardList;
