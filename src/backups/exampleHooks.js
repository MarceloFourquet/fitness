import React, { useState } from 'react';

// Video: https://www.youtube.com/watch?v=eQf_b3_aGMw&list=PLIddmSRJEJ0vEBB6ECegg35IQ-sWjSDdo&index=31
// Utilizando clases y state
/*
class ExampleHooks extends React.Component {

    state = {
        count: 0
    }

    render () {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row mt-5 mb-5 text-center">
                        <div className="col">
                            <h3>Usted ha clickeado {this.state.count} veces</h3>
                            <hr></hr>
                            <button type="button" className="btn btn-primary"
                                onClick={ () => this.setState( { count: this.state.count + 1 } ) }>
                                Click Me!
                            </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}
*/

// Utilizando componentes funcionales y hooks

const ExampleHooks = () => {

 // const [ name, function ] = useState( value )
    const [ count, setCount ] = useState( 0 );

    return (
        <React.Fragment>
            <div className="container">
                <div className="row mt-5 mb-5 text-center">
                    <div className="col">
                        <h3>Usted ha clickeado {count} veces</h3>
                        <hr></hr>
                        <button type="button" className="btn btn-primary"
                            onClick={() => setCount(count + 1)} >
                            Click Me!
                            </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default ExampleHooks;