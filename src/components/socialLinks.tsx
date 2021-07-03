import React from "react";
import "../stylesheets/styles.css";
import roblox from "../images/roblox.png";
import twitter from "../images/twitter.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import discord from "../images/discord.png";

interface CardProps {
	social: string;
	link: string;
	title: string;
}

export default class SocialLink extends React.Component<CardProps> {
	constructor(props: CardProps) {
		super(props);
	}

	render() {
		return (
			<div className={`link + ${this.props.social}`}>
				<a
					className="padding"
					href={this.props.link}
					title={this.props.title}
					rel="noreferrer"
					target="_blank"
				>
					<img
						className="media"
						src={
							this.props.social === "twitter"
								? twitter
								: this.props.social === "github"
								? github
								: this.props.social === "linkedin"
								? linkedin
								: this.props.social === "roblox"
								? roblox
								: this.props.social === "discord" && discord
						}
					/>
				</a>
			</div>
		);
	}
}
