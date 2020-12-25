import React, { useEffect } from 'react';

var d = new Date();
var Month = d.getMonth();
var Options = {
	0: [
		// January
		'happy new year',
	],
	11: [
		// December
		'happy holidays 🎉',
		'merry christmas 🎅',
		'happy hanukkah 🕎',
	],
};

export default () => {
	let holiday =
		Options[Month][Math.floor(Math.random() * Options[Month].length)];

	useEffect(() => {
		document.title = holiday;
	}, []);

	return (
		<body
			className='Holidays'
			style={{
				color: 'white',
				backgroundColor: '#FFFFFF',
				fontFamily: 'fantasy',
				margin: '0',
			}}
		>
			<div
				style={{
					height: 'auto',
					overflow: 'hidden',
					fontSize: '200%',
				}}
			>
				<div
					style={{
						height: '100vh',
						width: '100vh',
						margin: '0 auto',
					}}
				>
					<h1
						style={{
							margin: '0',
							color: '#121212',
							width: 'auto',
							height: 'auto',
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							textAlign: 'center',
						}}
					>
						<i>{holiday}</i>
						<p
							style={{
								color: '#a20f0f',
								fontSize: '50%',
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
