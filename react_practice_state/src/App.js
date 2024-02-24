import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount2] = useState(0); // useState는 배열을 반환하며, 첫 번째 원소는 상태 값, 두 번째 원소는 상태를 설정하는 함수

  const increase = () => {
    setCount2(count + 1) // count2 += 1;
    console.log("state count work?", count)
  }

  return (
    <main>
      {/* 버튼을 클릭할 때마다 클릭 횟수가 증가하도록 구현 */}
      <div>state : {count}</div>
      <button onClick={increase}>Click</button>
    </main>
  );
}

export default App;
