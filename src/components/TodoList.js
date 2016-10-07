import React, { Component } from 'react';
import TodoStore from '../stores/TodoStore';
import TodoActions from '../actions/TodoActions';
import TodoItem from './TodoItem';

export default class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = { list: TodoStore.getList() };
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  }

  addItem() {
    TodoActions.addItem();
  }

  _onChange() {
    this.setState({
      list: TodoStore.getList()
    })
  }

  render() {

    var allTodos = this.state.list;
    var todos = [];

    for (var key in allTodos) {
      if (allTodos.hasOwnProperty(key)) {
        todos.push(<TodoItem key={key} todo={allTodos[key]} />);
      }
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

        <a className="btn" onClick={() => this.addItem() } ></a>
      </div>
    );
  }
}
