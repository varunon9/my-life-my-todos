import { EventEmitter } from 'events';
import autoBind from 'react-autobind';

import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

const CHANGE = 'CHANGE';

class AppStore extends EventEmitter {
    constructor() {
        super();
        autoBind(this);

        this.state = {
        	theme: 'purple-theme',
            view: 'gridView'
        };

        // Registers action handler with the Dispatcher.
        Dispatcher.register(this.registerToActions);
    }

    registerToActions(action) {
    	switch(action.actionType) {
    		case ActionTypes.CHANGE_THEME: {
    			this.changeTheme(action.payload);
    		}
    	}
    }

    getCurrentState() {
    	return this.state;
    }

    changeTheme(theme) {
    	this.state.theme = theme;
    	this.emit(CHANGE);
    }

    changeView(theme) {
        this.state.view = view;
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

export default new AppStore();