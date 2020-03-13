import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

function MyInfo() {
    return (
        <div>
            <h1 style={{color: "blue"}}>Michael Campbell</h1>
            <p>This is me writing a paragraph using ReactJS!</p>
            <ul>
                <li>Tokyo</li>
                <li>Portugal</li>
                <li>Australia</li>
            </ul>
        </div>
    )
};

ReactDOM.render(<MyInfo />, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
