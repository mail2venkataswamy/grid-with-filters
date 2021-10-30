import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App1 = (props) => {
  return <div>{props.childText}</div>;
};
const App2 = (props) => {
  return <div>{props.child2Text}</div>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childText: "this is stateless componet",
      parentText: "this is class based component",
      child2Text: "this is child2 stateless component",
    };
  }
  changeChild2State = () => {
    this.setState({
      child2Text: "i am changed",
    });
  };
  render() {
    return (
      <div>
        <div>{this.state.parentText}</div>
        <button onClick={this.changeChild2State}>Modify Child2 text</button>
        <App1 childText={this.state.childText} />
        <App2 child2Text={this.state.child2Text} />
      </div>
    );
  }
}
export default App;
