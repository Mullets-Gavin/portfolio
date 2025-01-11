import React, { Component } from "react";

interface StatsState {}
interface StatsProps {}

export default class Stats extends Component<StatsState, StatsProps> {
	render() {
		return (
			<div>
				<div className="card corner red-outline stats-title ">
					<div className="pillow">
						<h1>300,000,000+</h1>
						<h3>Total Plays</h3>
					</div>
				</div>

				<div className="space" />

				<div className="stats-grid">
					<div className="card corner red-outline pillow stats">
						<h1>2M+</h1>
						<h3>Total Favorites</h3>
					</div>

					<div className="card corner red-outline pillow stats">
						<h1>1M+</h1>
						<h3>Total Followers</h3>
					</div>
				</div>
			</div>
		);
	}
}
