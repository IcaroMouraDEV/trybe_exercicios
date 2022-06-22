import React from "react";
import './css/pokemon.css'

class Pokemon extends React.Component {
  render() {
    const {name, type, image} = this.props.pokemon;
    const {value, measurementUnit} = this.props.pokemon.averageWeight;
    return (
      <div className="pokemon">
        <div className="data">
          <p className="name">Name: {name}</p>
          <p className="type">Type: {type}</p>
          <p className="weigth">Weigth: {value} {measurementUnit}</p>
        </div>
        <img src={image} alt="" />
      </div>
    );
  };
}

export default Pokemon;
