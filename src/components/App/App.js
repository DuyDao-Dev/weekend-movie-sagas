import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
// import Details from '../Details/Details';
// import MoviesPage from '../MoviesPage/MoviesPage';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        {/* <Route>
          <Details />
        </Route> */}
        {/* Add Movie page */}
        {/* <Route>
          <MoviePage />
        </Route> */}
      </Router>
    </div>
  );
}


export default App;
