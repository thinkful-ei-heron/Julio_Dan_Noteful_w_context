import React from 'react';

export default function Note(props) {
  return (
    <li className="note">
      <h1>{props.name}</h1>
      <p>{props.content}</p>
      <span>{props.date}</span>
      <button>Delete Note</button>
    </li>
  );
}
