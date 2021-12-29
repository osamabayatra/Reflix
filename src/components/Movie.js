import React, { Component } from 'react'
import '../styles/movie.css'
import { Link } from 'react-router-dom'



export default class Movie extends Component {

    constructor() {
        super()
        this.state = {
            // Rented: this.props.movie.isRented
        }
    }

    rentMovie = (e) => {
        let money, budget = this.props.bud;

        if (e.target.innerText == '+')
            money = -3
        else
            money = 3

        if (budget > 3) {
            console.log(budget);
            this.props.rentMovie(e.target.id)
            this.props.check()
            this.props.money(money)
        }

    }
    render() {
        let movie = this.props.movie
        return (

            <div className='the-movie'>

                <Link to={`/movies/${movie.id}`}>

                    <div className='movie' style={{ backgroundImage: "url(" + movie.img + ")" }}>
                    </div>
                </Link>

                <button id={movie.id} className='rent' onClick={this.rentMovie}>{movie.isRented ? '-' : '+'}</button>

            </div>
        )
    }
}
