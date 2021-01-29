import React from 'react';
import classNames from 'classnames'
import '../assets/styles/views/Search.scss';


let text = '¿Qué quieres ver hoy?';
let textBuscar = 'Buscar...';

const Search = ({isHome}) => {
    const inputStyle = classNames('input',{
        isHome
    })
    return(
    <section className="main">
        <h2 className="main__title">{text}</h2>
        <input type="text" className={inputStyle} placeholder={textBuscar}/>
    </section>
    )
};

export default Search;


