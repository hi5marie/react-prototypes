import React, {Component} from 'react';
import Movie from './movies';
import axios from 'axios';

class MoviesContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            movies: []
        }
    }

    componentDidMount(){
        // const url = axios.get('http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json').then((response)=>{ });

        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(url).then( (resp)=>{
            // console.log('Resp:', resp);

            this.setState({
                movies: resp.data.feed.entry
            })
        });
    }

    render(){
        console.log('render this.state:', this.state);
        return (

            <div>
                <h2>Movie Container</h2>
                <Movie/>
            </div>
        )

    }
}

export default MoviesContainer;


