import React from 'react';
import { Button, Card, Checkbox } from 'semantic-ui-react';

const TaskCardView = (props) => {
    return (
    	<Card className="task-card">
    	    <Card.Content>
    	        <Card.Header>
    	            {props.task.title}
    	            <Button 
    	                circular 
    	                icon="cancel" 
    	                floated="right"
    	                size="mini"
    	                onClick={() => {
    	                	props.removeTask(props.task)
    	                }}
    	            />
    	        </Card.Header>
    	        <Card.Description>
    	            {
    	            	props.task.items.map((item, index) => {
    	            		return (
    	            			<div key={index} style={{margin: '2px 0px 4px 0px'}}>
    	            			    <Checkbox 
    	            			        className={
    	            			        	`${item.completed ? 'line-through' : ''}`
    	            			        }
    	            			        label={item.todo} 
    	            			        defaultChecked={item.completed}
    	            			        onChange={(e, data) => {
    	            			        	props.updateTask(props.task, index, data.checked);
    	            			        }}
    	            			    />
    	            			</div>
    	            		)
    	            	})
    	            }
    	        </Card.Description>
    	    </Card.Content>
    	</Card>
    )
}

export default TaskCardView;