import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MoviesPage.css'

function MoviesPage () {

    const genres = useSelector(store => store.genres);
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [posterUrl, setPosterUrl] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    
    const handleNewMovie = (event) => {
        console.log('event happened', event.target.id);

    }

    return (
        <form>
          <input
          id="title"
            type="text"
            placeholder="Movie Title"
            value={title}
            onChange={handleNewMovie}
          />
          <input
          id="posterUrl"
            type="text"
            placeholder="Movie Title"
            value={posterUrl}
            onChange={handleNewMovie}
          />          <input
          id="description"
            type="text"
            placeholder="Movie Title"
            value={description}
            onChange={handleNewMovie}
          />          
            <div className="dropdown">
                <button className="dropbtn">Dropdown</button>
                    <div className="dropdown-content">
                        <a href="#" onClick={(event) => setGenre(1)}>Adventure</a>
                        <a href="#" onClick={(event) => setGenre(2)}>Animated</a>
                        <a href="#" onClick={(event) => setGenre(3)}>Biographical</a>
                        <a href="#" onClick={(event) => setGenre(4)}>Comedy</a>
                        <a href="#" onClick={(event) => setGenre(5)}>Disaster</a>
                        <a href="#" onClick={(event) => setGenre(6)}>Drama</a>
                        <a href="#" onClick={(event) => setGenre(7)}>Epic</a>
                        <a href="#" onClick={(event) => setGenre(8)}>Fantasy</a>
                        <a href="#" onClick={(event) => setGenre(9)}>Musical</a>
                        <a href="#" onClick={(event) => setGenre(10)}>Romantic</a>
                        <a href="#" onClick={(event) => setGenre(11)}>Science Fiction</a>
                        <a href="#" onClick={(event) => setGenre(12)}>Space-Opera</a>
                        <a href="#" onClick={(event) => setGenre(13)}>Superhero</a>
                    </div>
            </div>
        </form>
    )
}

export default MoviesPage;