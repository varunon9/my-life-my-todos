import React from 'react';
import autoBind from 'react-autobind';

class ListTodos extends React.Component {
    constructor(props) {
    	super(props);
        autoBind(this);
    }

    render() {
    	return (
    		<div>
			    My todos
			</div>
    	);
    }
}

export default ListTodos;