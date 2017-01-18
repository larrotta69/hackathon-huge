// import 'babel-polyfill';
// import React from 'react';
// import { render } from 'react-dom';
// import { Router, browserHistory } from 'react-router';
// import routes from './routes';
// import styles from './styles/main.scss';
//
// render(
// 	<Router history={browserHistory} routes={routes} />,
// 	document.getElementById('app')
// );


import React from 'react';
import { render } from 'react-dom';
import styles from './styles/main.scss';

import HomePage from './components/home/HomePage';
import FormPage from './components/form/FormPage';

const data = {
	appTitle: "List of Posts"
}
// render(
// 	<HomePage data={data} />,
// 	document.getElementById('app')
// )

render(
	<FormPage />,
	document.getElementById('app')
)
