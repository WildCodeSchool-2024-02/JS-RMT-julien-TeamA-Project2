import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../assets/styles/components/GenderCarousel.css'

function GenderCarousel({ genre, movieId }) {
  const [moviesByGenre, setMoviesByGenre] = useState([])

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/movies?genre=${genre}&id=${movieId}`)
      .then(res => setMoviesByGenre(res.data))
      .catch(err => console.error(err));
      // eslint-disable-next-line
  }, [movieId]);

  const items = moviesByGenre.map((movie) => (
    <Link to={`/movies/${movie.id}`} key={movie.id}>
      <img className='carousel-img' src={movie.poster_path} alt={movie.title}/> 
    </Link>
  ));

  const responsive = {
    0: { items: 2 },
    700: { items: 3 },
    1024: { items: 6 },
};
  return(
    <div className="carousel-container">
      <h2>You would also like :</h2>
      <AliceCarousel
          infinite
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          renderNextButton={() => <button type="button" className="next-button">{">"}</button>}
          renderPrevButton={() => <button type="button" className="prev-button">{"<"}</button>}
          />
    </div>
  )
}

GenderCarousel.propTypes = {
  genre: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired
}

export default GenderCarousel;

