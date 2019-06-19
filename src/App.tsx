import React from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './counter/Counter'
import CounterView from './counter/View'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CounterView />
        <Counter/>
      </header>
    </div>
  );
}

export default App;
