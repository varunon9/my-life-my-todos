import { EventEmitter } from 'events';
import autoBind from 'react-autobind';

import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

const CHANGE = 'CHANGE';

class HeaderStore extends EventEmitter {
    constructor() {
        super();
        autoBind(this);

        this.state = {
        	activeItem: 'tasks'
        };

        // Registers action handler with the Dispatcher.
        Dispatcher.register(this.registerToActions);
    }
    
    registerToActions(action) {
    	switch(action.actionType) {
    		case ActionTypes.CHANGE_MENU_ITEM: {
    			this.changeMenuItem(action.payload);
    		}
    	}
    }

    getCurrentState() {
    	return this.state;
    }

    changeMenuItem(item) {
    	this.state.activeItem = item;
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

export default new HeaderStore();