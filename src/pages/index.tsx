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
import Brands from "../components/brands";
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

					{/* <Title title="Socials" /> */}

					<Socials />

					<div className="space" />

					<Title title="Games" />

					<Games />

					<div className="space" />

					<Title title="Brands" />

					< Brands />

					<div className="space" />

					{/* <Title title="Stats" px="12px" />

					<Stats />

					<div className="space" /> */}

					<Title title="Career" px="12px" />

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
