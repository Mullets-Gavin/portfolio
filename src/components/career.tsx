import React, { Component } from "react";

import roblox from "../images/robloxbrand.png";
import mulletmafia from "../images/mulletmafia.png";
import sonarstudios from "../images/sonarstudios.png";

interface CareerState {}
interface CareerProps {}

export default class Career extends Component<CareerProps, CareerState> {
	render() {
		return (
			<div>
				<div className="card corner limit">
					<img className="limit-img corner-left" src={sonarstudios} />
					<div className="pad">
						<h1>Project Director</h1>
						<h3>Sonar Studios • 2021 - Present</h3>
						<div className="space" />
						<p>
							Sonar Studios has amassed over 450 million plays
							with over 1.2 million community members. Managing
							the growth and acquisition of the company.
						</p>
					</div>
				</div>

				<div className="space" />

				<div className="card corner limit">
					<img className="limit-img corner-left" src={roblox} />
					<div className="pad">
						<h1>Developer Council</h1>
						<h3>Roblox • 2020 - 2021</h3>
						<div className="space" />
						<p>
							Sonar Studios has amassed over 450 million plays. As
							the project director, I manage the growth and
							acquisition of the company.
						</p>
					</div>
				</div>

				<div className="space" />

				<div className="card corner limit">
					<img className="limit-img corner-left" src={roblox} />
					<div className="pad">
						<h1>Accelerator Internship</h1>
						<h3>Roblox • 2020 - 2020</h3>
						<div className="space" />
						<p>
							Sonar Studios has amassed over 450 million plays. As
							the project director, I manage the growth and
							acquisition of the company.
						</p>
					</div>
				</div>

				<div className="space" />

				<div className="card corner limit">
					<img className="limit-img corner-left" src={roblox} />
					<div className="pad">
						<h1>Post Approval</h1>
						<h3>Roblox • 2019 - 2020</h3>
						<div className="space" />
						<p>
							Volunteering for Roblox, I guided and mentored new
							developers to get familiar with the platform via
							Roblox’s developer forums and reproduced issues for
							engineers.
						</p>
					</div>
				</div>

				<div className="space" />

				<div className="card corner limit">
					<img className="limit-img corner-left" src={mulletmafia} />
					<div className="pad">
						<h1>Project Director</h1>
						<h3>Mullet Mafia • 2019 - Present</h3>
						<div className="space" />
						<p>
							Mullet Mafia has a reach of over 290 thousand
							players with a spectacular 39 million total plays.
							Leading the game design to create a memorable
							experience.
						</p>
					</div>
				</div>
			</div>
		);
	}
}
