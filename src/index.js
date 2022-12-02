import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root')
  );
//root = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');

const postItem = React.createElement(
  'div',
  { 
      className: 'post-item'
  },
  React.createElement(
      'h1',
      {
          title:"hello",
          className: "heading"
      },
      'Hello guys!'
  ),
  React.createElement(
      'ul',
      null,
      React.createElement(
              'li',
              null,
              'Javascript'
          ),
          React.createElement(
              'li',
              null,
              'RactJS'
          )
  ),
);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
