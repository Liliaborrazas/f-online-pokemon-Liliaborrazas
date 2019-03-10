import React, { Component } from 'react';
import './App.scss';
import PokemonList from './components/PokemonList';
import { fetchPokemon } from './services/PokemonService';
import Filter from './components/Filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      results: [],
    }

    this.getFilteredPokemon = this.getFilteredPokemon.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
    this.getPokemon = this.getPokemon.bind(this);
  }

  componentDidMount() {
    this.getPokemon()
  }

  getPokemon() {
    fetchPokemon()
      .then(data => {
        const promiseList = data.results.map(item => fetch(item.url));
        Promise.all(promiseList)
          .then(responses => {
            const res = responses.map(response => response.json())
            Promise.all(res)
              .then(pokemon => {
                this.setState({
                  results: pokemon
                })
                console.log(this.state.results);
              })
          })
      })
  }

  filterPokemon(e) {
    const query = e.currentTarget.value;
    this.setState({
      search: query
    })
  }

  getFilteredPokemon() {
    const { results, search } = this.state;
    console.log(this.state.results);
    return results.filter(item => item.name.toUpperCase().includes(search.toUpperCase()));

  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <Filter filterPokemon={this.filterPokemon} />
        </header>
        <main className="app__main">
        <div className="container__list">
          <PokemonList filteredPokemon={this.getFilteredPokemon()} />
        </div>
          
        </main>
      </div>
    );
  }
}

export default App;