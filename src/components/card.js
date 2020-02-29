import React from 'react';
import img_circles from '../images/circles.png';
import NoImage from '../images/no_image.png';
import './styles/card.css';

const Card = ( { title, description, img, leftColor, rightColor } ) => (
    <React.Fragment>
        <div className="card mx-auto fitness-card"
            style={{
                backgroundImage: `
                            url(${img_circles}),
                            linear-gradient(
                                to right,
                                ${leftColor || '#799F0C'},
                                ${rightColor || '#ACBB78'}
                            )`}}>
            <div className="card-body">
                <div className="row center">
                    <div className="col-6">
                        <img src={img || NoImage} alt="Exercise" className="float-right" />
                    </div>
                    <div className="col-6 fitness-card-info">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
)


export default Card;