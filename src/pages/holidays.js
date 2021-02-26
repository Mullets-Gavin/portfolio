import React, { useEffect } from "react";

const dateObj = new Date();
const dateMonth = dateObj.getMonth();
const dateOptions = {
	0: [
		// January
		"happy new year",
	],
	1: [
		// February
		"happy valentines day",
		"happy fathers day",
	],
	2: [
		// March
		"happy st patricks day",
		"happy tiny irishman month",
	],
	11: [
		// December
		"happy holidays 🎉",
		"merry christmas 🎅",
		"happy hanukkah 🕎",
	],
};

const getMonth = dateOptions[dateMonth];
const getHoliday = getMonth[Math.floor(Math.random() * getMonth.length)];

export default () => {
	useEffect(() => {
		document.title = Holiday;
	}, []);

	return (
		<body
			className="Holidays"
			style={{
				color: "#0CB04A",
				backgroundColor: "#86D3E4", // 0A7533
				fontFamily: "fantasy",
				margin: "0",
			}}
		>
			<div
				style={{
					height: "auto",
					overflow: "hidden",
					fontSize: "200%",
				}}
			>
				<div
					style={{
						height: "100vh",
						width: "100vh",
						margin: "0 auto",
					}}
				>
					<h1
						style={{
							margin: "0",
							width: "auto",
							height: "auto",
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							textAlign: "center",
						}}
					>
						<i
							style={{
								color: "#FFFFFF",
								fontSize: "30%",
							}} //
						>
							i'm too lazy to make a giftcard, so here (refresh!)
						</i>
						<br />
						<i>{getHoliday}</i>
						<p
							style={{
								color: "#FF3A2F",
								fontSize: "50%",
							}}
						>
							with love, from mullets
						</p>
					</h1>
				</div>
			</div>
		</body>
	);
};
