import React, { Component } from "react";

interface StatsState {}
interface StatsProps {}

export default class Stats extends Component<StatsState, StatsProps> {
	render() {
		return (
			<div className="stats-grid">
				<div className="card corner pillow stats">
					<h1>84.3m+</h1>
					<h3>Total Plays</h3>
				</div>

				<div className="card corner pillow stats">
					<h1>657k+</h1>
					<h3>Total Favorites</h3>
				</div>

				<div className="card corner pillow stats">
					<h1>663k+</h1>
					<h3>Total Community</h3>
				</div>

				<div className="card corner pillow stats">
					<h1>104k+</h1>
					<h3>Total Likes</h3>
				</div>
			</div>
		);
	}
}
