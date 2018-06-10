import React from 'react';
import { Card } from 'semantic-ui-react';

const TaskCardView = (props) => {
    return (
    	<Card>
    	    <Card.Content>
    	        <Card.Header>{props.task.title}</Card.Header>
    	    </Card.Content>
    	</Card>
    )
}

export default TaskCardView;