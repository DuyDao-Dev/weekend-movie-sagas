import { useEffect, useState } from "react"; 
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";

function MovieDetails () {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const movieDetails = useSelector(store => store.movieDetails);
    const genres = useSelector(store => store.genres);
    const history = useHistory();
    const {movieId} = useParams();

    // bring in data from genres and movies

    useEffect(() => {
        console.log("in use effect");
        console.log (`What is in genres`, genres);
        // getGenres(movies[movieDetails-1].id);
        console.log(`What is the movie`,movies[movieDetails-1].id)
    }, []);

    const getGenres = (movieId) => {
    dispatch({ type: "FETCH_GENRES", payload: movieId });
    };

    const handleHomeClick = () => {
        history.push('/');
    }
    // Need a back button for user to go back to homepage
    // history.push('/'); //Remember to setup a link on App.js


    return (
         //Should display details, including genres for the selected movie
         <section>
             <h1>{movies[movieDetails-1].title}</h1>
             <img src={movies[movieDetails-1].poster}></img>
             <p>{movies[movieDetails-1].description}</p>
             <form>
                 <p>Genres</p>
                 <p>
                    {genres.map((genre) => {
                        return (
                        <p key={genre}>{genre.name}</p>
                        );
                    })}
                 </p>
                 <button onClick={() => handleHomeClick()}>Homepage</button>
             </form>
         </section>
    )
}

export default MovieDetails;

//Setup a GET request on router with req.params and :id. (DONE. Tested in Postman)

//This is the old map code. The index is no longer needed because
//we brought in the genre ID and the genres itself because we 
//added the genres.id in the SELECT in the genres.router.js
{/* <p>
    {genres.map((genre, index) => {
        return (
            <p key={index}>{genre.name}</p>
        ;
    })}
</p> */}