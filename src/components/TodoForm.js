import React from 'react';
import shortid from 'shortid';

export default class TodoForm extends React.Component {
  state ={
    text: ''
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Submit form here
    // the onSubmit method is in TodoList as
    // TodoForm onSubmit={this.addTodo}
    this.props.onSubmit({
      // npm install shortid
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    });
    // to have the text be emptied in the input
    this.setState({
      text: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Things to do..."
        />
        <button onClick={this.handleChange}>Add Todo</button>
      </form>
    );
  }
}