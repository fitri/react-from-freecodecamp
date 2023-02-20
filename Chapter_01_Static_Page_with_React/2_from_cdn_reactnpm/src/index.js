import React from "react"
import ReactDOM from "react-dom"
import "./asset/css/index.css"
import reactlogo from "./asset/images/reactlogo.png"

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
			<img src={reactlogo}/>
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
	return (
		<div>
			<Header />
			<Body />
			<Footer />
		</div>
		)
}

ReactDOM.render(
	<Full/>,
	document.getElementById("root")
)