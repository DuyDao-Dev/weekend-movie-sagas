import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

function MovieDetails () {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const movieDetails = useSelector(store => store.movieDetails);
    const history = useHistory();


    // Need a back button for user to go back to homepage
    history.push('/'); //Remember to setup a link on App.js


    return (
         //Should display details, including genres for the selected movie
         //Setup a GET request on router with req.params and :id. 
    )
}