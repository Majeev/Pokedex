import './App.css';
import Header from "./Components/Header/Header";
import Pokemon from "./Components/Pokemon/Pokemon";
import {useEffect, useState} from 'react';


function App() {
    const [pokemons, setPokemons] = useState([])
    const [filteredPokemons, setFilteredPokemons] = useState([])

    const getPokemons = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=649`)
        const data = await res.json()

        const createPokemon = (results) => {
            results.forEach(async pokemon => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()

                setPokemons(prevState => [...prevState, data])

            })
        }
        createPokemon(data.results)
    }

    useEffect(() => {
        getPokemons()
    }, [])

    const filter = (pokemon) => {
        setFilteredPokemons(pokemon)
    }

    const filteredPokes = pokemons.sort((a, b) => a.id - b.id)
                                  .filter(poke => poke.name.toLowerCase()
                                                      .includes(filteredPokemons))

    return (
        <div className="App">
            <Header onChange={filter}/>
            <div className="wrapper">
                {filteredPokes.map((pokemonStats, index) => <Pokemon
                    key={index}
                    id={pokemonStats.id}
                    image={pokemonStats.sprites.other.dream_world.front_default}
                    name={pokemonStats.name}
                    type={pokemonStats.types[0].type.name}
                />)}
            </div>
        </div>
    );
}

export default App;
