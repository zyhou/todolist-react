import React, { Component } from 'react';
import TodoActions from '../actions/TodoActions';

export default class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.state = { isEditing: true };
  }

  onClick() {
    console.log('onClick ' + true)
    // this.setState({ isEditing: true });
  }

  onMouseLeave() {
    let isEditing = this.props.todo.text.trim() !== ''
    console.log('onMouseLeave ' + this.props.todo.text + ' ' + isEditing)
  //   this.setState({ isEditing: isEditing });
  }

  changeTexte(event) {
    TodoActions.updateText(this.props.todo.id, event.target.value)
    this.setState({ isEditing: false });
  }

  render() {

    let modif;
    if (this.state.isEditing) {
      modif = '<i class="icon icon--sae"></i><span class="input__label-content input__label-content--sae">Votre tâche</span>'
    }
    console.log(modif)

    let todo = this.props.todo;

    return (
      <li key={todo.id}>
        <span className="input input--sae">
          <input value={todo.text} onClick={(() => this.onClick()) } onChange={(e) => this.changeTexte(e) } onMouseLeave={() => this.onMouseLeave()} type="text" className="input__field input__field--sae" />
          <label className="input__label input__label--sae" dangerouslySetInnerHTML={{ __html: modif }}></label>
        </span>

        <input type="checkbox" id={todo.id} onChange={function () { } } className="input-check" />
        <label htmlFor={todo.id} className="label-check"></label>
      </li>
    );
  }
}
