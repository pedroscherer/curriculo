import React from 'react';
import './index.css';

export default function Card({name, idade, children}) {
    const paragrafo = <p>Pellentesque in isum id orci porta dapibus</p>;
    const frutas = ['Laranja', 'Morango', 'Uva'];
    const lista = [];

    for(let fruta of frutas) {
        lista.push(<li key={fruta}> { fruta } </li>);
    }

    return (
        <React.Fragment>
            <h1 className="bg-black">
            Olá mundo, { name } - { idade }
            </h1>
            { paragrafo }
            <ul>
                { lista }
            </ul>
            {
                idade >= 18 ? <h2>Maior de idade</h2> : null
            }
            { children }
        </React.Fragment>
    );
}