import React from 'react';
import { Link } from 'react-router-dom';

export default function Note(props) {
  console.log(props);
  return (
    <Link to={'/note/' + props.id}>
      <li className="note">
        <h1>{props.name}</h1>
        <span>{props.date}</span>
        <button>Delete Note</button>
      </li>
      {props.description ? (
        <li>
          <p>{props.description}</p>
        </li>
      ) : (
        ''
      )}
    </Link>
  );
}
