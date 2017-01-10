import React, { PropTypes } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

class App extends React.Component {
	render () {
		return (
			<div className="container">
				<Header />
					{this.props.children}
				<Footer />
			</div>
		);
	}
}
App.propTypes = {
	children: PropTypes.object
};

export default App;
