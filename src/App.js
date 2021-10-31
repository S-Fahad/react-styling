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

export class SubHeading extends Component {
  state = {
    func: false,
    cls: false,
  };
  changeFunc = () => {
    this.state.func === false
      ? this.setState({ func: true })
      : this.setState({ func: false });
  };
  changeCls = () => {
    this.state.cls === false
      ? this.setState({ cls: true })
      : this.setState({ cls: false });
  };
  render() {
    return (
      <div>
        <div className="subHeading">
          <button onClick={this.changeFunc}>
            To see styling in functional component
          </button>
          <button onClick={this.changeCls}>
            To see styling in class component
          </button>
        </div>
        <div className="flex">
          {this.state.func == true ? <FunctionComponent /> : null}
          {this.state.cls === true ? <ClassComponent /> : null}
        </div>
      </div>
    );
  }
}

function FunctionComponent() {
  return (
    <div className="content">
      <h1>This is created using functional Component</h1>
      <p>This is done using external CSS</p>
      <p>This is done using inline CSS</p>
    </div>
  );
}

class ClassComponent extends Component {
  render() {
    return (
      <div className="content">
        <h1>This is created using class Component</h1>
        <p>This is done using external CSS</p>
        <p>This is done using inline CSS</p>
      </div>
    );
  }
}
