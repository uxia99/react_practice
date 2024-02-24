// 컴포넌트(Component) : 템플릿과 유사한 개념

import React from "react";

function Box(props) {
  const clickMe = () => {
    alert("Finished React");
  };
  return (
    <div className="box">
      {/* props 개념 : 여러 값을 입력하고싶을 때 이름을 하나 정해서 대입 */}
      Box{props.num}
      {props.name}
      <button onClick={clickMe}>Click</button>
    </div>
  );
}

export default Box;
