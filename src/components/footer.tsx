import React, { Component } from "react";

interface FooterState {}
interface FooterProps {}

const CurrentYear = new Date().getFullYear();

export default class Footer extends Component<FooterState, FooterProps> {
	render() {
		return(
		<div>
			<p className="card-align">© {CurrentYear} Mullets</p>

			<div className="space" />
		</div>
		)
	}
}
