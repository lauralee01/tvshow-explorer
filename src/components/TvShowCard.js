import React from 'react';

const TvShowCard = (props) => {
	return (
		<div className="movie-content">
			<div className="movie-title">
				<h3>{props.movie.Title}</h3>
			</div>
			<div className="movie-info">
				<label>Released</label>
				<span>{props.movie.Released}</span>
			</div>
			<div className="movie-info">
				<label>IMDB Rating</label>
				<span>{props.movie.imdbRating}</span>
			</div>
			<div className="movie-info">
				<label>Rated</label>
				<span>{props.movie.Rated}</span>
			</div>
			<div className="movie-info">
				<label>Runtime</label>
				<span>{props.movie.Runtime}</span>
			</div>
			<div style={{fontSize: '12px'}}>
				<p>{props.movie.Plot}</p>
			</div>
		</div>

	)
}

export default TvShowCard;