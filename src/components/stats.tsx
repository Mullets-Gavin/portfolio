import React, { Component } from "react";

interface StatsState {}
interface StatsProps {}

export default class Stats extends Component<StatsState, StatsProps> {
	render() {
		return (
			<div>
				<div className="card corner stats-title">
					<div className="pillow">
						<h1>84.3m+</h1>
						<h3>Total Plays</h3>
					</div>
				</div>

				<div className="space" />

				<div className="stats-grid">
					<div className="card corner pillow stats">
						<h1>657k+</h1>
						<h3>Total Favorites</h3>
					</div>

					<div className="card corner pillow stats">
						<h1>663k+</h1>
						<h3>Total Members</h3>
					</div>
				</div>
			</div>
		);
	}
}
