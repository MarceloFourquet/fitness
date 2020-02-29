import React from 'react';
import ExerciseForm from '../components/exerciseForm';
import Card from '../components/card';


const ExerciseNew = ( { form, onChange, onSubmit } ) => (
    <React.Fragment>
        <div className="row">
            <div className="col-sm">
                <Card {...form} />
            </div>
            <div className="col-sm">
                <ExerciseForm
                    onSubmit={onSubmit}
                    onChange={onChange}
                    form={form}
                />
            </div>
        </div>
    </React.Fragment>
);

export default ExerciseNew;
