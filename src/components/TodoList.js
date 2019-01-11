import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

export default class TodoList extends React.Component {

  state = {
    // lifting up the state
    // empty array of todos
    todos: []
  };

  addTodo = (todo) => {
    // creating the copy of the array
    // and passing to the new var newTodos

    // const newTodos=[todo, ...this.state.todos];

    // instead of using the newTodos array
    // add it too the setState

    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
        // Suppose to update
          return {
            // insteading having the keys can do:
            ...todo,
            // id: todo.id,
            // text: todo.text,
            complete: !todo.complete
          };
        } else {
          // if id is not true,
          return todo;
        }
      })
    });
  };

  render() {
    return (
    <div>
      <TodoForm onSubmit={this.addTodo} />
      {this.state.todos.map(todo => (
        // <div key={todo.id}>{todo.text}</div>
        
        // adding Todo.js file to create a function
        <Todo 
          key={todo.id} 
          // prop that is passing the function
          toggleComplete={() => this.toggleComplete(todo.id)} 
          text={todo.text} 
          />
      ))}
      {/* No use for JSON.stringify, use map */}
      {/* {JSON.stringify(this.state.todos)} */}
    </div>
    )
  }
}