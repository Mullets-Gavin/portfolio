import React from "react";
import { Link } from "gatsby";

export default () => {
	return (
		<div class="header">
			<h2 class="header-title">Mullets.xyz</h2>

			<div>
				<Link
					activeClassName="header-button"
					class="header-button"
					to="/"
				>
					Home
				</Link>
				<Link
					activeClassName="header-button"
					class="header-button"
					to="/games"
				>
					Games
				</Link>
				<Link
					activeClassName="header-button"
					class="header-button"
					to="/software"
				>
					Software
				</Link>
				<Link
					activeClassName="header-button"
					class="header-button"
					to="/contact"
				>
					Contact
				</Link>
			</div>
		</div>
	);
};
