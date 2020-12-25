import React from 'react';

export default (props) => {
	return (
		<div class='application'>
			<a
				class='application-button'
				href={props.link}
				rel='noreferrer'
				target='_blank'
			>
				<img class='application-img' alt={props.name} src={props.img} />
			</a>
		</div>
	);
};
