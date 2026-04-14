import React, { Component } from "react";

import x from "../images/x.png";
import roblox from "../images/roblox.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
import letterboxd from "../images/letterboxd.png";
import tiktok from "../images/tiktok.png";
import facebook from "../images/facebook.png";
import email from "../images/email.png";

interface SocialsState {}
interface SocialsProps {}

export default class Socials extends Component<SocialsState, SocialsProps> {
	render() {
		return (
			<div className="contact" style={{ "--items-per-row": 5 }}>
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
						href={"https://x.com/Mullets_Gavin"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="application-img"
							alt={"name"}
							src={x}
						/>
					</a>
				</div>

				<div className="application corner">
					<a
						className="application-button corner"
						href={"https://letterboxd.com/Mullets/"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="application-img"
							alt={"name"}
							src={letterboxd}
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

				<div className="application corner">
					<a
						className="application-button corner"
						href={"https://www.facebook.com/gavin.rosenthal.3"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="application-img"
							alt={"name"}
							src={facebook}
						/>
					</a>
				</div>

				<div className="application corner">
					<a
						className="application-button corner"
						href={"https://www.tiktok.com/@mullets_gavin"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="application-img"
							alt={"name"}
							src={tiktok}
						/>
					</a>
				</div>

				<div className="application corner">
					<a
						className="application-button corner"
						href={"https://www.youtube.com/@mullets_gavin"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="application-img"
							alt={"name"}
							src={youtube}
						/>
					</a>
				</div>

				<div className="application corner">
					<a
						className="application-button corner"
						href={"mailto:gavin@mullets.xyz"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="application-img"
							alt={"name"}
							src={email}
						/>
					</a>
				</div>
			</div>
		);
	}
}
