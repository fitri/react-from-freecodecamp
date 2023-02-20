import React from "react"

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

export default Header