import React from 'react';

export default (props) => {
	return (
		<div class='overview'>
			<div class='description'>
				<h1 class='description-title'>{props.title}</h1>
				<p class='description-content'>{props.body}</p>
			</div>
		</div>
	);
};
