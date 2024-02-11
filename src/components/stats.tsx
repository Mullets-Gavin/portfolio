import React, { Component } from "react";

interface StatsState {}
interface StatsProps {}

export default class Stats extends Component<StatsState, StatsProps> {
	render() {
		return(
		<div className="stats-grid">
			<div className="card corner pillow stats stats-right">
				<h1>84.3m+</h1>
				<h3>Total Plays</h3>
			</div>

			<div className="card corner pillow stats stats-left">
				<h1>657k+</h1>
				<h3>Total Favorites</h3>
			</div>
		</div>
		)
	}
}
