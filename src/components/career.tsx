import React, { Component } from "react";

import roblox from "../images/robloxbrand.png";
import sonarstudios from "../images/sonarstudios.png";
import redriptide from "../images/redriptide.png";
import twinatlas from "../images/twinatlas.png";

interface CareerState {}
interface CareerProps {}

export default class Career extends Component<CareerProps, CareerState> {
	render() {
		return (
			<div>
				<div className="card corner limit">
					<a
						className="limit-btn corner-card"
						href={"https://www.linkedin.com/company/twin-atlas-llc/"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="limit-img corner-card"
							src={twinatlas}
						/>
					</a>
					<div className="pad">
						<h1>Production Director</h1>
						<h3>Twin Atlas • June 2023 - Present</h3>
						<div className="gap" />
						<p>
							Directing development and production operations across multiple
							projects internally and externally with Twin Atlas. 
						</p>
					</div>
				</div>

				<div className="space" />

				<div className="card corner limit">
					<a
						className="limit-btn corner-card"
						href={"https://www.linkedin.com/company/twin-atlas-llc/"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="limit-img corner-card"
							src={twinatlas}
						/>
					</a>
					<div className="pad">
						<h1>Business Development Director</h1>
						<h3>Twin Atlas • Oct 2022 - June 2023</h3>
						<div className="gap" />
						<p>
							Directed the merger between Sonar Studios and RedManta to form Twin Atlas.
							I lead company growth through brand partnerships and talent acquisition.
						</p>
					</div>
				</div>

				<div className="space" />

				<div className="card corner limit">
					<a
						className="limit-btn corner-card"
						href={"https://www.linkedin.com/company/sonar-games/"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="limit-img corner-card"
							src={sonarstudios}
						/>
					</a>
					<div className="pad">
						<h1>Business Development Director</h1>
						<h3>Sonar Studios • Jun 2022 - Oct 2022</h3>
						<div className="gap" />
						<p>
							Managed brand activations with clients such as West Elm and Viacom.
							Coordinated and oversaw company operations and new games such as Winds
							of Fortune and Griffin's Destiny
						</p>
					</div>
				</div>

				<div className="space" />

				<div className="card corner limit">
					<a
						className="limit-btn corner-card"
						href={"https://www.linkedin.com/company/sonar-games/"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="limit-img corner-card"
							src={sonarstudios}
						/>
					</a>
					<div className="pad">
						<h1>Business Development Associate</h1>
						<h3>Sonar Studios • Jul 2021 - Jun 2022</h3>
						<div className="gap" />
						<p>
							Sonar Studios has amassed over 450 million plays
							with over 1.2 million community members. Managing
							the growth and acquisition of the company.
						</p>
					</div>
				</div>

				<div className="space" />

				<div className="card corner limit">
					<a
						className="limit-btn corner-card"
						href={"https://www.linkedin.com/company/red-riptide/"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="limit-img corner-card"
							src={redriptide}
						/>
					</a>
					<div className="pad">
						<h1>Managing Director</h1>
						<h3>Red Riptide • Aug 2021 - Oct 2022</h3>
						<div className="gap" />
						<p>
							Mullet Mafia has a reach of over 290 thousand
							players with a spectacular 39 million total plays.
							Leading the game design to create a memorable
							experience.
						</p>
					</div>
				</div>

				<div className="space" />

				<div className="card corner limit">
					<a
						className="limit-btn corner-card"
						href={"https://www.linkedin.com/company/red-riptide/"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="limit-img corner-card"
							src={redriptide}
						/>
					</a>
					<div className="pad">
						<h1>Engineering Director</h1>
						<h3>Red Riptide • Jun 2019 - Aug 2021</h3>
						<div className="gap" />
						<p>
							Mullet Mafia has a reach of over 290 thousand
							players with a spectacular 39 million total plays.
							Leading the game design to create a memorable
							experience.
						</p>
					</div>
				</div>

				<div className="space" />

				<div className="card corner limit">
					<a
						className="limit-btn corner-card"
						href={"https://www.linkedin.com/company/roblox/"}
						rel="noreferrer"
						target="_blank"
					>
						<img className="limit-img corner-card" src={roblox} />
					</a>
					<div className="pad">
						<h1>Technical Insights Manager</h1>
						<h3>Roblox • Mar 2021 - Jun 2022</h3>
						<div className="gap" />
						<p>
							Managing the technological side of Roblox Developer
							Relations and managing teams across bug reports,
							developer support, and leading the Roblox China
							Initiative.
						</p>
					</div>
				</div>

				<div className="space" />

				<div className="card corner limit">
					<a
						className="limit-btn corner-card"
						href={"https://www.linkedin.com/company/roblox/"}
						rel="noreferrer"
						target="_blank"
					>
						<img className="limit-img corner-card" src={roblox} />
					</a>
					<div className="pad">
						<h1>Developer Council</h1>
						<h3>Roblox • Dec 2020 - Mar 2021</h3>
						<div className="gap" />
						<p>
							Working closely with Roblox Developer Relations to
							provide community insight, assist with focus, beta,
							and survey groups.
						</p>
					</div>
				</div>

				<div className="space" />

				<div className="card corner limit">
					<a
						className="limit-btn corner-card"
						href={"https://www.linkedin.com/company/roblox/"}
						rel="noreferrer"
						target="_blank"
					>
						<img className="limit-img corner-card" src={roblox} />
					</a>
					<div className="pad">
						<h1>Developer Internship</h1>
						<h3>Roblox • Sep 2020 - Dec 2020</h3>
						<div className="gap" />
						<p>
							Interned as a game developer and designed open
							source libraries for game development within Roblox
							while adding accessibility & cross platform support.
						</p>
					</div>
				</div>
			</div>
		);
	}
}
