import React, { useRef, useState, useEffect } from "react";
import { List } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import useLoadMoreOnScroll from "react-hook-pagination";
import Grid from '@material-ui/core/Grid';
import PokemonList from './../components/PokemonList/PokemonList'
import Button from '@material-ui/core/Button';

function Loader() {
  return (
    <div>
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="text" height={120} />
    </div>
  );
}

function App() {
  const scroller = useRef();
  const[allPokemons, setAllPokemons] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
  const [nextPageUrl, setNextPageUrl] = useState()

  const {
    start, 
    end, 
    isFetching,
    doneFetching,
    setIsFetching,
    forceDonefetching
  } = useLoadMoreOnScroll({ fetchSize: 10, scroller: scroller, limit: 10 });

  const fetchPokemons = async (url) => {
    const response = await fetch(url);
    const data = await response.json()
    if (data.next == null) forceDonefetching() 
    setAllPokemons([...allPokemons, ...data.results]);
    setIsFetching(false);
    setNextPageUrl(data.next)
    return data
  };

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  useEffect(() => {
    if (currentPageUrl) {
      fetchPokemons(currentPageUrl)
    }
  }, [currentPageUrl]);

  return (
    <div className="App">
        <div className="highlight">
            <Grid item container xs={12}
                justify="center"
                alignItems="center">
                <List ref={scroller}>
                    <PokemonList allPokemons={allPokemons}></PokemonList>
                    {isFetching && <Loader />}
                </List>
                <div>
                    {gotoNextPage && <Button size="large" variant="contained" color="primary" onClick={gotoNextPage}>Ver mas</Button>}
                </div>
            </Grid>
        </div>
    </div>
  );
}

export default App;