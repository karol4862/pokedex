import React from 'react';
import '../styles/Filter.css';

const Filter = (props) => {
    return ( 
        <div className="filter">
            <h2>Find your Pokemon</h2>
            <label htmlFor="name">
                Name: 
                <input type="text" id="name" onChange={props.handle} name="text"/>
            </label>
            
            <label htmlFor="select">
                Type:
                <select onChange={props.handle} id="select" name="select">
                    <option value="">All</option>
                    <option value="poison">Poison</option>
                    <option value="fire">Fire</option>
                    <option value="grass">Grass</option>
                    <option value="water">Water</option>
                    <option value="bug">Bug</option>
                    <option value="normal">Normal</option>
                    <option value="flying">Flying</option>
                    <option value="ground">Ground</option>
                    <option value="electric">Electric</option>
                    <option value="fairy">Fairy</option>
                </select>
             </label>
        </div>
     );
}
 
export default Filter;