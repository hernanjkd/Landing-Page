import React from "react";
import PropType from "prop-types";

const Card = props => {
	return (
		<div className="card" key={props.title}>
			<img
				className="card-img-top"
				src="https://lorempixel.com/400/300"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					{props.button}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropType.string,
	button: PropType.string
};

export default Card;
