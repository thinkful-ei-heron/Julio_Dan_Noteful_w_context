import React, { Component } from 'react';
import Note from './Note';

export default class Main extends Component {
  render() {
    console.log(this.props.id);
    return (
      <ul className="noteContainer">
        {this.props.notes.map(folder => {
          return folder.map(note => (
            <Note key={note.id} name={note.name} date={note.modified} content={note.content} />
          ));
        })}
      </ul>
    );
  }
}
