import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

class HeaderActions {
	
    changeMenuItem(item) {
        Dispatcher.dispatch({
            actionType: ActionTypes.CHANGE_MENU_ITEM,
            payload: item 
        });
    }
}

export default new HeaderActions();