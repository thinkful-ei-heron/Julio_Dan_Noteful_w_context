import React from 'react';

export default function NoteSidebar(props) {
  return (
    <nav>
      <button className="goBackBtn" onClick={props.goBackEvent}>
        Go Back
      </button>
    </nav>
  );
}
