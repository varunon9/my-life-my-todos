import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ListTodos from './ListTodos';
import About from '../components/About';
import Analytics from './Analytics';

class AppRoutes extends React.Component {
    constructor(props) {
    	super(props);
    }

    render() {
    	return (
    		<Switch>
			    <Route exact path='/' component={ListTodos} />
				<Route exact path='/about' component={About} />
				<Route exact path='/analytics' component={Analytics} />
			</Switch>
    	);
    }
}

export default AppRoutes;