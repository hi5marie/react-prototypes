import React, {Component} from 'react';
import Movie from './movies';

class MoviesContainer extends Component {

    render(){
        return (

            <div>
                <h2>Movie Container</h2>
                <Movie/>
            </div>
        )

    }
}

export default MoviesContainer;


