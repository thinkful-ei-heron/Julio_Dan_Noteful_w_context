import React from 'react';

const NoteContext = React.createContext({
  folders: [],
  notes: [],
  deleteNote: null
});

export default NoteContext;
