// import "./styles/style.css";
import Axios from "axios";
import { useState } from "react";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabels, setHealthLabels] = useState("vegan");

  const ID = process.env.REACT_APP_ID;
  const KEY = process.env.REACT_APP_KEY;

  const URL = `https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${KEY}&health=${healthLabels}`;

  const getRecipes = async function () {
    const result = await Axios.get(URL);
    setRecipes(result.data.hits); // return an array
    console.log(result.data);
    console.log(URL);
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
        <select className="healthLabels">
          <option onClick={() => setHealthLabels("vegan")}>vegan</option>
          <option onClick={() => setHealthLabels("vegetarian")}>
            vegetarian
          </option>
          <option onClick={() => setHealthLabels("soy-free")}>soy-free</option>
          <option onClick={() => setHealthLabels("peanut-free")}>
            peanut-free
          </option>
          <option onClick={() => setHealthLabels("wheat-free")}>
            wheat-free
          </option>
          <option onClick={() => setHealthLabels("dairy-free")}>
            dairy-free
          </option>
          <option onClick={() => setHealthLabels("egg-free")}>egg-free</option>
          <option onClick={() => setHealthLabels("gluten-free")}>
            gluten-free
          </option>
          <option onClick={() => setHealthLabels("low-sugar")}>
            low-sugar
          </option>
          <option onClick={() => setHealthLabels("alcohol-free")}>
            alcohol-free
          </option>
        </select>
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
