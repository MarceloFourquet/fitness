import React from 'react';
import { Link } from 'react-router-dom';
import ButtonImage from '../images/add.png';
import './styles/addButton.css';

const AddButton = () => (
    <React.Fragment>
        <Link className="fitness-add" to="/exercise/new">
            <img src={ButtonImage} alt="Button" />
        </Link>        
    </React.Fragment>
)

export default AddButton;