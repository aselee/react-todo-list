import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

export default class TodoList extends React.Component {

  state = {
    // lifting up the state
    // empty array of todos
    todos: [],
    todoToShow:'all'
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
            // insteading having the keys:
            // id: todo.id,
            // text: todo.text,

            // we can do:
            ...todo,
            // ! -> inverse value
            // converts the operand to boolean type to True/False
            // Returns false if its single operand that can be 
            // converted to true; otherwise, returns true.
            complete: !todo.complete
          };
        } else {
          // if id is not true,
          return todo;
        }
      })
    });
  };

  // function to updateToDoShow
  updateTodoToShow = (s) => {
    this.setState({
      todoToShow: s
    })
  }


  render() {
    // adding the render for the buttons
    let todos = [];

    if (this.state.todoToShow === 'all') {
      todos = this.state.todos;
    } else if (this.state.todoToshow === 'active') {
      todos = this.state.todos.filter(todo => !todo.complete)
    } else if (this.state.todoToshow === 'complete') {
      todos = this.state.todos.filter(todo => !todo.complete)
    }


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

          // text={todo.text} 
          // instead of text, we use todo(go to Todo.js)
          todo={todo} 
          />
      ))}
      {/* No use for JSON.stringify, use map */}
      {/* {JSON.stringify(this.state.todos)} */}
      <div>
        {/* need to show the number of active todos */}
        Things I need to do: 
        {/* 
          using the filter method, to go through each individual index 
          and store the elements back to the todo empty array in state
        */}
          {this.state.todos.filter(todo => !todo.complete).length}
      </div>
      <div>
        <button onClick={() => this.updateTodoToShow('all')}>all</button>
        <button onClick={() => this.updateTodoToShow('active')}>active</button>
        <button onClick={() => this.updateTodoToShow('complete')}>complete</button>
      </div>
    </div>
    )
  }
}