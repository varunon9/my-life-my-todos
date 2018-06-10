import React from 'react';
import autoBind from 'react-autobind';
import { Segment, Card, Button, Modal, Icon, Header, Form } from 'semantic-ui-react';

import AppActions from '../actions/AppActions';
import DataStore from '../stores/DataStore';
import AppStore from '../stores/AppStore';
import TaskCardView from '../components/TaskCardView';

class ListTodos extends React.Component {
    constructor(props) {
    	super(props);
        autoBind(this);

        this.state = {
            tasks: DataStore.getTasks(),
            view: AppStore.getCurrentState().view,
            newTask: this.getInitialNewTask()
        }
    }

    getInitialNewTask() {
        return {
            title: '',
            items: ['']
        }
    }

    onDataChange() {
        this.setState({
            tasks: DataStore.getTasks()
        });
    }

    onViewChange() {
        this.setState({
            view: AppStore.getCurrentState().view
        });
    }

    componentWillMount() {
        DataStore.addChangeListener(this.onDataChange);
        AppStore.addChangeListener(this.onViewChange);
    }
    
    componentWillUnmount() {
        DataStore.removeChangeListener(this.onDataChange);
        AppStore.removeChangeListener(this.onViewChange);
    }

    updateNewTaskTitle(e) {
        let newTask = Object.assign({}, this.state.newTask); // copy object
        newTask.title = e.target.value;
        this.setState({
            newTask
        });
    }

    updateNewTaskItem(e, index) {
        let newTask = Object.assign({}, this.state.newTask); // copy object
        newTask.items = newTask.items.concat(); // copy array
        newTask.items[index] = e.target.value;
        this.setState({
            newTask
        });
    }

    addNewTaskItem(e) {
        if (e.key === 'Enter') {
            let newTask = Object.assign({}, this.state.newTask); // copy object
            newTask.items = newTask.items.concat(); // copy array
            newTask.items.push('');
            this.setState({
                newTask
            });
        }
    }

    addNewTask() {
        // notifying store
        AppActions.taskAdded(this.state.newTask);

        // reinitializing new task
        this.setState({
            newTask: this.getInitialNewTask()
        });
    }


    render() {
        const gridView = (
            <Card.Group>
                {
                    this.state.tasks.map((task) => {
                        return (
                            <TaskCardView 
                                task={task} 
                                key={task._id}
                            />
                        )
                    })
                }
            </Card.Group>
        )

    	return (
            <div>
                <Segment className="primary">
                    {
                        gridView
                    }
                </Segment>
                <Modal trigger={
                            <Button 
                                className="secondary fixed" 
                                circular
                                icon="plus" 
                            />
                        }
                        closeIcon>
                    <Header icon="add" content="Add a new task" />
                    <Modal.Content scrolling>
                        <Form>
                            <Form.Field>
                                <label>Title</label>
                                <input placeholder="Your task title" 
                                    onBlur={this.updateNewTaskTitle}
                                    defaultValue={this.state.newTask.title}
                                />
                            </Form.Field>
                            <p>Keep adding task items by pressing enter</p>
                            {
                                this.state.newTask.items.map((item, index) => {
                                    return (
                                        <Form.Field key={index}>
                                            <input 
                                                onKeyDown={this.addNewTaskItem} 
                                                onBlur={(e) => {
                                                    this.updateNewTaskItem(e, index)
                                                }} 
                                                autoFocus
                                                defaultValue={item}
                                            />
                                        </Form.Field>
                                    )
                                })
                            }
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color="green" onClick={this.addNewTask}>
                            <Icon name="checkmark" /> Done
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default ListTodos;