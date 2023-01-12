import './App.css';
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import Pokemon from './Components/Pokemon/Pokemon';

function App() {
    const [pokemons, setPokemons] = useState([]);
    const [apiLoad, setApiLoad] = useState(true);
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    const getPokemons = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=649`);
        const data = await res.json();

        const createPokemon = (results) => {
            results.forEach(async (pokemon) => {
                const res = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
                );
                const data = await res.json();

                setPokemons((prevState) => [...prevState, data]);
                setApiLoad(false);
            });
        };
        createPokemon(data.results);
    };

    useEffect(() => {
        getPokemons();
    }, []);

    const filter = (pokemon) => {
        setFilteredPokemons(pokemon.toLowerCase());
    };

    const filteredPokes = pokemons
        .sort((a, b) => a.id - b.id)
        .filter((pokemon) =>
            pokemon.name.toLowerCase().includes(filteredPokemons)
        );

    return apiLoad ? (
        <div className='loader'></div>
    ) : (
        <div className='App'>
            <Header onChange={filter} />
            <div className='wrapper'>
                {filteredPokes.map((pokemonDetails, index) => (
                    <Pokemon
                        key={index}
                        id={pokemonDetails.id}
                        image={
                            pokemonDetails.sprites.other.dream_world
                                .front_default
                        }
                        img={pokemonDetails.sprites.back_default}
                        name={pokemonDetails.name}
                        type={pokemonDetails.types[0].type.name}
                        exp={pokemonDetails.base_experience}
                        weight={pokemonDetails.weight}
                        ability={pokemonDetails.abilities[0].ability.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
