import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Landing from './components/Landing'
import Catalog from './components/Catalog'
import './styles/app.css'
import Users from './data/users.json'
import Movies from './data/movies.json'
import MovieDetails from './components/MovieDetails'
export default class App extends Component {

  constructor() {
    super()
    this.state = {
      users: Users,
      movies: Movies
    }
  }

  rentMovie = (movieId) => {
    let movies = [...this.state.movies]

    movies.find(m => m.id == movieId).isRented = !movies[movieId].isRented;

    this.setState({
      movies: movies
    })

  }

  render() {
    let state = this.state
    return (
      <Router>
        <div className='App'>
          <div className='nav-bar'>
            <div className='links'>
              <Link to="/"><h2>Home</h2></Link>
              <Link to="/catalog"><h2>Catalog</h2></Link>
            </div>

            <h2 className='logo'>REFLIX</h2>
          </div>
          <div className='routes'>
          </div>
          <Route exact path="/" render={() => <Landing state={state.users} />} />
          <Route exact path="/catalog/:user?" render={({ match }) => <Catalog match={match} rentMovie={this.rentMovie} user={state.users} state={state.movies} />} />
          <Route exact path="/movies/:id" render={({ match }) => <MovieDetails movies={state.movies} match={match} />} />
        </div>


      </Router>
    )
  }
}
