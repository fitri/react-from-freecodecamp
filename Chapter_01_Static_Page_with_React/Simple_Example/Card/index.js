function Body(){
	return (
		<div>
			<h1>Fun Facts about React</h1>
			<ol>
				<li>Was released in 2013</li>
				<li>Was originally created by Jordan Walke</li>
				<li>Has over 100K star on Github</li>
				<li>Is maintained by Facebook</li>
				<li>Powered thousand of enterprise apps including mobile apps</li>
			</ol>
		</div>
		)
}

function Header(){
	return (
		<header>
		<nav className="nav-bar">
			<img src="./reactlogo.png"/>
			<ul className="nav-items">
				<li>About</li>
				<li>Pricing</li>
				<li>More</li>
			</ul>
		</nav>
		</header>
		)
}

function Footer(){
	return (
		<footer><small>© Copyright reserve 2023 for development purposes only.</small></footer>
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