import React, {Component} from 'react';
import axios from 'axios';

import TvShowCard from './TvShowCard';
import Search from './Search';

export default class TvShowForm extends Component {
	state = {
		movieId: 'tt3222784', //default imdb id(Silicon Valley)
		title: "",
		movie: {},
		searchResults: [],
		isSearching: false
	}

	componentDidMount() {
		this.loadMovie()
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevState.movieId !== this.state.movieId) {
			this.loadMovie()
		}
	}

	loadMovie() {
		axios.get(`http://www.omdbapi.com/?i=tt33222784%plot=short&r=json&i=${this.state.movieId}`)
			.then(response => {
				this.setState({ movie: response.data});
			})
			.catch(error => {
				console.log('Oops!', error.message);
			})
	}

 timeout = null;

 searchMovie = (event) => {
 	this.setState({ 
 		title: event.target.value, 
 		isSearching: true
 	})

 	clearTimeout(this.timeout);

 	this.timeout = setTimeout(() => {
 		axios.get(`http://www.omdbapi.com/?t=Silicon%20Valley&Season=1=${this.state.title}`)
 			.then(response => {
 				if(response.data.Search) {
 					const movies = response.data.Search.slice(0, 5);
 					this.setState({ searchResults: movies });
 				}
 			})
 			.catch(error => {
 				console.log('Oops!', error.message);
 			})
 	}, 1000)
 }

 itemClicked = (item) => {
 	this.setState({
 		movieId: item.imdbID,
 		isSearching: false,
 		title: "item.Title"
 	})
 }

 changeState = () => {
 	this.setState({
 		isSearching: false
 	})
 }

	render() {
		return (
			<div onClick={this.changeState}>
				<Search
					defaultTitle={this.state.title}
					search={this.searchMovie}
					results={this.state.searchResults}
					clicked={this.itemClicked}
					searching={this.state.isSearching} />

				<TvShowCard movie={this.state.movie} />
			</div>
			);
	}
}