import React, { useEffect } from "react";
import Accent from "../components/accent";
import Career from "../components/career";
import Games from "../components/games";
import Projects from "../components/projects";
import Header from "../components/header";
import Socials from "../components/socials";
import Footer from "../components/footer";
import Title from "../components/title";
import Stats from "../components/stats";
import Consulting from "../components/consulting";
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

					<div className="space" />

					<Socials />

					<div className="space" />

					<Games />

					<div className="space" />

					<Stats />

					<div className="space" />

					<Career />

					<div className="space" />

					<Footer />

					<div className="space" />
				</div>
			</div>

			<Accent />
		</div>
	);
};
