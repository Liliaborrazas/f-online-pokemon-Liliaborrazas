import React, { Component, Fragment } from "react";

class PokemonDetails extends Component {
    render() {
        const { id, name, types, image } = this.props;
        return (
            <Fragment>
                <div className="item-pokemon">
                <div className="grey_container">
                    <img className="img" src={image} alt={name} />
                    <p className="pokemon-id">id / {id}</p>
                </div>
                </div>
                <div className="information">
                <h2 className="pokemon-name">{name}</h2>
                <ul className="pokemon-type">
                    {types.map((item, index) => {
                        return (
                            <li className="type" key={index}>{item.type.name}</li>
                            )
                        })}
                </ul>
               </div>
            </Fragment>
        );
    }
}

export default PokemonDetails;