import React, { useEffect } from "react";
import Accent from "../components/accent";
import Career from "../components/career";
import Games from "../components/games";
import Header from "../components/header";
import Socials from "../components/socials";
import Footer from "../components/footer";
import Title from "../components/title";
import Stats from "../components/stats";
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
					{/* <Title
						title="projects"
						body="I've worked on numerous projects over my career, from releasing 
						authentic and original intellectual property, to collaborating with 
						brands to bring them into the metaverse. I've worked with companies 
						such as Viacom, MTV, Super League, West Elm, and more."
					/> */}

					{/* <div className="space" /> */}
					<Games />

					<div className="space" />

					<Stats />
					<div className="space" />

					{/* <Title
						title="career"
						body="hi there, i'm Gavin. I'm a businessman, engineer, pilot, 
						skateboarder, and race car driver."
					/> */}

					{/* <div className="space" /> */}
					<Career />
					<div className="space" />

					<Footer />

					<div className="space" />
				</div>
			</div>
		</div>
	);
};
