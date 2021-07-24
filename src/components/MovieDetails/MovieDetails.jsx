import { useEffect, useState } from "react"; 
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from "react-router-dom";

function MovieDetails () {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const movieDetails = useSelector(store => store.movieDetails);
    const genres = useSelector(store => store.genres);
    // const history = useHistory();
    // const [newCategory, setSomething] = useState("");//What do I need to hold?

    // bring in data from genres and movies

    useEffect(() => {
        // placeholder();
        dispatch({ type: 'FETCH_MOVIES' });
        console.log("in use effect");
    }, []);

    

    // Need a back button for user to go back to homepage
    // history.push('/'); //Remember to setup a link on App.js


    return (
         //Should display details, including genres for the selected movie
         <form>
             <h1>{movies[movieDetails-1].title}</h1>
             <img src={movies[movieDetails-1].poster}></img>
             <p>{movies[movieDetails-1].description}</p>
             <p>Genres</p>
             <p>{genres[movieDetails-1].name}</p>
         </form>
    )
}

export default MovieDetails;

//Setup a GET request on router with req.params and :id. (DONE. Tested in Postman)