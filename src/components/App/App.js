import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovie from '../AddMovie/AddMovie';
import Navigation from '../Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Navigation />
        <nav>
          <li>
            <Link to="/">Movies</Link>
          </li>
          <li>
            <Link to="/movieDetail">Movie Details</Link>
          </li>
          <li>
            <Link to="/addMovie">Add Movies</Link>
          </li>
        </nav>
        {/* Think about setting up links to navigate to any page    */}
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/movieDetail" exact>
          <MovieDetails />
        </Route>
        {/* Add Movie page */}
        <Route path="/addMovie" exact>
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
