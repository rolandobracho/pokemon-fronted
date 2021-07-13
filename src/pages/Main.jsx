import React, { Fragment, useEffect, useState } from 'react'
import Footer from './../components/Layout/Footer'
import Grid from '@material-ui/core/Grid';
import Header from './../components/Layout/Header'
import PokemonMain from '../pages/PokemonMain'
import Typography from '@material-ui/core/Typography';

const Main = () => {
    return (
        <Fragment>
        <Typography variant="h2">Listado Pokemones</Typography>
        <Grid container>                
            <Header /> 
        </Grid>
        <Grid container
            direction="column"
            justify="center"
            className="full">
            <PokemonMain></PokemonMain>
        </Grid> 
        <Grid container>
            <Footer /> 
        </Grid> 
    </Fragment>
    )
}

export default Main
