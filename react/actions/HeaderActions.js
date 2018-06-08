import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

class HeaderActions {
	
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
}

export default new HeaderActions();