import css from './Pokemon.module.css'
import {useState, useEffect} from "react";

const Pokemon = ({id, image, name, type}) => {

    return (
                    <div className={`${css.pokemon__container} ${type}`}>
                        <span className={css.pokemon__description}>#{id}</span>
                        <div className={`${css.pokemon__picture} `}>
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