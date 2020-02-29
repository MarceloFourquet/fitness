import React from 'react';
import Exercises from './exercises';
import Loading from '../components/loading';
import Error500 from './error_500';

class ExercisesContainer extends React.Component {

    state = {
        data: [],
        loading: true,
        error: null
    }

    async componentDidMount() {
        await this.fetchExercises()
    }

    fetchExercises = async () => {
        try {
            let resp = await fetch('http://localhost:8000/api/exercises')
            let data = await resp.json()
            this.setState({
                data,
                loading: false
            })
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }

    }

    render() {
        if (this.state.loading) {
            return <Loading />
        }
        if (this.state.error) {
            return <Error500 />
        }
        return <Exercises
            data={this.state.data} />
    }
}

export default ExercisesContainer;