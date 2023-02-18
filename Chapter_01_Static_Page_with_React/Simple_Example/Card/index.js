function Body(){
	return (
		<div>
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

function Header(){
	return (
		<header><img src="./reactlogo.png" width="60px"/></header>
		)
}

function Footer(){
	return (
		<footer><p>© Copyright reserve 2023 for development purposes only</p></footer>
		)
}

function Full(){
	return(
		<>
			<Header />
			<Body />
			<Footer />
		</>
		)
}

ReactDOM.render(
	<Full />,
	document.getElementById("root")
)