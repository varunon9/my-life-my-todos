import React from 'react';
import autoBind from 'react-autobind';
import { Segment, Card, Button, Modal, Icon, Header, Form } from 'semantic-ui-react';

import AppActions from '../actions/AppActions';
import DataStore from '../stores/DataStore';
import AppStore from '../stores/AppStore';
import TaskCardView from '../components/TaskCardView';
import AddNewTaskModal from '../components/AddNewTaskModal';

class ListTodos extends React.Component {
    constructor(props) {
    	super(props);
        autoBind(this);

        this.state = {
            tasks: DataStore.getTasks(),
            view: AppStore.getCurrentState().view,
            newTask: this.getInitialNewTask(),
            showAddNewTaskModal: false
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
            newTask: this.getInitialNewTask(),
            showAddNewTaskModal: false
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
                <Button 
                    className="secondary fixed" 
                    circular
                    icon="plus" 
                    onClick={() => {
                        this.setState({
                            showAddNewTaskModal: true
                        });
                    }}
                />
                <AddNewTaskModal 
                    showAddNewTaskModal={this.state.showAddNewTaskModal}
                    updateNewTaskTitle={this.updateNewTaskTitle}
                    newTask={this.state.newTask}
                    addNewTaskItem={this.addNewTaskItem}
                    updateNewTaskItem={this.updateNewTaskItem}
                    addNewTask={this.addNewTask}
                    closeAddNewTaskModal={() => {
                        this.setState({
                            showAddNewTaskModal: false
                        });
                    }}
                />
            </div>
        )
    }
}

export default ListTodos;