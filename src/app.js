console.log('App.js is running!');

var heading = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of God'
}

// JSX - Javascript XML 
var template = (
	<div>
		<h1>{heading.title}</h1> 
		<p>{heading.subtitle}</p>
		<ol>
			<li>Item one</li>
			<li>Item two</li>
		</ol>
	</div>
);

var user = {
	name: 'Anna',
	age: 26,
	location: 'Hamburg'
}
var templateTwo = (
	<div>
		<h1>{user.name}</h1>
		<p>Age: {user.age}</p>
		<p>Location: {user.location}</p>
	</div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);