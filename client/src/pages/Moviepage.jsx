import { useLoaderData } from "react-router-dom";

function Moviepage() {
  const movie = useLoaderData();
  console.info(movie);
  return <div>movie-page</div>;
}

export default Moviepage;
