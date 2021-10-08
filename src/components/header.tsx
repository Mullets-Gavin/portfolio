import React, { Component } from "react";

import banner from "../images/banner.png";

interface HeaderState {}
interface HeaderProps {
}

export default class Header extends Component<HeaderProps, HeaderState> {
	render() {
		return (
			<div className="card corner">
				<img src={banner} className="card-banner corner-img"/>
				<div className="card-details">
					<h1>header title</h1>
					<div className="card-pfp">
						<img src={banner} className="card"/>
					</div>
				</div>
			</div>
		);
	}
}
