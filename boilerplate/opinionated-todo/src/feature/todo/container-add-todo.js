import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './action-main';

class AddTodo extends React.Component {

  handleAddTodo(e, input) {
    e.preventDefault();
    if (!input.value.trim()) { return; }
    this.props.dispatch(addTodo(input.value));
    input.value = '';
  }

  render() {
    let input;

    return (
      <div>
        <form
          onSubmit={e => this.handleAddTodo(e, input)}>
          <input ref={node => (input = node)} />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);