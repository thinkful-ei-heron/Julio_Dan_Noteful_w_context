import React, { Component } from 'react';

export default class MainSidebar extends Component {
  render() {
    return this.props.folders.map(folder => (
      <button>
        <a href={'/' + folder.id}>{folder.name}</a>
      </button>
    ));
  }
}
