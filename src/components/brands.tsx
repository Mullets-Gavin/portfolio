import React, { Component } from "react";

import roblox from "../images/roblox.png";
import westelm_logo from "../images/westelm_logo.png";
import paramount from "../images/paramount.png";
import prime from "../images/prime.png";
import mtv_vma from "../images/mtv_vma.png";
import beastgames_logo from "../images/beastgames_logo.png";
import mattel from "../images/mattel.png";
import toei from "../images/toei.png";

interface BrandsState {}
interface BrandsProps {}

export default class Socials extends Component<BrandsState, BrandsProps> {
	render() {
		return (
			<div className="contact" style={{ "--items-per-row": 4 }}>
				<div className="application corner">
					<a
						className="application-button corner"
						href={"https://about.roblox.com/"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="application-img"
							alt={"name"}
							src={roblox}
						/>
					</a>
				</div>

                <div className="application corner">
					<a
						className="application-button corner"
						href={"https://www.youtube.com/watch?v=5FlveALbzFk"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="application-img"
							alt={"name"}
							src={beastgames_logo}
						/>
					</a>
				</div>

                <div className="application corner">
					<a
						className="application-button corner"
						href={"https://about.mattel.com/"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="application-img"
							alt={"name"}
							src={mattel}
						/>
					</a>
				</div>

                <div className="application corner">
					<a
						className="application-button corner"
						href={"https://www.amazon.com/gp/video/storefront"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="application-img"
							alt={"name"}
							src={prime}
						/>
					</a>
				</div>

                <div className="application corner">
					<a
						className="application-button corner"
						href={"https://www.paramountplus.com/"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="application-img"
							alt={"name"}
							src={paramount}
						/>
					</a>
				</div>

                <div className="application corner">
					<a
						className="application-button corner"
						href={"https://www.mtv.com/event/vma"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="application-img"
							alt={"name"}
							src={mtv_vma}
						/>
					</a>
				</div>

                <div className="application corner">
					<a
						className="application-button corner"
						href={"https://www.toei-animation.com/"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="application-img"
							alt={"name"}
							src={toei}
						/>
					</a>
				</div>

                <div className="application corner">
					<a
						className="application-button corner"
						href={"https://www.westelm.com/"}
						rel="noreferrer"
						target="_blank"
					>
						<img
							className="application-img"
							alt={"name"}
							src={westelm_logo}
						/>
					</a>
				</div>
			</div>
		);
	}
}
