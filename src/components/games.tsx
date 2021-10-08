import React, { Component } from "react";

import captive from "../images/captive.png";
import armtastic from "../images/armtastic.png";
import caserush from "../images/caserush.png";
import spellcaster from "../images/spellcaster.png";

interface GamesState {}
interface GamesProps {}

export default class Games extends Component<GamesProps, GamesState> {
	render() {
		return (
			<div className="grid">
				<img className="card-img corner" src={captive}/>
				<img className="card-img corner" src={armtastic}/>
				<img className="card-img corner" src={caserush}/>
				<img className="card-img corner" src={spellcaster}/>
			</div>
		);
	}
}
