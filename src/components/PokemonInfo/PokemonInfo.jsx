import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Skeleton } from "@material-ui/lab";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        color: '#212121',
    },
    title: {
        fontSize: 20,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 140,
        width: 360,
        paddingTop: '56.25%', // 16:9
    },
  });

const PokemonInfo = ({name, url}) => {
    
    const[pokemon, setPokemon] = useState([])
    const[pokemonDesc, setPokemonDesc] = useState([])
    const classes = useStyles();
    let urlImg = `https://img.pokemondb.net/artwork/large/${name}.jpg`
    let urlPokemonDesc = "https://pokeapi.co/api/v2/characteristic/"

    const getPokemon = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data.types)
        setPokemon(data)
    }

    const getPokemonDesc = async (id) => {
        if(id === undefined) return
        const res = await fetch(urlPokemonDesc+id)
        const data = await res.json()
        setPokemonDesc(data.descriptions[1].description)
    }

    useEffect(() => {
        getPokemon(url)
    }, [])   

    useEffect(() => {
        getPokemonDesc(pokemon.id)
    }, [pokemon])

    return (
        <Card className={classes.root} xs={2} sm={3} md={5}>
            <CardActionArea>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    {pokemon.id}
                </Avatar>                
                }
                title={pokemonDesc}
            />
                <CardMedia className={classes.media} image={urlImg} title={name}/>                
                <CardContent color="primary">
                    <Typography gutterBottom variant="h5" component="h2">{name}</Typography>                    
                </CardContent>
            </CardActionArea>
            <CardActions>                
                {pokemon && pokemon.types && pokemon.types[0] ? <Button size="small" variant="outlined" color="primary">{pokemon.types[0].type.name}</Button> : null}
                {pokemon && pokemon.types && pokemon.types[1] ? <Button size="small" variant="outlined" color="primary">{pokemon.types[1].type.name}</Button> : null}                
            </CardActions>
        </Card>
        
    );
}

PokemonInfo.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default PokemonInfo
