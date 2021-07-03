import React, { useEffect } from "react";
import "../stylesheets/styles.css";

import BioCard from "../components/bioCard";
import GameCard from "../components/gameCard";
import CareerCard from "../components/careerCard";

import captive from "../images/captive.png";
import armtastic from "../images/armtastic.png";
import caserush from "../images/caserush.png";
import spellcaster from "../images/spellcaster.png";
import robloxbrand from "../images/robloxbrand.png";
import mulletmafia from "../images/mulletmafia.png";
import sonarstudios from "../images/sonarstudios.png";

export default () => {
	useEffect(() => {
		document.title = "Mullets";
	}, []);

	return (
		<div className="page">
			<div className="primary">
				<BioCard />
				<CareerCard
					company="Sonar Studios"
					job="Project Manager"
					desc="Contracted to work with the LouBu Roblox China team to 
					publish global games into the China catalog by providing 
					technical support and game design knowledge. Some of my tasks 
					include working with engineers, providing technical game support, 
					and helping games comply to publish into China."
					icon={sonarstudios}
					dates="July 2021 - Present"
				/>
				<CareerCard
					company="Roblox"
					job="Developer Insights Contractor"
					desc="Contracted to work with the LouBu Roblox China team to 
					publish global games into the China catalog by providing 
					technical support and game design knowledge. Some of my tasks 
					include working with engineers, providing technical game support, 
					and helping games comply to publish into China."
					icon={robloxbrand}
					dates="March 2021 - Present"
				/>
				<CareerCard
					company="Roblox"
					job="Developer Council Member"
					desc="A volunteer program for select users who can provide valuable feedback
					to the Roblox platform to make product decisions and represent the developer
					community. Developed connections with engineers, product, and developer relations
					and helped prioritized feedback and bug reports in an appropriate fashion."
					icon={robloxbrand}
					dates="December 2020 - April 2021"
				/>
				<CareerCard
					company="Roblox"
					job="Accelerator Intern"
					desc="Taking part in Roblox's accelerator internship, I worked with a team of 
					developers to create and design a game. My tasks included working on user-interface
					and user-experience & lead programmer for game systems. "
					icon={robloxbrand}
					dates="September 2020 - December 2020"
				/>
				<CareerCard
					company="Mullet Mafia"
					job="Director of Product"
					desc="A development team I founded to create fun experiences on the platform 
					Roblox. As director of product, I oversee the development of games, systems, 
					and teams to release experiences that are captivating and exciting. Mullet Mafia has
					garnered over 30m+ plays in total, with over 270,000 fans."
					icon={mulletmafia}
					dates="December 2019 - Present"
				/>
				<CareerCard
					company="Roblox"
					job="Developer Volunteer"
					desc="Former Post Approval and Community Editor volunteer hand-selected to help guide 
					new developers to grow their skill set on the Roblox platform. Tasks included approving 
					feature requests or bug reports, as well as QA reproducing these bugs for the engineers
					to work quickly in tackling real bugs, and helped approve posts to create insightful topics."
					icon={robloxbrand}
					dates="October 2019 - December 2020"
				/>
			</div>
			<div className="secondary">
				<GameCard
					image={captive}
					name="Captive"
					content="32.5m+ Plays"
					play="https://www.roblox.com/games/3388553819/Captive"
				/>
				<GameCard
					image={armtastic}
					name="Armtastic!"
					content="100k+ Plays"
					play="https://www.roblox.com/games/6242582774/Armtastic-Alpha"
				/>
				<GameCard
					image={caserush}
					name="Case Rush"
					content="140k+ Plays"
					play="https://www.roblox.com/games/3836677462/Case-Rush"
				/>
				<GameCard
					image={spellcaster}
					name="Spellcaster Sim"
					content="30k+ Plays"
					play="https://www.roblox.com/games/2755360250/Spellcaster-Simulator"
				/>
			</div>
		</div>
	);
};
