import React, { Component } from 'react';
import TodoActions from '../actions/TodoActions';

export default class TodoItem extends Component {

  constructor(props) {
    super(props);
    let isEditing = props.todo.text === ''
    this.state = { isEditing: isEditing, isComplete: props.todo.complete };
  }

  changeTexte(event) {
    TodoActions.updateText(this.props.todo.id, event.target.value)
    this.setState({ isEditing: false });
  }

  validItem(event) {
    if(this.props.todo.text === '') return;

    TodoActions.updateComplete(this.props.todo.id, event.target.checked)
    this.setState({ isComplete: event.target.checked });
  }

  render() {

    let modif;
    if (this.state.isEditing) {
      modif = '<i class="icon icon--sae"></i><span class="input__label-content input__label-content--sae">Votre tâche</span>'
    }

    let completeStyle;
    if (this.state.isComplete) {
      completeStyle = {
        color: '#bfc1cb'
      }
    }

    let todo = this.props.todo;

    return (
      <li key={todo.id}>
        <span className="input input--sae">
          <input value={todo.text} onChange={(e) => this.changeTexte(e) } style={completeStyle} disabled={this.state.isComplete} type="text" className="input__field input__field--sae" />
          <label className="input__label input__label--sae" dangerouslySetInnerHTML={{ __html: modif }}></label>
        </span>

        <input type="checkbox" id={todo.id} onChange={(e) => this.validItem(e) } checked={this.state.isComplete} className="input-check" />
        <label htmlFor={todo.id} className="label-check"></label>
      </li>
    );
  }
}
