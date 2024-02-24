import React, {useState} from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';

// 구현할 기능 List
// 1. input창이 있고 추가 버튼이 있다.
// 2. input창에 값을 입력하고 버튼을 클릭하면 값이 추가된다.
// 3. 삭제 버튼을 누르면 삭제가 가능하다.

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    console.log("I'm Here '", inputValue, "'")
    setTodoList([...todoList, inputValue])
  }

  return (
    <main>
      <h1>My First React Mini Project</h1>

      {/* input 값을 event에 담아 프린트 */}
      <input value = {inputValue} type = "text" onChange = {
        (event) => setInputValue(event.target.value)
      }/>
      <button onClick = {addItem}>Add</button>

      <TodoBoard todoList = {todoList}/>
    </main>
  );
}

export default App;
