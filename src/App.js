import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList'
import Pagination from './Pagination'
import axios from 'axios'
import PokeTable from './PokeTable'
import SearchForm from './SearchBar'
import Button from '@material-ui/core/Button';


function App() {
  const [pokemon, setPokemon] = useState([])
  // const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  var [currentPageUrl, setCurrentPageUrl] = useState(`https://pokeapi.co/api/v2/pokemon/5`)
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  const [pokemonStats, setPokemonStats] = useState([])
  var pokemonSearchName = ""




  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then((res) => {
      setLoading(false)
      // setNextPageUrl(res.data.next)
      // setPrevPageUrl(res.data.previous)
      // setPokemon(res.data.results.map(p => p.name))
      setPokemonStats(res.data.stats.map(stat => stat))
    })

    return () => cancel()
  }, [currentPageUrl])



  function makeSearch(search){
    setCurrentPageUrl(`https://pokeapi.co/api/v2/pokemon/${search}`)
  }

  if (loading) return "Loading..."

  return (
    <>  
      <SearchForm makeSearch={makeSearch} />
      <PokeTable pokemonStats={pokemonStats} />
    </>  
  )
}

export default App;
