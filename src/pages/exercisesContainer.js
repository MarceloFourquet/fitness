import React from 'react';
import Exercises from './exercises';
import Loading from '../components/loading';
import Error500 from './error_500';
import useFetch from '../hooks/useFetch';
import url from '../config';

const ExercisesContainer = () => {

    const { data, loading, error } = useFetch( `${url}/exercises`);

    if (loading) {
        return (<Loading />);
    }

    if (error) {
        return (<Error500 />);
    }

    return (<Exercises data={data} />);

}

export default ExercisesContainer;