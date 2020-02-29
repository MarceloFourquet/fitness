import React from 'react';
import Welcome from '../components/welcome';
import ExerciseList from '../components/exerciseList';
import AddButton from '../components/addButton';

const Exercises = ( { data } ) => (
    <React.Fragment>
        <div className="container mt-5 mb-5 text-center">
            <div className="row ">
                <div className="col">
                    <Welcome userName='Marcelo' />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ExerciseList exercises={ data } />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <AddButton />
                </div>
            </div>
        </div>
    </React.Fragment>
);

export default Exercises;