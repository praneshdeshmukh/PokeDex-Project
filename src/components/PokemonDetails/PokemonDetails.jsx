import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PokemonDetails.css';
function PokemonDetails() {

    const {id} = useParams();
    const [pokemon, setPokemon] = useState({});
    async function downloadPokemonAndDetails() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log(response);
        setPokemon({
            name: response.data.name,
            image: `https://img.pokemondb.net/artwork/large/${response.data.name}.jpg`,
            weight: response.data.weight ,
            height: response.data.height,
            types : response.data.types.map((t) => t.type.name),
        })
    }
    console.log(pokemon.name);

    useEffect(() => {
        downloadPokemonAndDetails();
    }, []);
    return (

        // <>
            <div className="pokemon-details-wrapper">

                <img className="pokemon-image" src = {pokemon.image} />
                <div className="pokemon-description">

                <div className="pokemon-name"> {pokemon.name} </div>
                <div> Height : {pokemon.height}</div>
                <div> Weight : {pokemon.weight}</div>
                <div className="pokemon-types">
                    Type : {pokemon.types}
                </div>

                </div>

            </div>
        // </>


    );

}

export default PokemonDetails;
