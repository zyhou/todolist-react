import AppDispatcher from '../dispatchers/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

class TodoActions {

    addItem() {
        AppDispatcher.dispatch({
            actionType: TodoConstants.ADD_ITEM
        });
    }

    updateText(id, text) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.UPDATE_TEXT_ITEM,
            id: id,
            text: text
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