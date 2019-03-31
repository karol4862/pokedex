import React from 'react';
import Card from '../components/Card';
import '../styles/PokeList.css';

const PokeList = (props) => {
    const {name, pokemons, select} = props.state;
    let list = [...pokemons].sort( (a, b)=> a.id - b.id);

    if(name && select) {
        list = list.filter( pokemon => {
            const value = name.toLowerCase();
            const pokeName = pokemon.name.toLowerCase();
            return pokeName.includes(value) && pokemon.types.includes(select)
        });
    }
    else if(select){
        list = list.filter(pokemon => pokemon.types.includes(select))
    }
    else if(name){
        list = list.filter( pokemon => {
            const value = name.toLowerCase();
            const pokeName = pokemon.name.toLowerCase();
            return pokeName.includes(value) 
        });
    }
    const filtredList= list.map(pokemon => <Card pokemon={pokemon} key={pokemon.id}/>)
    
    return ( 
        <div className="list">
            {filtredList}
        </div>
     );
}
 
export default PokeList;