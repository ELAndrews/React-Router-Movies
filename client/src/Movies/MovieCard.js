import React from 'react';
import { Link } from 'react-router-dom';


const MovieCard = props => {
  const movie = props.movie;

    return (
      <Link 
      to={`/movies/${movie.id}`}>
        <div className="save-wrapper">
        <div key={movie.id} className="movie-card">
          <h2>{movie.title}</h2>
          <div className="movie-director">
            Director: <em>{movie.director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{movie.metascore}</strong>
          </div>
          <h3>Actors</h3>
  
          {movie.stars.map(star => (
            <div key={movie.star} key={star} className="movie-star">
              {star}
            </div>
          ))}

        </div>
            <div className="save-button">Save</div>
        </div>
      </Link>
    );
}


export default MovieCard;

