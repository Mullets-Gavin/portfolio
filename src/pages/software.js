import React, { useEffect } from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import '../stylesheets/styles.css';
import Overview from '../components/overview.js';
import Software from '../components/software.js';

export default () => {
	useEffect(() => {
		document.title = 'Mullets | Software';
	}, []);

	return (
		<div class='app' className='App'>
			<div class='panel'>
				<Header />

				<Overview
					title='Beautiful Open Source Software'
					body="My featured software I've developed and open sourced on my Github. I use each and every module
                    I open source and I thoroughly test my code before doing so. I hope you find my collection
                    of code to be of use!"
				/>
				<Software />

				<Footer />
			</div>
		</div>
	);
};
