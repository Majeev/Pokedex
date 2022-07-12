import css from './Header.module.css'
import {BiSearchAlt} from "react-icons/bi";

const Header = () => {
    return (
        <header className={css.home}>
            <h1>Pokédex</h1>
            <div className={css.home__search}>
                <form>
                    <input type='search' placeholder='Search for a pokemon'/>
                    <button><BiSearchAlt className={css.icon}/></button>
                </form>
            </div>
            <span>Built using <a href='src/Components/Header/Header' target="_blank">PokéAPI</a></span>
        </header>
    )
}

export default Header