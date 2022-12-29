// import "./styles/style.css";
import Axios from "axios";
import { useState } from "react";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const ID = process.env.REACT_APP_ID;
  const KEY = process.env.REACT_APP_KEY;

  const URL = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}&&health=alcohol-free`;

  const getRecipes = async function () {
    const result = await Axios.get(URL);
    setRecipes(result.data.hits); // return an array
    console.log(result.data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };
  return (
    <div className="app container">
      <h1>🥦Recipe🥩</h1>
      <form className="searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Enter ingridient"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input type="submit" value="Search" className="submit" />
      </form>

      <div className="recipes row">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
