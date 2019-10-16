import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainSidebar.css';

export default class MainSidebar extends Component {
  folderButtons = (
    <ul className="sideNav">
      {this.props.folders.map(folder => (
        <li>
          <Link to={folder.id}>
            <button className="folderButton">{folder.name}</button>
          </Link>
        </li>
      ))}
    </ul>
  );

  render() {
    return (
      <nav className="sideBar">
        {this.folderButtons}
        <button className="addBtn">Add Folder</button>
      </nav>
    );
  }
}
