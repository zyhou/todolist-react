import React, { Component } from 'react';

export default class TodoList extends Component {

  // constructor() {
  //   super();

  // }

  render() {
    return (
      <div className="block">

        <div className="info-date">
          <div className="date">25 Jul 2016</div>
          <div className="day">Monday</div>
        </div>

        <div className="list">
          <ul>
            <li><a href="#" className="list-item">Apprendre plus sur React</a><input type="checkbox" id="one" checked/><label for="one"></label></li>
            <li><a href="#">Faire une API en .NET Core</a><input type="checkbox" id="two"/><label for="two"></label></li>
          </ul>
        </div>

        <a href="#" className="btn"></a>
      </div>
    );
  }
}
