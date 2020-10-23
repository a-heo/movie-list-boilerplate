import React from 'react'; 
import MovieEntry from './MovieEntry.jsx';

const MovieList = function(props) {
    return (
    <ul>
        {props.movies.map((movie, index) => {
         return <MovieEntry key ={movie + index} movies={movie}/>        
        })}
    </ul>
    )
}

export default MovieList; 