// import React, {useEffect} from "react";
// import {connect} from "react-redux";
// import {getPokemon} from "../store/actions/index";

// const Pokemon = ({getPokemon, pokemon, isFetching, error}) => {
//     useEffect(() => {
//         getPokemon();
//     }, [getPokemon]);
//     if (isFetching) {
//         return <h2>Fetching Pokemon!!</h2>
//     }
//     return <p>Its working: {pokemon}</p>
// };

// const mapStateToProps = state => {
//     return {
//       pokemon: state.pokemon,
//       isFetching: state.isFetching,
//       error: state.error
//     };
//   };
  
//   export default connect(mapStateToProps, {getPokemon})(Pokemon);

import React from 'react';
import { connect } from 'react-redux';

import { getPokemon } from '../store/actions/index';

const Pokemon = props => {
  const fetchPokemon = e => {
    e.preventDefault();
    props.getPokemon();
  };

  return (
    <>
      <h2>Welcome to Pokémon World!</h2>
      {props.isFetching && <p>Fetching your Pokémon</p>}
      <div>
        {props.pokemon.map(pokemon => (
          <h4 key={pokemon.url}>{pokemon.name}</h4>
          
        ))}
      </div>
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={fetchPokemon}>Fetch Pokemon!</button>
    </>
  );
};

const mapStateToProps = state => ({
  pokemon: state.pokemon,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  { getPokemon }
)(Pokemon);
