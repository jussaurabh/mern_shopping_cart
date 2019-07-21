import React from 'react';
import { NavLink } from 'react-router-dom';

function AppNavbar() {
	return (
		<nav>
			<div className="container">
				<div className="nav-wrapper">
					<NavLink to="/" className="brand-logo">
						Shopping List
					</NavLink>
				</div>
			</div>
		</nav>
	);
}

export default AppNavbar;
