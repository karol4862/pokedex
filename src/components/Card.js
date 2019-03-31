import React from 'react';
import '../styles/Card.css';
import TypesList from '../components/TypesList';

const Card = (props) => {
    return ( 
        <div className="card">
            <h3>{props.pokemon.name[0].toUpperCase()}{props.pokemon.name.slice(1)}</h3>
            <img src={props.pokemon.img} alt={props.pokemon.name}/>
            <TypesList types = {props.pokemon.types}/>
        </div>
    );
}
 
export default Card;