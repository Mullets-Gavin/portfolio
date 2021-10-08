import React, { Component } from "react";

import captive from "../images/captive.png";
import armtastic from "../images/armtastic.png";
import caserush from "../images/caserush.png";
import spellcaster from "../images/spellcaster.png";

interface GamesState {}
interface GamesProps {}

export default class Games extends Component<GamesProps, GamesState> {
	render() {
		return (
			<div className="grid">
				<a
					className="btn"
					href="https://www.roblox.com/games/3388553819"
					target="_blank"
				>
					<img className="card-img corner" src={captive} />
				</a>

				<a
					className="btn"
					href="https://www.roblox.com/games/6242582774"
					target="_blank"
				>
					<img className="card-img corner" src={armtastic} />
				</a>

				<a
					className="btn"
					href="https://www.roblox.com/games/3836677462"
					target="_blank"
				>
					<img className="card-img corner" src={caserush} />
				</a>

				<a
					className="btn"
					href="https://www.roblox.com/games/2755360250"
					target="_blank"
				>
					<img className="card-img corner" src={spellcaster} />
				</a>
			</div>
		);
	}
}
