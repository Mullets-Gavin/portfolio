import React, { useEffect } from "react";
import Accent from "../components/accent";
import Career from "../components/career";
import Games from "../components/games";
import Header from "../components/header";
import Title from "../components/title";
import "../stylesheets/styles.css";

export default () => {
	useEffect(() => {
		document.title = "Mullets | Gavin Rosenthal";
	}, []);

	return (
		<div>
			<Accent />

			<div className="document">
				<div className="page">
					<div className="space" />
					<Header />
					{/* <div className="space" />
				<Title title="My Games" /> */}
					<div className="space" />
					<Games />
					{/* <div className="space" />
				<Title title="My Career" /> */}
					<div className="space" />
					<Career />
					<div className="space" />
				</div>
			</div>
		</div>
	);
};
