import React, { useEffect, useState } from 'react'
import './App.css';
import PokemonList from './components/PokemonList/PokemonList'

function App() {

  const[allPokemons, setAllPokemons] = useState([])
  const [urlPokemons, setUrlPokemons] = useState('https://pokeapi.co/api/v2/pokemon?limit=10')

  const getAllPokemons = async () => {
    const res = await fetch(urlPokemons)
    const data = await res.json()
    //let columns = width === 'xs' || width === 'sm'  ? 1 : 2;

    setUrlPokemons(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await response.json()
        setAllPokemons( currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }

  useEffect(() => {
    getAllPokemons()
   }, [])

  return (
    <div className="App">
      <h1>Pokemom on Houm </h1>
      <PokemonList allPokemons={allPokemons}></PokemonList>
    </div>
  );
}


export default App;