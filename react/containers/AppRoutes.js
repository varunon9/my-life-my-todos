import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ListTodos from './ListTodos';

class AppRoutes extends React.Component {
    constructor(props) {
    	super(props);
    }

    render() {
    	return (
    		<Switch>
			    <Route exact path='/' component={ListTodos} />
			</Switch>
    	);
    }
}

export default AppRoutes;