import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchGenres);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store movie details
const movieDetails = (state = 0, action) => {
  if (action.type === "MOVIE_DETAILS") {
    return (state = action.payload);
  }
  return state;
};

// Add Sagas for GET and POST
function* fetchAllMovies() {
  // get all movies from the DB
  try {
    const movies = yield axios.get("/api/movie"); //const movie is like const response
    console.log("get all:", movies.data);
    yield put({ type: "SET_MOVIES", payload: movies.data });
  } catch {
    console.log("get all error");
  }
}


function* fetchGenres() {
  try {
    const genres = 
    yield axios.get(`/api/genre/`);
    yield put({ type: "SET_GENRES", payload: response.data });
    console.log("GETting data from GET Saga", response.data);
  } catch (error) {
    console.log("Error GETing genres", error);
  }
}

// Do I really need a 3rd Saga? fetchAllMovies should pull in all the data from movie table.
// function* fetchDetails() {
//   try {
//     const genres = yield axios.get(`/api/movies/`);
//     yield put({ type: "MOVIE_DETAILS", payload: response.data });
//     console.log("GETting data from GET Saga", response.data);
//   } catch (error) {
//     console.log("Error GETing genres", error);
//   }
// }

// function* postGenres(action) {
//   try {
//     const genres = 
//     yield axios.post(`/api/genre/`, action.payload);
//     yield put({ type: "FETCH_GENRES" });
//     console.log("GETting data from GET Saga", response.data);
//   } catch (error) {
//     console.log("Error GETing genres", error);
//   }
// }

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieDetails,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
