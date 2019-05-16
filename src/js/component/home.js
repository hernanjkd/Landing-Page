import React from "react";
import Jumbo from "./jumbotron.jsx";
import Nav from "./nav-bar.jsx";
import Card from "./card.jsx";

export class Home extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Nav buttons={["Home", "About", "Services", "Contact"]} />
				<Jumbo
					main="A Warm Welcome!"
					content="This is a simple hero unit, a simple jumbotron-style component
					for calling extra attention to featured content or information."
					button="Call to action!"
				/>
				<Card title="Great Card" button="Activate" />
			</div>
		);
	}
}
