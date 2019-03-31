import React from 'react';

const TypesList = (props) => {
    let style = null;
    const types = props.types.map( type => {
        switch (type) {
            case "poison":
              style = {backgroundColor:"violet"}
              break;
            case "fire":
              style = {backgroundColor: 'red'}
              break;
            case "grass":
              style = {backgroundColor: 'greenyellow'}
              break;
            case "water":
              style = {backgroundColor: 'cyan'}
              break;
            case "bug":
              style = {backgroundColor: 'rgb(115, 189, 3)'}
              break;
            case "normal":
              style = {backgroundColor: 'rgb(180, 180, 180)'}
              break;
            case "flying":
              style = {backgroundColor: 'rgb(0, 160, 255)'}
              break;
            case "ground":
              style = {backgroundColor: 'rgb(200, 80, 50)'}
              break;
            case "electric":
              style = {backgroundColor: 'yellow'}
              break;
            case "fairy":
              style = {backgroundColor: 'pink'}
              break;
            default:
              style = null;
          }
          return( <span style={style} key={type}>{type}</span>)
    })
    return ( 
        <div className="types">
            {types}
        </div>
    );
}
 
export default TypesList;