import css from './Pokemon.module.css'


const Pokemon = ({id, image, name, type}) => {

    return (
                    <div className={`${css.pokemon__container} ${type}`} onClick={() => console.log({name})}>
                        <span className={css.pokemon__description}>#{id}</span>
                        <div className={css.pokemon__picture}>
                            <img src={image} alt={name}/>
                        </div>
                        <div className={css.pokemon__description}>
                            <h2>{name}</h2>
                            <span>Type: {type}</span>
                        </div>
                    </div>

    )
}

export default Pokemon