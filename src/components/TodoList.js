import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

export default class TodoList extends React.Component {

  state = {
    // lifting up the state
    // empty array of todos
    todos: [],
    todoToShow: "all",
    toggleAllComplete: true
  };

  addTodo = (todo) => {
    // creating the copy of the array
    // and passing to the new var newTodos

    // const newTodos=[todo, ...this.state.todos];

    // instead of using the newTodos array
    // add it too the setState

    this.setState(state => ({
      todos: [todo, ...state.todos]
    }));
  };

  toggleComplete = id => {
    this.setState(state => ({
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
    }));
  };

  // function to updateToDoShow
  updateTodoToShow = s => {
    this.setState({
      todoToShow: s
    });
  };

  // function to delete todo items
  handleDeleteTodo = id => {
    this.setState(state => ({
      todos: this.state.todos.filter(todo => todo.id !== id)
    }));
  };

  // function to remove all crossed todos
  removeCompleted = () => {
    this.setState(state => ({
      todos: this.state.todos.filter(todo => todo.complete)
    }));
  };

  render() {
    // adding the render for the buttons
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToshow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete)
    } else if (this.state.todoToshow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete)
    }


    return (
    <div>
      <TodoForm onSubmit={this.addTodo} />
      {todos.map(todo => (
        // <div key={todo.id}>{todo.text}</div>
        
        // adding Todo.js file to create a function
        <Todo 
          key={todo.id} 
          // prop that is passing the function
          toggleComplete={() => this.toggleComplete(todo.id)} 

          // text={todo.text} 
          // instead of text, we use todo(go to Todo.js)
          // creating a delete function
          onDelete={() => this.handleDeleteTodo(todo.id)}
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
        <button onClick={() => this.updateTodoToShow("all")}>
          all
        </button>
        <button onClick={() => this.updateTodoToShow("active")}>
          active
        </button>
        <button onClick={() => this.updateTodoToShow("complete")}>
          complete
        </button>
      </div>

      {/* creating a button function to remove all completed todos */}
      {/* Give the todo items that are complete */}
      {/* instead of using filter, we only need to find the crossed completed todos
      so use the some method, some will find the items and exit early */}
      {this.state.todos.some(todo => todo.complete).length ? (
        <div>
          <button onClick={this.removeCompleted}>
            Remove all complete todos
          </button>
        </div>
      ) : null}
      <div>
        <button 
          onClick={() => 
            this.setState(state => ({
              todos: state.todos.map(todo => ({
                ...todo,
                complete: state.toggleAllComplete
              })),
              toggleAllComplete: !state.toggleAllComplete
            }))
          }
        >
          toggle all complete: {`${this.state.toggleAllComplete}`}
        </button>
      </div>
    </div>
    )
  }
}