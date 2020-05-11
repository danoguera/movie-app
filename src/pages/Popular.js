import React from 'react';
import axios from 'axios';

function Movies({ movies }){
    return(
        <div className="movie">
            <h1>Popular</h1>
            {movies && movies.length > 0 && movies.map(movie => {
                return(
                    <div className="movie" key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p>{movie.release_date}</p>
                        <p>{movie.original_language}</p>
                        <p>{movie.overview}</p>
                    </div>
                )
            })}
        </div>
    )
}

class Popular extends React.Component{
    state = {
        movies: [],
        loading: true,
        error: false
    };

    componentDidMount(){
        axios({
            url: 'https://api.themoviedb.org/3/movie/popular?api_key=33b038077774615fe7300cdbc6edd93c&language=en-US&page=1',
            method: 'GET'
        })
        .then((response) => {
            this.setState({ movies: response.data.results})
        })
        .catch((error) => {
            this.setState({ error: true })
        })
        .finally(() => {
            this.setState({ loading: false })
        })
    }

    render(){
        if(this.state.loading) return <p>Loading...</p>;
        if(this.state.error) return <p>Oops! Something went wrong!</p>
        return(
            <div className="NowPlaying">
                <Movies movies={this.state.movies} />
            </div>
        )
    }
}

export default Popular;