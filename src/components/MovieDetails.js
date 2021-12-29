import React, { Component } from 'react'
import '../styles/movieDetails.css'
export default class MovieDetails extends Component {
    render() {
        let id = this.props.match.params.id
        let movie = this.props.movies.filter(m => m.id == id)[0]

        return (

            <div className='details'>

                <h1 className='title'>
                    {movie.title} ({movie.year})
                </h1>
                <img className='imgDetailed' src={movie.img} alt="" />
                <p>{movie.descrShort}</p>
            </div>
        )
    }
}
