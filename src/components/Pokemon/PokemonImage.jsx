import { Link } from 'react-router-dom';
import './PokemonImage.css'

function PokemonImage( { name , id } ) {
    return (
        <>
        
          <div className="pokemon-details"> 
             
              {/* <h1>Helooooooooooooooo</h1> */}
              
              <div className="poke-div">
              {/* use <Link /> Tag instead of <a>Anchor</a> Tag to avoid refreshing of page on every click. */}
                <Link style={{ textDecoration: 'none' }}
                      to={`/pokemon/${id}`} >
                
                      <div className="pokemon-img">
             
                          <img src= {`https://img.pokemondb.net/artwork/large/${name}.jpg`} id="pokeImg" alt="" />
             
                      </div>
             
                      <div className="pokemon-name" id={id}> {name} </div>
              
                
                </Link>
              </div>
        
          </div>
           
        </>
    )
}
export default PokemonImage;