import { useFav } from "./contexts/FavContext";

import "./App.css";

function App() {
  const { fav, setFav } = useFav();
  console.info(fav, setFav);
  return <h1>WildersMoviesClub</h1>;
}

export default App;
