import React, {Component} from "react";

class Filter extends Component {
  render() {
    return (
      <div className="app__field">
        <label className="app__field-text" htmlFor="search"></label>
        <input type="text" onKeyUp={this.props.filterPokemon} placeholder="Busca tu pokemon" className="app__field-search" />
      </div>
    );
  }
}

export default Filter;