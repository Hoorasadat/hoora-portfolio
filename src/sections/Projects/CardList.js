import React from 'react';
import Card from './Card';


const CardList = (props) => {
    const { categories } = props;
    const cardsArray = categories.map(category => {
        return (
            <Card
                key={category.id}
                title={category.title}
                image={category.image}
            />
        );
    });
    return (
        <div>
            {cardsArray}
        </div>
    )
};

export default CardList;
