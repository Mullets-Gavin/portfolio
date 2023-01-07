import React, { Component } from "react";

import twitter from "../images/twitter.png";
import roblox from "../images/roblox.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import instagram from "../images/instagram.png";

interface SocialsState {}
interface SocialsProps {}

export default class Socials extends Component<SocialsState, SocialsProps> {
	render() {
		return (
			<div className="contact">
				<div className="application corner">
					<a
						className="application-button corner"
						href={"https://www.linkedin.com/in/gavin-mullets-rosenthal/"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="application-img"
							alt={"name"}
							src={linkedin}
						/>
					</a>
				</div>

				<div className="application corner">
					<a
						className="application-button corner"
						href={"https://twitter.com/Mullets_Gavin"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="application-img"
							alt={"name"}
							src={twitter}
						/>
					</a>
				</div>

				<div className="application corner">
					<a
						className="application-button corner"
						href={"https://www.roblox.com/users/46522586/profile"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="application-img"
							alt={"name"}
							src={roblox}
						/>
					</a>
				</div>

				<div className="application corner">
					<a
						className="application-button corner"
						href={"https://github.com/Mullets-Gavin"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="application-img"
							alt={"name"}
							src={github}
						/>
					</a>
				</div>

				<div className="application corner">
					<a
						className="application-button corner"
						href={"https://www.instagram.com/mullets_gavin/"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="application-img"
							alt={"name"}
							src={instagram}
						/>
					</a>
				</div>
			</div>
		);
	}
}
