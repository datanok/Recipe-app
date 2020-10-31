import React from 'react';
import style from './recipe.module.css';
import { FaFire } from "react-icons/fa";

const Recipe = ({title, calories, image, ingredients, orecipe}) => {
    return(
        <div className={style.recipe}>
            <img className={style.image} src={image} alt="not loading for some"/>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <span className="calories">Calories: <FaFire color="#E75E5D"/><p>{Math.floor( calories )} kcal</p></span>
            <a href={orecipe} className={style.btn}>Let's Cook!</a>
            
        </div>
        
        
        
    );
}

export default Recipe;