import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
// import MoviesPage from '../MoviesPage/MoviesPage';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router> 
        {/* Think about setting up links to navigate to any page    */}
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path="/movieDetail" exact>
          <MovieDetails />
        </Route>
        {/* Add Movie page */}
        {/* <Route>
          <MoviePage />
        </Route> */}
      </Router>
    </div>
  );
}


export default App;
