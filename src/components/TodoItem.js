import React, { Component } from 'react';

export default class TodoItem extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {

    let todo = this.props.todo;

    return (
      <li key={todo.id}><a href="#" className="list-item">{todo.text}</a><input type="checkbox" id="{todo.id}" checked/><label for="{todo.id}"></label></li>
    );
  }
}
