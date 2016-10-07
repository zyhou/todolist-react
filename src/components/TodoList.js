import React, { Component } from 'react';
import todoStore from '../stores/TodoStore';
import TodoItem from './TodoItem';

export default class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = { list: todoStore.getList() };
  }

  render() {

    var allTodos = this.state.list;
    var todos = [];

    for (var key in allTodos) {
      todos.push(<TodoItem key={key} todo={allTodos[key]} />);
    }

    return (
      <div className="block">

        <div className="info-date">
          <div className="date">07 Oct 2016</div>
          <div className="day">Vendredi</div>
        </div>

        <div className="list">
          <ul>
            {todos}
          </ul>
        </div>

        <a href="#" className="btn"></a>
      </div>
    );
  }
}
