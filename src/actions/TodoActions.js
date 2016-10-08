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

    updateComplete(id, isComplete) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.UPDATE_COMPLETE_ITEM,
            id: id,
            isComplete: isComplete
        });
    }

};

export default new TodoActions();