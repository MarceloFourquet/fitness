import React from 'react';
import Error500Img from '../images/500.png'

const Error500 = () => (
    <React.Fragment>
        <div className="container">
            <div className="row mt-5">
                <div className="col">
                    <h2>Error <small>500</small></h2>
                    <h4>Error inesperado</h4>
                    <hr />
                    <div className="text-center">
                        <img src={Error500Img} alt="Error 500"></img>
                    </div>
                </div>
            </div>
        </div>        
    </React.Fragment>
);

export default Error500;