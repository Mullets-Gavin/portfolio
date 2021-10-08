import React from "react";
import "../stylesheets/styles.css";

interface CardProps {
	company: string;
	job: string;
	desc: string;
	icon: string;
	dates: string;
}

export default class CareerCard extends React.Component<CardProps> {
	constructor(props: CardProps) {
		super(props);
	}

	render() {
		return (
			<div className="frame + career">
				<img className="icon" src={this.props.icon} alt="banner" />
				<div>
					<h1>{this.props.company}</h1>
					<h2>{this.props.job}</h2>
					<h4>{this.props.dates}</h4>
					<p>{this.props.desc}</p>
				</div>
			</div>
		);
	}
}
