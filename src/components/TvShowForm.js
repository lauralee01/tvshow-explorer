import React, {Component} from 'react';

export default class TvShowForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			listData: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		this.handleSubmit();
	}
	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	handleSubmit() {
		const ids = [1, 2, 3, 4, 5];

		let listData = [];
		ids.forEach(id => 
			fetch("https://www.omdbapi.com/?t=Silicon%20Valley&Season=1" + id)
				.then(resp => resp.json())
				.then(show => {
					listData.push(show);
				})
				.catch(err => console.log(err))
		);

		this.setState({
			listData: listData.sort((a, b) => a - b)
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name: 
							<input type="text" value={this.state.value} onChange={this.handleChange} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
}