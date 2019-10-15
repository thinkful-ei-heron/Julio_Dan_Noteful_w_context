import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainSidebar from './MainSidebar';
import NoteSidebar from './NoteSidebar';
import NoteView from './NoteView';
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
          <Switch>
            <Route path="/note" render={props => <NoteSidebar goBackEvent={e => props.history.goBack()} />} />
            <Route path="/" component={() => <MainSidebar folders={store.folders} />} />
          </Switch>
        </nav>
        <main className="App">
          <Route exact path="/" component={() => <Main notes={store.notes} />} />
          <Route
            exact
            path="/:folderId"
            render={props => (
              <Main notes={store.notes.filter(note => note.folderId === props.match.params.folderId)} />
            )}
          />
          <Route
            exact
            path="/note/:noteId"
            render={props => (
              <NoteView
                note={store.notes.find(note => note.id === props.match.params.noteId)}
                folders={store.folders}
              />
            )}
          />
        </main>
      </>
    );
  }
}
