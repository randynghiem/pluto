import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleTodo, FilterStatus } from './action-main';
import Todo from './component-todo';

class TodoList extends React.Component {

  getVisibleTodos(todos, filter) {
    switch (filter) {
      case FilterStatus.SHOW_ALL:
        return todos;
      case FilterStatus.SHOW_COMPLETED:
        return todos.filter(t => t.completed);
      case FilterStatus.SHOW_ACTIVE:
        return todos.filter(t => !t.completed);
      default:
        throw new Error('Unknown filter: ' + filter);
    }
  }

  render() {
    let todos = this.getVisibleTodos(this.props.todos, this.props.filter);
    return (
      <ul>
        {todos.map(todo => (<Todo key={todo.id} {...todo} onClick={() => this.props.toggleTodo(todo.id)} />)
        )}
      </ul>
    );
  }
}

export default connect(
  state => ({ todos: state.todos, filter: state.filter }),
  dispatch => ({ toggleTodo: bindActionCreators(toggleTodo, dispatch) })
)(TodoList)