import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainSidebar from './MainSidebar';
import NoteSidebar from './NoteSidebar';
import Main from './Main';
import store from './store';

export default class App extends Component {
  mainWithProps() {
    let notes = [];
    console.log(store);
    store.folders.forEach(folder => {
      notes.push(
        store.notes.filter(note => {
          if (note.folderId === folder.id) return note;
        })
      );
    });

    return <Main notes={notes} />;
  }

  render() {
    return (
      <>
        <header className="Header">
          <h1>Noteful</h1>
        </header>
        <sidebar>
          <Route path="/" render={() => <MainSidebar folders={store.folders} />} />
          <Route path="/note" component={NoteSidebar} />
        </sidebar>
        <main className="App"></main>
      </>
    );
  }
}
