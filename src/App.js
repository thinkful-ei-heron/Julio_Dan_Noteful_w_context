import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './reset.css';
import './App.css';
import MainSidebar from './MainSidebar';
import NoteSidebar from './NoteSidebar';
import NoteView from './NoteView';
import NoteList from './NoteList';
import store from './store';

export default class App extends Component {
  render() {
    return (
      <>
        <header className="header">
          <Link to="/">
            <h1>Noteful</h1>
          </Link>
        </header>
        <main>
          <Switch>
            <Route path="/note" render={props => <NoteSidebar goBackEvent={e => props.history.goBack()} />} />
            <Route path="/" component={() => <MainSidebar folders={store.folders} />} />
          </Switch>
          <section className="mainSection">
            <Route exact path="/" component={() => <NoteList notes={store.notes} />} />
            <Route
              exact
              path="/:folderId"
              render={props => (
                <NoteList notes={store.notes.filter(note => note.folderId === props.match.params.folderId)} />
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
          </section>
        </main>
      </>
    );
  }
}
