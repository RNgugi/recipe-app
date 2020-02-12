import React, { useEffect,useState } from 'react';
import Recipe from './recipe'; 
import './App.css';

const App = ()=> {

  const APP_ID = "fa2a3cfb";
  const APP_KEY = "89a1162aa3c0f31f5614f0f3040d5e40";

  const[recipes,setRecipes] = useState([]);

  useEffect( () =>{
    getRecepies();
  }, []); 

  const getRecepies = async()=>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type = "submit">Search</button>
        
      </form>
      {recipes.map(recipe=>(
        <Recipe />
      ))}

    </div>

  )
}

export default App;
