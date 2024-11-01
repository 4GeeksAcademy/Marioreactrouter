import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">HOME</span>
			</Link>
			<div className="ml-auto">
				<Link to="/addContacts">
					<button className="btn btn-primary">addContacts</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/contacts">
					<button className="btn btn-primary">Agenda</button>
				</Link>
			</div>
		</nav>
	);
};
