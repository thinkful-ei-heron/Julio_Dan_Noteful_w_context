import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainSidebar.css';
import NoteContext from '../NoteContext';

export default class MainSidebar extends Component {
  static contextType = NoteContext;

  folderButtons = folders => {
    return (
      <ul className="sideNav">
        {folders.map(folder => (
          <li>
            <Link to={folder.id}>
              <button className="folderButton">{folder.name}</button>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const { folders } = this.context;
    return (
      <nav className="sideBar">
        {this.folderButtons(folders)}
        <button className="addBtn">Add Folder</button>
      </nav>
    );
  }
}
