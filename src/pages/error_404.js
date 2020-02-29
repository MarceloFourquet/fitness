import React from 'react';
import Error404Img from '../images/404.png'

const Error404 = () => (
    <React.Fragment>
        <div className="container">
            <div className="row mt-5">
                <div className="col">
                    <h2>Error <small>404</small></h2>
                    <h4>Página no encontrada</h4>
                    <hr />
                    <div className="text-center">
                        <img src={Error404Img} alt="Error 404"></img>
                    </div>                
                </div>
            </div>
        </div>        
    </React.Fragment>
);

export default Error404;