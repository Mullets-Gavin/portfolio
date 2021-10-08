import React from "react";
import "../stylesheets/styles.css";

interface CardProps {
	name?: string;
	image?: string;
	content?: string;
	play?: string;
	icon?: string;
}

export default class GameCard extends React.Component<CardProps> {
	constructor(props: CardProps) {
		super(props);
	}

	render() {
		return (
			<div className="frame">
				{this.props.image && (
					<img className="image" src={this.props.image} />
				)}
				{this.props.name && <h1>{this.props.name}</h1>}
				{this.props.content && (
					<p className="content">{this.props.content}</p>
				)}
				{this.props.play && (
					<div className="play">
						<a
							className="padding"
							href={this.props.play}
							rel="noreferrer"
							target="_blank"
						>
							{this.props.icon ? (<img src={this.props.icon} />) : (<p>Play</p>)}
						</a>
					</div>
				)}
			</div>
		);
	}
}
