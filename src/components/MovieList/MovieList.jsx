import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from "react-router-dom";

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleMovieDetails = (movie) => {
        console.log(`What is movie doing in MovieList handler?`, movie);
        //Goes to Saga fetchGenres but stores in state for genres Reducer.
        dispatch({type: 'FETCH_GENRES', payload: movie})
        // Stores in state for movies Reducer.
        dispatch({type: 'MOVIE_DETAILS', payload: movie})
        // History will take user to details page for the movie poster clicked on.
        history.push(`/details/${movie}`) 

    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img 
                            src={movie.poster} 
                            alt={movie.title}
                            onClick={() => {handleMovieDetails(movie.id)}}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;