import AppDispatcher from '../dispatchers/AppDispatcher';
var EventEmitter = require('events').EventEmitter;
import TodoConstants from '../constants/TodoConstants';
import assign from 'object-assign';

var CHANGE_EVENT = 'change';


// var todoStore = new TodoStore();

AppDispatcher.register(action => {

	switch (action.actionType) {
		case TodoConstants.ADD_ITEM:

			break;

		case TodoConstants.REMOVE_ITEM:

			break;

		default:
			//nop
	}
});

// export default todoStore;