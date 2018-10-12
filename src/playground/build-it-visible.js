let visibility = false;

const toggleVisibility = () => {
	visibility = !visibility;
	render();
}

const render = () => {
	const app = (
	<div>
		<h1>Visibility Toggle</h1>
		<button onClick={toggleVisibility}>
			{visibility ? "hide details" : "show details"}
		</button>
		{visibility && (
			<div>
				<p>Hey. These are some details you can now see!</p>
			</div>
			)}
	</div>
)
const appRoot = document.getElementById('app')
ReactDOM.render(app, appRoot);
}

render();