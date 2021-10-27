import "./App.css";
import { Component } from "react";

export function Title() {
  return (
    <div className="heading">
      <h2>
        <b>Styling using Functional and Class Component</b>
      </h2>
    </div>
  );
}
export function SubHeading() {
  return (
    <div className="subHeading">
      <button>To see styling in class component</button>
      <button>To see styling in functional component</button>
    </div>
  );
}

function FunctionComponent() {
  return (
    <div>
      <h1>This is created using functional Component</h1>
      <p>This is done using external CSS</p>
      <p>This is done using inline CSS</p>
    </div>
  );
}

export class ClassComponent extends Component {
  render() {
    return (
      <div className="body">
        <FunctionComponent />

        <div>
          <h1>This is created using class Component</h1>
          <p>This is done using external CSS</p>
          <p>This is done using inline CSS</p>
        </div>
      </div>
    );
  }
}
