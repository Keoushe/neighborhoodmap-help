import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';


//Working concept for google authentication concept found here: https://github.com/MatthewCranford/neighborhood-map/blob/master/src/index.js
window.gm_authFailure = () => {
  ReactDOM.render(
    <h3>Google map fail load, please check your api key try again.</h3>,
    window.document.getElementById('map'));
 }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
