import React, { Component } from 'react'
import '../styles/catalog.css'
import Movie from './Movie'
import '../styles/movie.css'

export default class Catalog extends Component {

    constructor() {
        super()
        this.state = {
            isRentedSectionVisible: false,
            text: "",
            budget: 10
        }
    }

    checkIfRented = () => {
        let movies = this.props.state
        for (let m of movies)
            if (m.isRented) {
                this.setState({
                    isRentedSectionVisible: true
                })
                return
            }
        this.setState({
            isRentedSectionVisible: false
        })

    }

    modifyMovies = (e) => {
        this.setState({
            text: e.target.value
        }, function () {
            this.showMovies()
        })
    }

    showMovies = () => {
        let text = this.state.text,
            movies = [...this.props.state]
        movies = movies.filter(m => m.title.includes(text))
        if (!movies)
            return this.props.state
        return movies
    }

    handleBudget = (money) => {
        let budget = this.state.budget
        if (budget < 3 && money < 3)
            return
        budget += money
        this.setState({
            budget: budget
        })
    }

    render() {
        let movies = this.showMovies()
        let user = this.props.user[this.props.match.params.user];

        return (
            <div style={{ width: '90%' }}>
                {user ? <div className='name-container'><h2>{user.name}</h2></div> : <div></div>}
                <div className='search-bar'>
                    <input type="text" value={this.state.text} onChange={this.modifyMovies} className='search-input' placeholder='search Movie' />
                    <h3>budget : {this.state.budget}$</h3>
                </div>

                {/* Displaying the Rented Title on Page */}

                <div style={{
                    marginLeft: '30px', display: this.state.isRentedSectionVisible ? 'block' : 'none'
                }}>
                    <h2 >Rented:</h2>
                </div>

                <div className='rented-movie'>

                    {movies.map(m => {
                        return m.isRented ? <Movie user={user} bud={this.state.budget} money={this.handleBudget} key={m.id} check={this.checkIfRented} rentMovie={this.props.rentMovie} movie={m} /> : null

                    })}

                </div>

                <div style={{
                    marginLeft: '30px', display: this.state.isRentedSectionVisible ? 'block' : 'none'
                }}>
                    <hr />
                </div>

                <div className='movies'>

                    {movies.map(m => {
                        return (
                            <Movie user={user} bud={this.state.budget} money={this.handleBudget} key={m.id} check={this.checkIfRented} rentMovie={this.props.rentMovie} movie={m} />
                        )
                    })}

                </div>
            </div >
        )
    }
}
