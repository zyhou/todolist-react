import AppDispatcher from '../dispatchers/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

class TodoActions {

    addItem() {
        AppDispatcher.dispatch({
            actionType: TodoConstants.ADD_ITEM
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