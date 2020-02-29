import React from 'react';
import './styles/welcome.css';

const Welcome = ({userName}) => (
    <React.Fragment>
        <div className="fitness-user-info">
            <h1>Hello <small>{userName}</small></h1>
            <hr />
            <p>Let´s workout to get someone gains!</p>
        </div>        
    </React.Fragment>
)

export default Welcome;