import css from './Header.module.css'
import {BiSearchAlt} from "react-icons/bi";
import {useState} from "react";

const Header = ({onChange}) => {
    const [pokemon, setPokemon] = useState('')
    const searchPokemonHandler = (e) => {
        setPokemon(e.target.value)
        onChange(pokemon)
    }
    return (
        <header className={css.home}>
            <h1>Pokédex</h1>
            <div className={css.home__search}>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type='search' placeholder='Search for a pokemon' onChange={searchPokemonHandler}/>
                    {/*<button><BiSearchAlt className={css.icon}/></button>*/}
                </form>
            </div>
            <span>Built using <a href='src/Components/Header/Header' target="_blank">PokéAPI</a></span>
        </header>
    )
}

export default Header