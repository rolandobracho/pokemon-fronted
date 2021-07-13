import React from 'react'
import PropTypes from 'prop-types'
import PokemonInfo from './../PokemonInfo/PokemonInfo'
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';

const PokemonList = ({allPokemons}) => {
  return (      
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} cellHeight={400}>
      {
        allPokemons.map(pokemon => (
          <GridListTile>
            <PokemonInfo name={pokemon.name} url={pokemon.url}></PokemonInfo>
          </GridListTile>
        ))
      }
    </Grid>
  )
}

PokemonList.propTypes = {
  allPokemons: PropTypes.string.isRequired
}

export default PokemonList
