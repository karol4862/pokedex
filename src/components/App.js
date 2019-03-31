import React, { Component } from 'react';
import '../styles/App.css';
import PokeList from '../layouts/PokeList';
import Filter from '../layouts/Filter';
//http://www.serebii.net/pokemongo/pokemon/001.png
class App extends Component {
  state = {
    name: '',
    select: '',
    pokemons: []
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=51")
      .then(response => response.json())
      .then(response => response.results)
      .then(response => response.map(item => {
        fetch(item.url)
          .then(response => response.json())
          .then(response => {
            return({
              name: response.name,
              img: response.sprites.front_default,
              types: response.types.map(type => type.type.name),
              id: response.id
            })
          })
          .then(response => this.setState((prevState)=> ({
            pokemons: prevState.pokemons.concat(response)
          })))
      return null}))
  }

  handleChange = (e)=> {
    if(e.target.name==="text") {
      this.setState({
        name: e.target.value
      })
    }
    else{
      this.setState({
        select: e.target.value
      })
    }
  }
  render() {
    return (
        <div className="app">
          <Filter handle={this.handleChange} />
          <PokeList state={this.state}/>
        </div>
    );
  }
}

export default App;
