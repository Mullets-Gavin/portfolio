import React, { Component } from "react";

import miningfactory from "../images/miningfactory.png";
import mergezoo from "../images/mergezoo.png";
import captive from "../images/captive.png";
import armtastic from "../images/armtastic.png";
import caserush from "../images/caserush.png";
import spellcaster from "../images/spellcaster.png";

import driveworld from "../images/driveworld.png";
import windsoffortune from "../images/windsoffortune.png";
import westelm from "../images/westelm.png";
import vmaexperience from "../images/vmaexperience.png";
import superleaguearcade from "../images/superleaguearcade.png";

import sunnyshores from "../images/sunnyshores.png";
import tastyfarms from "../images/tastyfarms.png";
import teenwolf from "../images/teenwolf.png";

interface GamesState {}
interface GamesProps {}

export default class Games extends Component<GamesProps, GamesState> {
	render() {
		return (
			<div className="grid">
				<a
					className="btn"
					href="https://www.roblox.com/games/12717051222"
					target="_blank"
				>
					<img className="card-img corner" src={miningfactory} />
				</a>
				
				<a
					className="btn"
					href="https://www.roblox.com/games/13742128145"
					target="_blank"
				>
					<img className="card-img corner" src={mergezoo} />
				</a>

				<a
					className="btn"
					href="https://www.roblox.com/games/3388553819"
					target="_blank"
				>
					<img className="card-img corner" src={captive} />
				</a>
				
				<a
					className="btn"
					href="https://www.roblox.com/games/7714627632"
					target="_blank"
				>
					<img className="card-img corner" src={windsoffortune} />
				</a>

				<a
					className="btn"
					href="https://www.roblox.com/games/10704789056"
					target="_blank"
				>
					<img className="card-img corner" src={driveworld} />
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

				<a
					className="btn"
					href="https://www.roblox.com/games/11864182128"
					target="_blank"
				>
					<img className="card-img corner" src={teenwolf} />
				</a>

				<a
					className="btn"
					href="https://www.roblox.com/games/9680886326"
					target="_blank"
				>
					<img className="card-img corner" src={westelm} />
				</a>

				<a
					className="btn"
					href="https://www.superleague.com/"
					target="_blank"
				>
					<img className="card-img corner" src={superleaguearcade} />
				</a>

				<a
					className="btn"
					href="https://www.roblox.com/games/10536276198"
					target="_blank"
				>
					<img className="card-img corner" src={vmaexperience} />
				</a>
			</div>
		);
	}
}
