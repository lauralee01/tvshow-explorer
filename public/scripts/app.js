'use strict';

console.log('App.js is running!');

var heading = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of God'

	// JSX - Javascript XML 
};var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		heading.title
	),
	React.createElement(
		'p',
		null,
		heading.subtitle
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item one'
		),
		React.createElement(
			'li',
			null,
			'Item two'
		)
	)
);

var user = {
	name: 'Anna',
	age: 26,
	location: 'Hamburg'
};
var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name
	),
	React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	React.createElement(
		'p',
		null,
		'Location: ',
		user.location
	)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
