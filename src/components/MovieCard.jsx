import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="box">
            <img className="" src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            <div className="title">{movie.Title}</div>

            <div className="description">
                <div className="description-title">{movie.Title} <span className="description-year">({movie.Year})</span></div>
                <div className="description-type">{movie.Type}</div>
            </div>
        </div>
    );
}

export default MovieCard;