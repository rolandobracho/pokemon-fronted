import React, { Fragment, useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types'

const Header = () => {

    const[allPokemons, setAllPokemons] = useState([])
    const urlPokemons = 'https://pokeapi.co/api/v2/pokemon?limit=1118';

    const getAllPokemons = async () => {
        const res = await fetch(urlPokemons)
        const data = await res.json()
        setAllPokemons(data.results)
    }

    useEffect(() => {
        getAllPokemons()
    }, []) 

    const options = allPokemons.map((option) => {
        const firstLetter = option.name[0].toUpperCase();
        console.log(firstLetter)
        return {
        firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
        ...option,
        };
    });

    return (
        <Fragment>            
            <h1>Pokemon</h1>
            <Autocomplete
            id="grouped-pokemon"
            options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
            groupBy={(option) => option.firstLetter}
            getOptionLabel={(option) => option.name}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Buscador" variant="outlined" />}
            />
        </Fragment>

    );
}

Header.propTypes = {

}

export default Header