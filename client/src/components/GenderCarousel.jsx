import PropTypes from "prop-types";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


function GenderCarousel({similarMovies}) {
  const items = similarMovies.map((movie) => ( <img src={movie.poster_path} alt={movie.title} key={movie.poster_path}/> ));
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};
  return(
      <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
      />
  )
}

GenderCarousel.propTypes = {
  similarMovies : PropTypes.arrayOf(PropTypes.shape({
    poster_path : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
  })).isRequired
}

export default GenderCarousel;
