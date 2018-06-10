import React from 'react';
import { Button, Modal, Icon, Header, Form } from 'semantic-ui-react';

const AddNewTaskModal = (props) => {
	return (
		<Modal open={props.showAddNewTaskModal}>
		    <Header icon="add" content="Add a new task" />
		    <Modal.Content scrolling>
		        <Form>
		            <Form.Field>
		                <label>Title</label>
		                <input placeholder="Your task title" 
		                    onBlur={props.updateNewTaskTitle}
		                    defaultValue={props.newTask.title}
		                />
		            </Form.Field>
		            <p>Keep adding task items by pressing enter</p>
		            {
		                props.newTask.items.map((item, index) => {
		                    return (
		                        <Form.Field key={index}>
		                            <input 
		                                onKeyDown={props.addNewTaskItem} 
		                                onBlur={(e) => {
		                                    props.updateNewTaskItem(e, index)
		                                }} 
		                                autoFocus
		                                defaultValue={item.todo}
		                            />
		                        </Form.Field>
		                    )
		                })
		            }
		        </Form>
		    </Modal.Content>
		    <Modal.Actions>
		        <Button color="green" onClick={props.addNewTask}>
		            <Icon name="checkmark" /> Done
		        </Button>
		        <Button color="red" onClick={props.closeAddNewTaskModal}>
		            <Icon name="cancel" /> Cancel
		        </Button>
		    </Modal.Actions>
		</Modal>
	);
}

export default AddNewTaskModal;