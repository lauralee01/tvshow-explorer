import React, {Component} from 'react';
import axios from 'axios';

export default class TvShowForm extends Component {
	state = {
		movieId: tt3222784,
		title: "",
		movie: {}
	}

	componentDidMount() {
		this.loadMovie()
	}

	loadMovie() {
		axios.get(`http://www.omdbapi.com/?t=Silicon%20Valley&Season=1=${this.state.movieId}`)
			.then(response => {
				this.setState({movie: response.data});
			})
			.catch(error => {
				console.log('Oops!', error.message);
			})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.loadMovie}>
					<label>
						Name: 
						<input type="text" name="name" />
					</label>
					<input type="submit" value="Submit" />

				</form>

			</div>
			)
	}
}