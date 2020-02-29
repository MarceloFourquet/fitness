import React from 'react';
import ExerciseNew from './exerciseNew';
import Error500 from './error_500';
import Loading from '../components/loading';
import url from '../config';

class ExerciseNewContainer extends React.Component {

    state = {
        form: {
            title: "",
            description: "",
            img: "",
            leftColor: "",
            rightColor: ""
        },
        loading: false,
        error: null
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }

            let resp = await fetch( `${url}/exercises`, config);
            let jsonResp = await resp.json();
            console.log(jsonResp);

            this.setState({
                loading: false
            })

            this.props.history.push('/exercise');

        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    }

    render() {
        if (this.state.loading){
            return <Loading />
        }
        if (this.state.error) {
            return <Error500 />
        }

        return <ExerciseNew
            form={this.state.form}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit} />
    };

}

export default ExerciseNewContainer;