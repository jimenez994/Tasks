import React, { Component } from 'react';
import './App.css';
import TaskList from './dashboard/taskList.js'
import NewTask from './dashboard/newTask.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello World</h1>
        <TaskList/>
        <NewTask/>
      </div>
    );
  }
}

export default App;
