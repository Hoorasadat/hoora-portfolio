import React from 'react';

const Card = (props) => {
    const { title, image } = props;
    const photo = require (`${image}`);
    return (
        <div className="text-center d-inline-block rounded-3 p-3 m-2 grow border-2 shadow-lg">
            <div className="hover-grow">
                <h2>{`${title} Projects`}</h2>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-5 mw-100">
                        <img
                            src={photo}
                            alt="Unknown"
                            className="mw5"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Card;
