// const dotenv = require("dotenv");
// dotenv.config();
import "./App.css";
import Axios from "axios";

function App() {
  const [input, setInput] = useState("");

  let ID = process.env.REACT_APP_ID;
  let KEY = process.env.REACT_APP_KEY;

  const URL = `https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}&&health=alcohol-free`;

  const getRecipes = async function () {
    const result = await Axios.get(URL);
    console.log(result.data);
  };

  return (
    <div className="App">
      <h1 onClick={getRecipes}>🥦Recipe🥩</h1>
      <form className="serachForm">
        <input type="text" placeholder="Enter ingridient" />
      </form>
    </div>
  );
}

export default App;
