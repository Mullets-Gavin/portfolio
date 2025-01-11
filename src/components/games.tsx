import React, { Component } from "react";

import miningfactory from "../images/miningfactory.png";
import mergezoo from "../images/mergezoo.png";
import captive from "../images/captive.png";
import armtastic from "../images/armtastic.png";
import miningfactorythumb from "../images/miningfactory_thumb.png";
import windsoffortune from "../images/windsoffortune.png";
import westelm from "../images/westelm.png";
import vmaexperience from "../images/vmaexperience.png";
import samurnauts from "../images/samurnauts.png";
import towerdefense from "../images/towerdefense.png"

import teenwolf from "../images/teenwolf.png";
import championdefenders from "../images/championdefenders.png";
import resortlife from "../images/resortlife.png";

import theclassic from "../images/theclassic.png";
import thegames from "../images/thegames.png";
import beastgames from "../images/beastgames.png"

interface GamesState {}
interface GamesProps {}

export default class Games extends Component<GamesProps, GamesState> {
	render() {
		return (
			<div>
				<a
					className="btn"
					href="https://www.roblox.com/games/76626266837363"
					target="_blank"
				>
					<img className="card-img card-bottom corner" src={beastgames} />
				</a>
				<div className="grid">
					<a
						className="btn"
						href="https://www.roblox.com/games/17427651911/The-Classic"
						target="_blank"
					>
						<img className="card-img corner" src={theclassic} />
					</a>

					<a
						className="btn"
						href="https://www.roblox.com/games/18320910606/The-Games"
						target="_blank"
					>
						<img className="card-img corner" src={thegames} />
					</a>

					<a
						className="btn"
						href="https://www.roblox.com/games/14618646174/Resort-Life-Island-Tycoon"
						target="_blank"
					>
						<img className="card-img corner" src={resortlife} />
					</a>

					<a
						className="btn"
						href="https://www.roblox.com/games/3388553819"
						target="_blank"
					>
						<img className="card-img corner" src={captive} />
					</a>
				</div>

				<a
					className="btn"
					href="https://www.roblox.com/games/12717051222"
					target="_blank"
				>
					<img className="card-img card-bottom corner-pad" src={miningfactorythumb} />
				</a>

				<div className="grid">
					
					<a
						className="btn"
						href="https://www.roblox.com/games/91118317518018"
						target="_blank"
					>
						<img className="card-img corner" src={towerdefense} />
					</a>

					<a
						className="btn"
						href="https://www.roblox.com/games/73255127880705"
						target="_blank"
					>
						<img className="card-img corner" src={samurnauts} />
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
						href="https://www.roblox.com/games/7714627632"
						target="_blank"
					>
						<img className="card-img corner" src={windsoffortune} />
					</a>

				</div>

				<a
					className="btn"
					href="https://www.roblox.com/games/17673014761/Champion-Defenders-TD"
					target="_blank"
				>
					<img className="card-img card-bottom corner-pad" src={championdefenders} />
				</a>

				<div className="grid">


					<a
						className="btn"
						href="https://www.roblox.com/games/6242582774"
						target="_blank"
					>
						<img className="card-img corner" src={armtastic} />
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
						href="https://www.roblox.com/games/10536276198"
						target="_blank"
					>
						<img className="card-img corner" src={vmaexperience} />
					</a>
				</div>
			</div>
		);
	}
}
