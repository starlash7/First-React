// 함수형 컴포넌트
import React from "react";

function FuncionalComponent() {
  return <h1>Hello, React from Funcional Component!</h1>;
}

export default FuncionalComponent;

// 클래스 컴포넌트
import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    return <h1>Hello, React from Component!</h1>;
  }
}

//export default ClassComponent; (export 2가지는 불가능!)
