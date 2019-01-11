import React, { Component } from 'react';
import TodoList from './components/TodoList';


// https://www.youtube.com/watch?v=I6IY2TqnPDA
// 15:59

class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
