import React from "react";
import PropTypes from "prop-types";

const Nav = props => {
	let arr = props.buttons;

	let buttonDivs = arr.map(item => {
		return (
			<a className="nav-item nav-link" href="#" key={item}>
				{item}
			</a>
		);
	});

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
			<a className="navbar-brand" href="#">
				Start Bootstrap
			</a>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav">{buttonDivs}</div>
			</div>
		</nav>
	);
};

Nav.propTypes = {
	buttons: PropTypes.array
};

export default Nav;
