import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import reportWebVitals from './reportWebVitals';

const post = {
  title: 'Dinosaurs are awesome',
  authors: ['Stealthy Stegosaurus', 'Swapnil Shah', 'Shruti Shah'],
  body: 'Check out this body property!',
  comments: ['First!', 'Great post', 'Hire this author now!'],
};

ReactDOM.render(
  <React.StrictMode>
    <Post {...post} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
