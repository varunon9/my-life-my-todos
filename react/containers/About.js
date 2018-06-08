import React from 'react';
import autoBind from 'react-autobind';

class About extends React.Component {
    constructor(props) {
    	super(props);
        autoBind(this);
    }

    render() {
    	return (
    		<div>
			    About
			</div>
    	);
    }
}

export default About;