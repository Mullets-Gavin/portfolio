import React from "react";
import "../stylesheets/styles.css";
import banner from "../images/banner.png";
import SocialLink from "./socialLinks";

interface CardProps {}

export default class BioCard extends React.Component<CardProps> {
	constructor(props: CardProps) {
		super(props);
	}

	render() {
		return (
			<div className="frame">
				<img className="image" src={banner} alt="banner" />
				<h1>Gavin Rosenthal</h1>
				<p>
					I've been an aspiring programmer and game designer ever
					since I was introduced to the game platform Roblox in 2013
					at the age of twelve. Previously, I’ve volunteered at Roblox
					as a member of their Post Approval team in their forums,
					which aims to help users who are starting their Roblox
					careers to receive the help and knowledge needed to create
					insightful posts and to learn new skills. I’m also a former
					intern at the company as an accelerator, where I worked on
					creating an immersive experience in Roblox alongside some of
					the best people in the industry, such as professional game
					designers, product managers, and engineers.
				</p>
				<br />
				<p>
					I’m completely self-taught, and I aspire to perfect my craft
					by practicing & learning new languages and software, such as
					React. My interests include puzzle solving, creating open
					source software, and designing & creating websites. When I’m
					not programming, I like to go for long walks, watch movies
					with friends, and play Apex Legends.
				</p>

				<div className="socials">
					<SocialLink
						social="twitter"
						link="https://twitter.com/Mullets_Gavin"
						title="Follow me on Twitter"
					/>
					<SocialLink
						social="github"
						link="https://github.com/Mullets-Gavin"
						title="View my software on GitHub"
					/>
					<SocialLink
						social="linkedin"
						link="https://www.linkedin.com/in/gavin-mullets-rosenthal"
						title="Connect with me on LinkedIn"
					/>
					<SocialLink
						social="roblox"
						link="https://www.roblox.com/users/46522586/profile"
						title="Check out my Roblox account"
					/>
					<SocialLink
						social="discord"
						link="https://discord.gg/dqvMK4HXde"
						title="Join my Discord"
					/>
				</div>
			</div>
		);
	}
}
