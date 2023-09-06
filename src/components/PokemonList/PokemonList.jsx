import { useEffect, useState } from "react";
import axios from 'axios'
import './PokemonList.css'
import PokemonImage from "../Pokemon/PokemonImage";

function PokemonList() {


    const [pokemonList, setpokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [pokedexUrl, setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const [nextUrl, setNextUrl] = useState('')
    const [prevUrl, setPrevUrl] = useState('')

    async function DownloadPokemonList() {

        setIsLoading(true);
        
        const response = await axios.get(pokedexUrl)
        // console.log(response);

        
        // storing the response of data.results in a new array
        const pokemonResults =  response.data.results
        // console.log(response.data); // next - which contains list of next 20 pokemons
        
        setNextUrl(response.data.next)
        setPrevUrl(response.data.previous)

        // get request for array of promises , all 20 url's fetched in pokemonResults
        const pokemonsFetched = pokemonResults.map((pokemon) => axios.get(pokemon.url))
        // console.log(pokemonsFetched);

        const pokeData = await axios.all(pokemonsFetched); // all 20 url promises 
        //  axios.all() accepts an array of Axios requests, and returns an array that contains the responses from each Axios request
        // console.log(pokeData);

        const Names = pokeData.map((pokemon) =>  {

           const pokemonNames = pokemon.data; 
            // console.log(pokemonNames);  // names of all pokemons

            return ({
                id: pokemonNames.id,
                name: pokemonNames.name,
                types: pokemonNames.types
            } )
        });

        setpokemonList(Names)
        setIsLoading(false)
        
    }
    useEffect(() => {
        DownloadPokemonList()
    }, [pokedexUrl]);


    return (
        <>
             <p id="pokemon-heading">Pokemon List</p>
             <div className="pokemon-list-wrapper">
                 {(isLoading) ? 'Loading...' : pokemonList.map((p) => <PokemonImage name={p.name} key={p.id} /> )}
             </div>   
             <div className='controls'>
                     <button disabled={prevUrl == null} onClick={() => setPokedexUrl(prevUrl)}>Prev</button>
                     <button disabled={nextUrl == null} onClick={() => setPokedexUrl(nextUrl)}>Next</button>
             </div> 
        </>
    )

}

export default PokemonList;