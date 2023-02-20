//import react from node-module folder
import React from "react"
import ReactDOM from "react-dom"

//importing assets
import logo from "../assets/img/reactlogo.png"

export default function Content(){
	return(
		<div>
			<div>
				<h1>Fun facts about ReactJS!</h1>
			</div>
			<div className="fact-list">
				<ul>
					<li>Was first released in 2013</li>
					<li>Was originally created by Jordan Walke</li>
					<li>Has well over 100K starts on Github</li>
					<li>Is maintained by Facebook teams</li>
					<li>Powers thousands of enterprise level apps including mobile</li>
				</ul>
			</div>
		</div>
		)
}
