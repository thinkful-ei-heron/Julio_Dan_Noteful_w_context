import React, { Component } from 'react';
import Note from './Note';
import './NoteView.css';
import NoteContext from '../NoteContext';

export default class NoteView extends Component {
  static contextType = NoteContext;
  render() {
    const { folders, notes } = this.context;
    let note = notes.find(note => note.id === this.props.noteId);
    console.log(note);
    return (
      <>
        <ul className="noteContainer">
          <Note key={note.id} id={note.id} name={note.name} date={note.modified} description={note.content} />
        </ul>
        <div className="folderName">
          <h2>{folders.find(folder => folder.id === note.folderId).name}</h2>
        </div>
      </>
    );
  }
}
