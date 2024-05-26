import * as PropTypes from "prop-types";
import styles from "../assets/styles/components/line-movie-item.module.css"

function LineMovieItem({title, posterPath, voteAverage, voteCount}) {
  return (
    <div className={styles.lineMovieItem}>
      <div className={styles.lineMovieItemLeft}>
        <img src={posterPath} alt={title} className={styles.lineMoviePoster}/>
      </div>
      <div className={styles.lineMovieItemRight}>
        <h2>{title}</h2>
        <div className={styles.lineMovieItemInfo}>
          <div>
            <span>{voteAverage}</span>
          </div>
         <div>
           <span>{voteCount}</span>
         </div>
        </div>
      </div>

    </div>
  )
}


LineMovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  voteCount: PropTypes.number.isRequired,
}

export default LineMovieItem