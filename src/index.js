import React from 'react';
import ReactDom from 'react-dom';

function Greeting () {
  return (
    <div>Hello</div>
  );
}

ReactDom.render(<Greeting />, document.getElementById('root'));
