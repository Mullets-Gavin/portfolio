import React, { Component } from "react";

interface ConsultingState {}
interface ConsultingProps {}

import twinatlas from "../images/twinatlas.png";

export default class Consulting extends Component<
	ConsultingState,
	ConsultingProps
> {
	render() {
		return (
			<div className="card corner card-bottom">
				<div className="pillow">
					<h1>Consulting Services</h1>

					<div className="gap" />

					<p>
						Leveraging analytics and data-driven insights, my
						consulting services significantly boost player
						engagement and increase player counts in Roblox games.
					</p>
					<div className="gap" />
					<p>
						By analyzing player behavior and market trends,
						strategic recommendations are provided, leading to
						informed decisions, a competitive advantage, and
						sustained growth in the dynamic Roblox ecosystem.
					</p>
					<div className="space" />

					<div className="form">
						<a
							className="form-btn corner"
							href={"https://forms.gle/ynAHooMQna1yieE87"}
							rel="noreferrer"
							target="_blank"
						>
							<h2>Request Services</h2>
						</a>
					</div>

					<div className="space" />
				</div>
			</div>
		);
	}
}
