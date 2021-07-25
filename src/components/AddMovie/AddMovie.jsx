import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './AddMovie.css'

function AddMovie() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [url, setURL] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('')
    const genres = useSelector(store => store.genres);

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

<section>
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
</section>
    )
}

export default AddMovie;