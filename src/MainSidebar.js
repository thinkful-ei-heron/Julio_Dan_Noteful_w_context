import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MainSidebar extends Component {
  folderButtons = this.props.folders.map(folder => (
    <button>
      <Link to={folder.id}>{folder.name}</Link>
    </button>
  ));

  render() {
    return (
      <nav>
        {this.folderButtons}
        <button>Add Folder</button>
      </nav>
    );
  }
}
