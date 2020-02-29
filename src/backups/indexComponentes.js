import React from 'react';
import ReactDOM from 'react-dom';

// Video: https://www.youtube.com/watch?v=jKcav6seDhU&list=PLIddmSRJEJ0vEBB6ECegg35IQ-sWjSDdo&index=8

// Usando JavaScript
// const element = document.createElement('h1');
// element.innerText = 'Hola JavaScript !!!';
// const container = document.getElementById('root');
// container.appendChild(element);

// Usando React
const usuario = {
    firstName: 'Marcelo',
    lastName: 'Fourquet',
    avatar: {
        link: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/man_male_avatar_portrait-512.png',
        alt: "Avatar"
    }
}

const name = 'React';

function getName( usuario ) {
    return `${ usuario.firstName } ${ usuario.lastName }`;
}

function getGreeting( usuario, name ) {
    if ( usuario ) {
        return <h1>Hola { getName( usuario ) }, disfruta de usar { name } !!!</h1>;
    } else {
        return <h1>Hola extraño, disfruta de usar { name } !!!</h1>;
    }
}

const element = (
    <div>
        <div>
            <img src={ usuario.avatar.link }
                 alt={ usuario.avatar.alt }
                 width="50px"
                 height="50px"/>
        </div>
        <div>
            { getGreeting( usuario, name ) }
        </div>
    </div>
)
    
const container = document.getElementById('root');
ReactDOM.render(element, container);

