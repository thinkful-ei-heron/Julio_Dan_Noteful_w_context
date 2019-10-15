import React, { Component } from 'react';
import Note from './Note';

export default class Main extends Component {
  render() {
    console.log(this.props);
    return (
      <ul className="noteContainer">
        {this.props.notes.map(note => (
          <Note key={note.id} id={note.id} name={note.name} date={note.modified} />
        ))}
      </ul>
    );
  }
}
