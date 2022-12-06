
// import {StrictMode} from 'react';
// import {createRoot} from 'react-dom/client';

// import App from './App';

// // 👇️ IMPORTANT: use correct ID of your root element
// // this is the ID of the div in your index.html file
// const rootElement = document.getElementById('root');
// const root = createRoot(
//   <p></p>,
//   rootElement);

// // 👇️ if you use TypeScript, add non-null (!) assertion operator
// // const root = createRoot(rootElement!);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.render(
//   document.getElementById('root')
//   );
// root.render(<App/>);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import State from './js/setState.js'

const root = ReactDOM.createRoot(
  document.getElementById('root')
  );
//root = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');

// js
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

// Display a "Like" <button>
const button = React.createElement( 
  'button',
  {onClick: () => this.setState({liked: true})},
  'Like'
);

// jsx
const reactCourse = 'ReactJS'
const ul = <ul className="coures-list">
  <li style={{color: 'red'}}>Javascript</li>
  <li style={{color:'blue'}}>{reactCourse}</li>
</ul>



root.render(
  <State />
  
  //postItem
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

//start: npm start
//stop: ctrl + c
