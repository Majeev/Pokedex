import css from './Header.module.css'


const Header = ({onChange}) => {

    const searchPokemonHandler = (e) => {
        onChange(e.target.value)
    }
    return (
        <header className={css.home}>
            <h1>Pokédex</h1>
            <div className={css.home__search}>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type='search' placeholder='Search for a pokemon' onChange={searchPokemonHandler}/>
                </form>
            </div>
            <span>Built using <a href='src/Components/Header/Header' target="_blank">PokéAPI</a></span>
        </header>
    )
}

export default Header