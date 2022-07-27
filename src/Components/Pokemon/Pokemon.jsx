import css from './Pokemon.module.css'
import {useState} from "react";


const Pokemon = ({id, image, name, type, exp, weight,ability,img}) => {
    const [reverse, setReverse] = useState(false)

    return (
        <div className={`${css.pokemon__container} ${type}`} onClick={() => setReverse(prevState => !prevState)}>
            <div className={reverse ? 'none' : ''}>
                <span className={css.pokemon__description}>#{id}</span>
                <div className={css.pokemon__picture}>
                    <img src={image} alt={name} loading="lazy"/>
                </div>
                <div className={css.pokemon__description}>
                    <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
                    <span>Type: {type}</span>
                </div>
            </div>
            <div className={reverse ? css.pokemon__reverse : 'none'}>
                <span className={css.pokemon__description}><h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2> Statistics</span>
                <span className={css.pokemon__description}>Base Experience: {exp}</span>
                <span className={css.pokemon__description}>Weight: {weight}</span>
                <span className={css.pokemon__description}>Ability: {ability}</span>
            </div>
        </div>

    )
}

export default Pokemon