import { EventEmitter } from 'events';
import autoBind from 'react-autobind';

import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

const CHANGE = 'CHANGE';

class DataStore extends EventEmitter {
    constructor() {
        super();
        autoBind(this);

        this.state = {
        };

        this.fetchTasksFromDb();

        // Registers action handler with the Dispatcher.
        Dispatcher.register(this.registerToActions);
    }

    registerToActions(action) {
    	switch(action.actionType) {
    		case ActionTypes.TASK_ADDED: {
    			this.taskAdded(action.payload);
    		}
    	}
    }

    fetchTasksFromDb() {
        this.state.tasks = 
                globals.dbMethods.fetchData(globals.constants.collections.TASKS);
    }

    getTasks() {
    	return this.state.tasks;
    }

    taskAdded(task) {
        // adding task to db
        globals.dbMethods.addData(globals.constants.collections.TASKS, task);

        this.fetchTasksFromDb();
        this.emit(CHANGE);
    }

    taskUpdated(task) {
        // updating task to db

        this.fetchTasksFromDb();
        this.emit(CHANGE);
    }

    taskRemoved(task) {
        // removing task from db

        this.fetchTasksFromDb();
        this.emit(CHANGE);
    }

    // Hooks a React component's callback to the CHANGED event.
    addChangeListener(callback) {
        this.on(CHANGE, callback);
    }
 
    // Removes the listener from the CHANGED event.
    removeChangeListener(callback) {
        this.removeListener(CHANGE, callback);
    }
}

export default new DataStore();