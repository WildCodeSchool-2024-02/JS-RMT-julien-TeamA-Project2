import PropTypes from "prop-types";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../assets/styles/components/GenderCarousel.css'

function GenderCarousel({similarMovies}) {
  const items = similarMovies.map((movie) => ( <img className='carousel-img' src={movie.poster_path} alt={movie.title} key={movie.poster_path}/> ));
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
  similarMovies : PropTypes.arrayOf(PropTypes.shape({
    poster_path : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
  })).isRequired
}

export default GenderCarousel;
