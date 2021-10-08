import React, { useEffect } from "react";
import Accent from "../components/accent";
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
				<br />
				<Header />
				<br />
				<Header />
				<br />
				<Header />
				<br />
				<Header />
				<br />
				<Header />
			</div>
		</div>
	);
};
