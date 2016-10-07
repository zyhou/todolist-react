import AppDispatcher from '../dispatchers/AppDispatcher';
var EventEmitter = require('events').EventEmitter;
import TodoConstants from '../constants/TodoConstants';
import assign from 'object-assign';

var CHANGE_EVENT = 'change';

let _listTodos = {};

const create = () => {
	// Trouvé sur internet
	// Hand waving here -- not showing how this interacts with XHR or persistent
	// server-side storage.
	// Using the current timestamp + random number in place of a real id.
	let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
	_listTodos[id] = {
		id: id,
		complete: false,
		text: ''
	};
};

var TodoStore = assign({}, EventEmitter.prototype, {
	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
	getList() {
		return _listTodos;
	}
});

AppDispatcher.register(action => {

	switch (action.actionType) {
		case TodoConstants.ADD_ITEM:
			create();
			TodoStore.emitChange();
			break;

		case TodoConstants.REMOVE_ITEM:

			break;

		default:
		//nop
	}
});

export default TodoStore;