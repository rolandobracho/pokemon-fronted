import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

const PokemonInfo = ({name}) => {
    return (
        <Grid xs={2} sm={4} md={4}>
            <a target="_blank">
                <img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${name}.jpg`} width="360" height="336"/>
            </a>
        </Grid>

        
    )
}

PokemonInfo.propTypes = {
    name: PropTypes.string.isRequired
}

export default PokemonInfo
