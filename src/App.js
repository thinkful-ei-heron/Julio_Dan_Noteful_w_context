import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainSidebar from './MainSidebar';
import NoteSidebar from './NoteSidebar';
import Main from './Main';
import store from './store';

export default class App extends Component {
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
          <Route exact path="/" component={() => <Main notes={store.notes} />} />
          <Route
            path="/:folderId"
            render={props => (
              <Main notes={store.notes.filter(note => note.folderId === props.match.params.folderId)} />
            )}
          />
        </main>
      </>
    );
  }
}
