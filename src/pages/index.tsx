import React, { useEffect } from "react";
import Accent from "../components/accent";
import Games from "../components/games";
import Header from "../components/header";
import "../stylesheets/styles.css";

export default () => {
	useEffect(() => {
		document.title = "Mullets | Gavin Rosenthal";
	}, []);

	return (
		<div>
			<Accent />

			<div className="document">
				<div className="space" />
				<Header />
				<div className="space" />
				<Games />
				<div className="space" />
			</div>
		</div>
	);
};
