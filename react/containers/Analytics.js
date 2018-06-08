import React from 'react';
import autoBind from 'react-autobind';

class Analytics extends React.Component {
    constructor(props) {
    	super(props);
        autoBind(this);
    }

    render() {
    	return (
    		<div>
			    Analytics
			</div>
    	);
    }
}

export default Analytics;