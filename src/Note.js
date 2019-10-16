import React from 'react';
import { Link } from 'react-router-dom';
import './Note.css';

export default function Note(props) {
  console.log(props);
  return (
    <>
      <li className="note">
        <Link to={'/note/' + props.id}>
          <div className="noteCard">
            <h2>{props.name}</h2>
            <div className="noteInfo">
              <span>{props.date}</span>
              <button>Delete Note</button>
            </div>
          </div>
        </Link>
      </li>
      {props.description ? (
        <li>
          <p>{props.description}</p>
        </li>
      ) : (
        ''
      )}
    </>
  );
}
