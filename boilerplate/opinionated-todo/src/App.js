import React, { Component } from 'react';
import './App.css';
import AddTodo from './feature/todo/container-add-todo';
import TodoList from './feature/todo/container-todo-list';
import FilterLink from './feature/todo/container-filterlink';

class App extends Component {
  render() {
    return (
      <div className="container">
        <AddTodo />
        <TodoList />
        <FilterLink />
      </div>
    );
  }
}

export default App;
