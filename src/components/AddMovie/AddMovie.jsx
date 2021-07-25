import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './AddMovie.css'

function AddMovie () {

    const genres = useSelector(store => store.genres);
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [posterUrl, setPosterUrl] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    
    const genreHandler = [{value: 0, 
      label: "Select An Option"}, 
      {value: 1, label: "Adventure"}, 
      {value: 2, label: "Animated"}, 
      {value: 3, label: "Biographical"}, 
      {value: 4, label: "Comedy"}, 
      {value: 5, label: "Disaster"}, 
      {value: 6, label: "Drama"}, 
      {value: 7, label: "Epic"}, 
      {value: 8, label: "Fantasy"}, 
      {value: 9, label: "Musical"}, 
      {value: 10, label: "Romantic"}, 
      {value: 11, label: "Science Fiction"}, 
      {value: 12, label: "Space-Opera"}, 
      {value: 13, label: "Superhero"}
    ];


    const handleNewMovie = (event) => {
        dispatch({ type: "ADD_MOVIE"})
        console.log('event happened', event.target.id);

    }

    return (
        <form>
          <input
          id="title"
            type="text"
            placeholder="Movie Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
          id="posterUrl"
            type="text"
            placeholder="Movie URL"
            value={posterUrl}
            onChange={(event) => setPosterUrl(event.target.value)}
          />          <input
          id="description"
            type="text"
            placeholder="Movie Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />          
            <div className="dropdown">
                <button className="dropbtn">Dropdown</button>
                    <div className="dropdown-content">
                        <a href="#" onClick={(event) => genreHandler(1)}>Adventure</a>
                        <a href="#" onClick={(event) => genreHandler(2)}>Animated</a>
                        <a href="#" onClick={(event) => genreHandler(3)}>Biographical</a>
                        <a href="#" onClick={(event) => genreHandler(4)}>Comedy</a>
                        <a href="#" onClick={(event) => genreHandler(5)}>Disaster</a>
                        <a href="#" onClick={(event) => genreHandler(6)}>Drama</a>
                        <a href="#" onClick={(event) => genreHandler(7)}>Epic</a>
                        <a href="#" onClick={(event) => genreHandler(8)}>Fantasy</a>
                        <a href="#" onClick={(event) => genreHandler(9)}>Musical</a>
                        <a href="#" onClick={(event) => genreHandler(10)}>Romantic</a>
                        <a href="#" onClick={(event) => genreHandler(11)}>Science Fiction</a>
                        <a href="#" onClick={(event) => genreHandler(12)}>Space-Opera</a>
                        <a href="#" onClick={(event) => genreHandler(13)}>Superhero</a>
                        <button>Add Movie</button>
                    </div>
            </div>
        </form>
    )
}

export default AddMovie;