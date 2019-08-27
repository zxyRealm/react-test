import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
// function tick() {
//     const ele = (
//         <div>
//             <h1>hello world</h1>
//             <h2>It is {new Date().toLocaleTimeString()}</h2>
//         </div>
//     )
//     ReactDOM.render(ele, document.getElementById('root'))
// }
// setInterval(tick, 1000)
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
