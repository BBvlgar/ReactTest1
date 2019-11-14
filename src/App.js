import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Header from './Header';
import logo from './logo.svg';
import './App.css';




function App() {
  const men = [1,2,3,4,5,6,7,8,9]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Header title='Title edite to Tesla' text='Tesla is the best EV car on the market'>
          <Link to='/p'>Link to next page</Link>
        {men}
        </Header>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
