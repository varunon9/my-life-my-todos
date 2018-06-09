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
        	tasks: globals.dbMethods.fetchData(globals.constants.collections.TASKS)
        };

        // Registers action handler with the Dispatcher.
        Dispatcher.register(this.registerToActions);
    }

    registerToActions(action) {
    	switch(action.actionType) {
    		case ActionTypes.TASKS_UPDATED: {
    			this.tasksUpdated(action.payload);
    		}
    	}
    }

    getTasks() {
    	return this.state.tasks;
    }

    tasksUpdated(tasks) {
    	this.state.tasks = tasks;
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