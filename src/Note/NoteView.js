import React from 'react';
import Note from './Note';
import './NoteView.css';

export default function NoteView(props) {
  console.log(props);
  return (
    <>
      <ul className="noteContainer">
        <Note
          key={props.note.id}
          id={props.note.id}
          name={props.note.name}
          date={props.note.modified}
          description={props.note.content}
        />
      </ul>
      <div className="folderName">
        <h2>{props.folders.find(folder => folder.id === props.note.folderId).name}</h2>
      </div>
    </>
  );
}
