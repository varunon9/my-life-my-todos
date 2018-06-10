import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

class AppActions {
	
    changeMenuItem(item) {
        Dispatcher.dispatch({
            actionType: ActionTypes.CHANGE_MENU_ITEM,
            payload: item 
        });
    }

    changeTheme(theme) {
        Dispatcher.dispatch({
            actionType: ActionTypes.CHANGE_THEME,
            payload: theme 
        });
    }

    changeView(view) {
        Dispatcher.dispatch({
            actionType: ActionTypes.CHANGE_VIEW,
            payload: view 
        });
    }

    taskAdded(task) {
        Dispatcher.dispatch({
            actionType: ActionTypes.TASK_ADDED,
            payload: task
        });
    }

    taskUpdated(task) {
        Dispatcher.dispatch({
            actionType: ActionTypes.TASK_UPDATED,
            payload: task
        });
    }

    taskRemoved(task) {
        Dispatcher.dispatch({
            actionType: ActionTypes.TASK_REMOVED,
            payload: task
        });
    }
}

export default new AppActions();