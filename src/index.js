import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';

ReactDOM.render(
  <Application url="http://jsonplaceholder.typicode.com/users"/>,
  document.getElementById('root')
);
