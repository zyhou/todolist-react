import AppDispatcher from '../dispatchers/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

class TodoActions {

    addItem(item) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.ADD_ITEM,
            data: item
        });
    }

    removeItem(index) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.REMOVE_ITEM,
            data: index
        });
    }

};

export default new TodoActions();