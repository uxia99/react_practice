import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props) {

  console.log("TodoBoard : '", props.todoList, "'");

  return (
    <div>
      <h3>Todo List</h3>
      {/* 배열에 있는 내용을 보여주고 싶을 때 사용하는 함수 */}
      {props.todoList.map((item) => <TodoItem item = {item}/>)} 
    </div>
  )
}

export default TodoBoard;