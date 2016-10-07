import React, { Component } from 'react';

export default class TodoItem extends Component {

  constructor(props) {
    super(props);

    this._onChange = this._onChange.bind(this);
  }

  _onChange() {
    console.log("TodoItem_onChange")
  }

  ChangeTexte(event) {

    // this.props.todo.text = event.target.value
    console.log("ChangeTexte " + event)
  }


  render() {

    let todo = this.props.todo;

    return (
      <li key={todo.id}>
        <span className="input input--sae">
          <input value={todo.text} onMouseLeave={(e) => this.ChangeTexte(e) }  type="text" className="input__field input__field--sae" />
          <label className="input__label input__label--sae">
            <i className="icon icon--sae"></i>
            <span className="input__label-content input__label-content--sae">Votre tâche</span>
          </label>
        </span>

        <input type="checkbox" id={todo.id} onChange={function () { } } className="input-check" />
        <label htmlFor={todo.id} className="label-check"></label>
      </li>
    );
  }
}

						// 
        // <a href="#" className="list-item">{todo.text}</a>