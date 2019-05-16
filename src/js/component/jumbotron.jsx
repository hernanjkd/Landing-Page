import React from "react";
import PropTypes from "prop-types";

const Jumbo = props => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">{props.main}</h1>
			<p className="lead">{props.content}</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				{props.button}
			</a>
		</div>
	);
};

Jumbo.propTypes = {
	main: PropTypes.string,
	button: PropTypes.string,
	content: PropTypes.string
};

export default Jumbo;
