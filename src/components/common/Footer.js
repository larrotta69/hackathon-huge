import React, { PropTypes } from 'react';

const stateLessMethod = () => {
	console.log('daniel');
};
const Footer = () => {
	return (
		<footer>
			<h1 onClick={stateLessMethod}>Hackathon footer goes here...</h1>
		</footer>);
};

export default Footer;
