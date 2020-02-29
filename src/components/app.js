import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExercisesContainer from '../pages/exercisesContainer';
import ExerciseNewContainer from '../pages/exerciseNewContainer';
import Error_404 from '../pages/error_404';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ExercisesContainer} />
            <Route exact path="/exercise" component={ExercisesContainer} />
            <Route exact path="/exercise/new" component={ExerciseNewContainer} />
            <Route component={Error_404} />
        </Switch>
    </BrowserRouter>
);

export default App;