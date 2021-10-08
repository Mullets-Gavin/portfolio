import React, { Component } from "react";

interface AccentState {}
interface AccentProps {
}

export default class Accent extends Component<AccentProps, AccentState> {
	render() {
		return (
			<div className="accent"/>
		);
	}
}
