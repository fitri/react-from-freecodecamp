function Body(){
	return (
		<div>
			<img src="./reactlogo.png" width="60px"/>
			<h1>Fun Facts about React</h1>
			<ul>
				<li>Was released in 2013</li>
				<li>Was originally created by Jordan Walke</li>
				<li>Has over 100K star on Github</li>
				<li>Is maintained by Facebook</li>
				<li>Powered thousand of enterprise apps including mobile apps</li>
			</ul>
		</div>
		)
}

ReactDOM.render(
	<Body />,
	document.getElementById("root")
)