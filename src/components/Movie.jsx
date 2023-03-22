import { useEffect, useState } from 'react';
import Movie_card from './MovieCard';

const API_URL   =   'http://www.omdbapi.com/?apikey=84c0611b';

const Movie = (params) => {
    const [movies, setMovies]   =   useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const search_movies = async (title, type) => {
        const response  = await fetch (`${API_URL}&s=${title}&type=${type}`);
        const data      = await response.json();
        // console.log(data.Search);

        if (data.Search !== undefined) {
            setMovies(data.Search);
        } else {
            setMovies([]);
        }
    }

    useEffect(() => {
        let movie_type = params.movie_type ?? null;

        search_movies(null, movie_type);
    }, []);

    const on_search = (e) => {
        if (e.keyCode == 13) {
            let movie_type = params.movie_type ?? null;

            if (searchTerm.length > 0) {
                search_movies(searchTerm, movie_type);
            } else {
                search_movies(null, movie_type);
            }
        }
    }

    return (
        <>
            <div className="search">
                <input placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyUp={on_search} />
            </div>

            <div className="container">
                <div className="movie">
                    {
                        movies.length > 0 ? (
                            movies.map((movie) => (
                                    <Movie_card movie={movie} />
                                )
                            )
                        ) : (
                            <></>
                        )
                    }
                    
                </div>
            </div>
        </>
    );
}

export default Movie;