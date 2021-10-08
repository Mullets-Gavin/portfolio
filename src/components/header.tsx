import React, { Component } from "react";

import banner from "../images/banner.png";
import gavinpfp from "../images/gavinpfp.png";

interface HeaderState {}
interface HeaderProps {
}

export default class Header extends Component<HeaderProps, HeaderState> {
	render() {
		return (
			<div className="card corner">
				<div className="card-flag">
					<img src={banner} className="card-banner corner-img"/>
				</div>
				<div className="card-pfp corner-circle">
					<img src={gavinpfp} className="card-banner corner-circle"/>
				</div>
				<div className="card-header">
					<h1>Gavin Rosenthal</h1>
					<h2 className="space">@Mullets</h2>
					<p>Writing type-safe code and skateboarding.</p>
				</div>
			</div>
		);
	}
}
