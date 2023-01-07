import React, { Component } from "react";

interface TitleState {}
interface TitleProps {
	title: string;
	body?: string;
}

export default class Title extends Component<TitleProps, TitleState> {
	render() {
		return (
			<div className="card corner title">
				<div className="pillow">
					<div className="temp">
						<h2 className="title-text">{this.props.title}</h2>
					</div>
					{/* <p className="title-text">{this.props.body}</p> */}
				</div>
			</div>
		);
	}
}
