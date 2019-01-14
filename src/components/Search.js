import React from 'react';

const Search = (props) => {
	let resultList = null

	if(props.searching && (props.defaultTitle !== '')) {
		resultList = (
			<ul>
				{props.results.map(item => (
					<li key={item.imdbID} onClick={() => props.clicked(item)}>
							{item.Title}
					</li>
					))}
			</ul>
		)
	}

	return (
		<div>
			<input type="search" name="movie-search" value={props.defaultTitle} onChange={props.search} />
				{resultList}
		</div>
	)
}

export default Search;