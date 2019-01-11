import React from "react";

export default props => (
  // When the todo button is clicked,
  // it will call on the function toggleComplete
  <div 
    style={{
      // cross the text when it has been clicked
      // using the ? operator to let code know,
      // when props.todo item has been completed,
      // add line through. 
      textDecoration: props.todo.complete ? "line-through": ""
    }}
    onClick={props.toggleComplete}
    >
    {props.todo.text}
  </div>
);