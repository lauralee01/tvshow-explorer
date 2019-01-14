import React, {Component} from 'react';
import Header from './Header';
import TvShowForm from './TvShowForm';

export default class TvShowExplorer extends Component {
	render() {
		const title = 'A TvShow-Explorer';
		return (
			<div>
				<Header title={title}/>
				<TvShowForm />	
			</div>
		)
		
	}
} 