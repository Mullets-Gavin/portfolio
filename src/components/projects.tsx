import React, { Component } from "react";

import codeicon from "../images/code_icon.png";
import atlas_suite from "../images/atlas_suite.png";

interface GamesState {}
interface GamesProps {}

export default class Games extends Component<GamesProps, GamesState> {
	render() {
		return (
			<div className="grid">
				<a
					className="btn application-frame corner"
					href="https://www.roblox.com/games/17427651911/The-Classic"
					target="_blank"
				>
					<img className="application-banner"  src={atlas_suite}/>
					
					<div className="application-padding">
						{/* <img className="card-img corner" src={theclassic} /> */}
						<div className="application-title">
							<img className="application-icon"  src={codeicon}/>
							<h2>Atlas Suite</h2>
						</div>
						<p>Designed to take back control of your Roblox Studio
							by accessing a suite of tools built with top experience</p>
					</div>
				</a>
			</div>
		);
	}
}
