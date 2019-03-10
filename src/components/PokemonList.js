import React, { Component } from "react";
import PokemonCard from './PokemonCard';

class PokemonList extends Component {
    render() {
        const { filteredPokemon } = this.props;
        if (filteredPokemon.length === 0) {
            return (
                <p className="message">No hay resultados</p>
            )
        } else {
            return (
                <ul className="list">
                    {filteredPokemon.map(item => {
                        return (
                            <li className="list__item" key={item.id}>
                                <PokemonCard name={item.name} id={item.id} types={item.types} image={item.sprites.front_default} />
                            </li>
                        );
                    })}
                </ul>
            );
        }
    }
}

export default PokemonList;
