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
            view: AppStore.getCurrentState().view
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

    render() {
        const gridView = (
            <Card.Group>
                {
                    this.state.tasks.map((task, index) => {
                        return <TaskCardView task={task} />
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
                                <input placeholder="Your task title" />
                            </Form.Field>
                            <p>Keep adding task items by pressing enter</p>
                            <Form.Field>
                                <input />
                            </Form.Field>
                            <Form.Field>
                                <input />
                            </Form.Field>
                            <Form.Field>
                                <input />
                            </Form.Field>
                            <Form.Field>
                                <input />
                            </Form.Field>
                            <Form.Field>
                                <input />
                            </Form.Field>
                            <Form.Field>
                                <input />
                            </Form.Field>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color="green">
                            <Icon name="checkmark" /> Done
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default ListTodos;