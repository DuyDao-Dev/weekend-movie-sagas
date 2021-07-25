import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './AddMovie.css'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Grid,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles ({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 300,
  },
});

function AddMovie() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [url, setURL] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('')
    const genres = useSelector(store => store.genres);

    useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const addMovieData = () => {
        event.preventDefault();
      const  newMovie = 
     {title: title, 
      poster: url, 
      description: description, 
      genre_id: genre}
        dispatch({type: 'ADD_MOVIE', payload: newMovie})
        setDescription('')
        setTitle('')
        setURL('')
        
    }
    const goHome = () => {
        history.push('/')
    }

    return (
    <Grid container>
      {favoriteReducer.map((gif) => {
        return (
          <Card key={gif.id} className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={gif.url}
                className={classes.media}
              />
              <CardContent>
                <form>
                    <p>Please choose a Genre</p>
                  {genres.map((genre) => {
                    return (
                    <>
                  <input
                    key={genre.id}
                    type="dropdown"
                    name="genreOption"
                    value={genre.name}
                    id= {genre.name}
                    onChange={(event) =>
                      setNewGenre(event.target.value)
                    }
                    required
                  />
                  <label htmlFor= {category.name} > {category.name} </label>
                  </>
                    )})}
                  <Button type="submit" variant="contained" color="primary" onClick={()=>{setNewGenre(genre.id)}}>
                    Add New Movie
                  </Button>
                </form>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </Grid>

    )
}

export default AddMovie;





//This is working code that sits in return.
{/* <section>
    <center>
    <form action="submit">
    <h1>Add Movie to Library</h1>
    <h2>Name</h2>
    <input type="text" value={title} placeholder='Movie Title' onChange={(evt) => setTitle(evt.target.value)} required/>
    <h2>Image</h2>
    <input type="text" value={url} placeholder='Insert Movie Image URL Here' onChange={(evt) => setURL(evt.target.value)} required/>
    <h2>Description</h2>
    <textarea value={description} placeholder='Insert Movie Description Here' rows="4" cols="50" onChange={(evt) => setDescription(evt.target.value)}></textarea>
      <div className="dropdown">
        <button className="dropbtn">Genre</button>
        <div className="dropdown-content">
          <a onClick={(event) => setGenre(1)} >Adventure</a>
          <a onClick={(event) => setGenre(2)} >Animated</a>
          <a onClick={(event) => setGenre(3)} >Biographical</a>
          <a onClick={(event) => setGenre(4)} >Comedy</a>
          <a onClick={(event) => setGenre(5)} >Disaster</a>
          <a onClick={(event) => setGenre(6)} >Drama</a>
          <a onClick={(event) => setGenre(7)} >Epic</a>
          <a onClick={(event) => setGenre(8)} >Fantasy</a>
          <a onClick={(event) => setGenre(9)} >Musical</a>
          <a onClick={(event) => setGenre(10)} >Romantic</a>
          <a onClick={(event) => setGenre(11)} >Science Fiction</a>
          <a onClick={(event) => setGenre(12)} >Space-Opera</a>
          <a onClick={(event) => setGenre(13)} >Superhero</a>
          <button type='submit' onClick={() => addMovieData()}>Save</button>
          <button type='submit' onClick={() => goHome()}>Go to Homepage</button>
        </div>
      </div>
    </form>
   
    </center>
</section> */}