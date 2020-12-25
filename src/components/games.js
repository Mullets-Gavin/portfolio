import React from 'react';
import Content from './content.js';

import Captive from '../images/captive.png';
import CaseRush from '../images/caserush.png';
import Spellcaster from '../images/spellcaster.png';

export default () => {
	return (
		<div class='games'>
			<Content
				img={Captive}
				name='Captive'
				tldr='Hack the computers 🖥️ , Escape the beast 🐺, Unlock the exits 🔐, and escape Captivity!'
				link='https://www.roblox.com/games/3388553819/Captive'
				title1='Role'
				about='Co-owner & lead programmer. My job was to program all of Captive, which included
                custom physics, seamless interface, and a custom movement system.'
				title2='Accomplishments'
				stats1='Breakout game, 27.5m+ plays'
				stats2='Heavily polished systems and gameplay'
				stats3='Interface that works on all platforms'
			/>

			<br />

			<Content
				img={CaseRush}
				name='Case Rush'
				tldr='An intense case clicker with a goal to gain as much cash and networth as you can!'
				link='https://www.roblox.com/games/3836677462/Case-Rush'
				title1='Role'
				about='Co-owner & lead programmer. My job was primarily focused on the interface aspect of
                the game, creating a unique primarily interface game.'
				title2='Accomplishments'
				stats1='First attempt at creating polished UI'
				stats2='Created under 3 weeks as a side project'
				stats3='Learned how to design strong monetization patterns'
			/>

			<br />

			<Content
				img={Spellcaster}
				name='Spellcaster Simulator'
				tldr='A mystical simulator with dozens of spells to cast & gain crowns. Take on quests or battle other players!'
				link='https://www.roblox.com/games/2755360250/Spellcaster-Simulator'
				title1='Role'
				about='Owner & lead programmer. Spellcaster was the first project I took a real
                initiative with, and my first proper game. This game landed me a job on Captive.'
				title2='Accomplishments'
				stats1='Designed intricate systems such as quests'
				stats2='Learned common Roblox UI designs'
				stats3='Learning experience to design a Roblox game'
			/>
		</div>
	);
};
