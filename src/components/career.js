import React from "react";
import Work from "./work.js";

import Roblox from "../images/roblox.png";
import MulletMafia from "../images/mulletmafia.png";

export default () => {
	return (
		<div class="work">
			<h1 class="work-main">Career</h1>

			<Work
				img={Roblox}
				title="Dev Rel Contractor"
				date="March 2021 - Present"
				info="Game development platform with millions of players"
				desc1="Contracted as a game technician to work with Developer Relations"
				desc2="Work with game developers in compliance with China"
				desc3="Solve solutions with open ended answers to create the best product"
				accomp1="Implement intricate localization systems for numerous games"
				accomp2="Helped game developers tweak their experiences to comply with China"
				accomp3="Provide help and answer any questions about game development and compliance"
			/>

			<br />

			<Work
				img={Roblox}
				title="Council Member"
				date="Dec 2020 - Present"
				info="Game development platform with millions of players"
				desc1="Work closely with Roblox in company decisions"
				desc2="Inform, prioritize, and escalate community feedback"
				desc3="Develop games with the support of the community and Roblox"
				accomp1="Voice the communities concerns and requests to prioritize what's desired"
				accomp2="Create exciting experiences with opportunities provided & relay feedback"
				accomp3="Develop connections with product management and other employees"
			/>

			<br />

			<Work
				img={MulletMafia}
				title="Project Manager"
				date="Dec 2020 - Present"
				info="Mullet Mafia is a development team on Roblox creating content and fun games"
				desc1="Design experiences for millions of players"
				desc2="Lead various projects to success by utilizing analytics and social features"
				desc3="Create and manage projects with a team of developers"
				accomp1="Over 30,000,000+ plays between games"
				accomp2="Designed, tested, and released unique experiences to the Roblox platform"
				accomp3="Collaborated with numerous developers on partnerships or events"
			/>

			<br />

			<Work
				img={Roblox}
				title="Intern"
				date="Sept 2020 - Dec 2020"
				info="Game development platform with millions of players"
				desc1="Design & create a game with 3 other interns"
				desc2="Lead programmer on systems and UI/UX"
				desc3="Work alongside Roblox's professional teams"
				accomp1="Designed a unique & creative game with the help of Roblox"
				accomp2="Developed a Lua library loader to streamline development"
				accomp3="Created various open source packages for Roblox gamedev"
			/>

			<br />

			<Work
				img={Roblox}
				title="Volunteer"
				date="Oct 2019 - Dec 2020"
				info="Game development platform with millions of players"
				desc1="Post Approval/Community Editor teams on the Developer Forums"
				desc2="Helped guide new developers to grow their skillset"
				desc3="Approved posts to help developers create insightful topics"
				accomp1="Helped the community on the platform"
				accomp2="Worked with Roblox directly to contribute to the forums"
				accomp3="Met new people & had a great time"
			/>
		</div>
	);
};
