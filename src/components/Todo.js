import React from "react";

export default props => 
  // When the todo button is clicked,
  // it will call on the function toggleComplete
  <div onClick={props.toggleComplete}>{props.text}</div>;