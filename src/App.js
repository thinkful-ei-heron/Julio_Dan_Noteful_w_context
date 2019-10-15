import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import MainSidebar from './MainSidebar';
import NoteSidebar from './NoteSidebar';
import Main from './Main';
import store from './store';

export default class App extends Component {
  mainWithProps(props) {
    console.log(props);
    let notes = [];
    let filter = props.match.url.replace('/', '');
    if (filter) {
      let filterFolder = store.folders.find(folder => folder.id === filter);
      notes.push(store.notes.filter(note => note.folderId === filterFolder.id));
    } else {
      store.folders.forEach(folder => {
        notes.push(store.notes.filter(note => note.folderId === folder.id));
      });
    }
    return <Main notes={notes} />;
  }

  render() {
    return (
      <>
        <header className="Header">
          <h1>Noteful</h1>
        </header>
        <nav>
          <Route path="/" component={() => <MainSidebar folders={store.folders} />} />
          <Route path="/note" component={NoteSidebar} />
        </nav>
        <main className="App">
          <Route exact path="/" component={this.mainWithProps} />
          <Route path="/:fileId" render={props => this.mainWithProps(props)} />
        </main>
      </>
    );
  }
}
