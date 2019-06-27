import React from 'react';
import './App.css';

import Header from './components/Header'
import AddTodo from './components/AddTodo'
import ListTodo from './components/ListTodo'

function App() {
  return (
    <div className="App">
      <Header />
      <AddTodo />
      <ListTodo />
    </div>
  );
}

export default App;
