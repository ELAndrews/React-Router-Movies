import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const Movie = (props) => {
  
  const [movie, setMovie] = useState({stars: []});
  const [error, setError] = useState(null);
  
  useEffect(() => {
  
    const id = props.match.params.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          setError(error.message);
        });

  },[]);
  
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }
  return (
    <div>
      {error && <p>{error}</p>}
      <MovieCard movie={movie} saveMovie={saveMovie}/>
    </div>
  )
}

export default Movie;
