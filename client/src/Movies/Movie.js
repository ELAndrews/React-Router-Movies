import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const Movie = (props) => {
  const [movie, setMovie] = useState({stars: []});
 
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
          console.error(error);
        });

  },[]);

  
  class Event extends React.Component {
    constructor (props) {
      super(props);
      this.state = {};
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      e.preventDefault();
      console.log(`event happened`);
      this.addToSavedList(this.movie);
    }}
  
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = (props) => {
  //   const addToSavedList = props.addToSavedList();
  //   addToSavedList(movie)
  // }
  
  if (!movie) {
    return <div>Loading movie information...</div>;
  }
  return (
    <div>
      <MovieCard movie={movie} />
    </div>
  )
}



export default Movie;
