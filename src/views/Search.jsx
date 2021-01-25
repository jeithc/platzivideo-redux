import React from 'react';
import '../assets/styles/views/Search.scss';


let text = '¿Qué quieres ver hoy?';
let textBuscar = 'Buscar...';

const Search = () => (
    <section className="main">
        <h2 className="main__title">{text}</h2>
        <input type="text" className="input" placeholder={textBuscar}/>
    </section>

);

export default Search;


