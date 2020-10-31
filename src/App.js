import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import { FaSearch } from "react-icons/fa";
import './App.css';

const App = () => {

  const APP_ID = '050195d2';
  const APP_KEY = 'a90346e8a5d3216b1b611af1ca133ea8';

  const [recipes, setRecipes] = useState([]);  
  const [search, setSearch] =  useState("");
  const [query, setQuery] = useState("chicken")


  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    
  };
  
  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Enter Food"/>
        <button className="search-button" type="submit"><FaSearch color="white"/></button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label} calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        orecipe = {recipe.recipe.url}
        />
      ))}
      </div>
    </div>

  );
}

export default App;
