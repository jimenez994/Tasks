import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
// components
import TaskList from './components/task/taskList'
import NewTask from './components/task/newTask';
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Landing from "./components/layout/landing";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <div className="App">
              <Navbar />
              <Route exact path="/" component={Landing} />
              <div className="container">
                <Route exact path="/newTask" component={NewTask}/>
                <Route exact path="/tasks" component={TaskList}/>
              </div>
              <Footer />
            </div>
        </Router>
      </Provider>
    )
  }
}
export default App;
