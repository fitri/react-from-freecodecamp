// Using function to group element for reusable, write a function with name and return the html element
// React function use className not class as the normal html
function Listing() {
	return(
		<ul className="list lesson">
			<li>Import react from the CDN</li>		
			<li>Import babel and overwrite the script to type text/babel</li>
			<li>Create a root element div id tag to place react element</li>
			<li>Using React.dom find specify element and id to place the element</li>
		</ul>
		)
}

// ReactDOM(html to render, location to render)
// Now we can call the above newly reacted react component with custom react tag <Listing/>
ReactDOM.render(
	<div>
	<h1>Lesson Notes</h1>
		<Listing/>
	</div>,
	document.getElementById("root")
);