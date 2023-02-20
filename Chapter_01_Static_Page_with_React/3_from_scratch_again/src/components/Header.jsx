//import react from node-module folder
import React from "react"
import ReactDOM from "react-dom"

//importing assets
import logo from "../assets/img/reactlogo.png"

//function name can be different from the file name
//this file can contain more than one function component
export default function Header(){
	return(
		<header>
			<div className="left-header">
			<img src={logo} width="40px"/>
			<h1>ReactFacts</h1>
			</div>
			<h2>React Course - Project01</h2>
		</header>
		)
}