import React from 'react';
import Application from './application.js';
import Form from './form.js';

import Twitter from '../images/twitter.png';
import LinkedIn from '../images/linkedin.png';
import Github from '../images/github.png';
import DevForum from '../images/devforum.png';
import Discord from '../images/discord.png';

export default () => {
	return (
		<div class='games'>
			<div class='contact'>
				<Application
					img={Twitter}
					name='Twitter'
					link='https://twitter.com/Mullets_Gavin'
				/>

				<Application
					img={LinkedIn}
					name='LinkedIn'
					link='https://www.linkedin.com/in/gavin-mullets-rosenthal/'
				/>

				<Application
					img={Github}
					name='Github'
					link='https://github.com/Mullets-Gavin'
				/>

				<Application
					img={DevForum}
					name='Roblox'
					link='https://devforum.roblox.com/u/mullets_gavin'
				/>

				<Application
					img={Discord}
					name='Discord'
					link='https://discord.gg/dqvMK4HXde'
				/>
			</div>
			<div class='email'>
				<div class='email-container'>
					<div class='email-content'>
						<Form />
					</div>
				</div>
			</div>
		</div>
	);
};
