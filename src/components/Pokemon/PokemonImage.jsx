import './PokemonImage.css'

function PokemonImage( { name , id } ) {
    return (
        <>
        
          <div className="pokemon-details"> 
             
              {/* <h1>Helooooooooooooooo</h1> */}
              <div className="poke-div">
                      <div className="pokemon-img">
             
                          <img src= {`https://img.pokemondb.net/artwork/large/${name}.jpg`} id="pokeImg" alt="" />
             
                      </div>
             
                      <div className="pokemon-name" id={id}> {name}</div>
              
              </div>
        
          </div>
           
        </>
    )
}
export default PokemonImage;