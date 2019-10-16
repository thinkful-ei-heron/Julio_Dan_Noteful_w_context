import React, { Component } from 'react';
import Note from './Note';
import './NoteList.css';

export default class Main extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <ul className="noteContainer">
          {this.props.notes.map(note => (
            <Note key={note.id} id={note.id} name={note.name} date={note.modified} />
          ))}
          <li>
            <button className="addNote">Add Note</button>
          </li>
        </ul>
      </>
    );
  }
}
