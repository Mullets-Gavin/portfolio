import React, { useEffect } from "react";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import "../stylesheets/styles.css";
import Overview from "../components/overview.js";
import Games from "../components/games.js";

export default () => {
	useEffect(() => {
		document.title = "Mullets | Games";
	}, []);

	return (
		<div class="app" className="App">
			<div class="panel">
				<Header />

				<Overview
					title="Grand Library of Games"
					body="My collection of titles were games I created, helped develop, or have works included in.
                    Tasks I was to do for these games included general programming, systems programming,
                    and user-interface."
				/>
				<Games />

				<Footer />
			</div>
		</div>
	);
};
