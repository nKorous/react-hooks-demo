import React, { Component, ReactEventHandler } from "react";
import "./App.css";

export interface Props {
  name: string | undefined;
}
export interface State {
  name: string | undefined;
  clicked: number;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  state: State = {
    name: undefined,
    clicked: 0
  };

  componentDidMount() {
    this.setState({
      name: this.props.name
    });
  }

  componentWillUpdate(prevprops: Props) {
    if (prevprops.name !== this.props.name) {
      this.setState({
        name: this.props.name
      });
    }
  }

  handleNameChange(event: any) {
    this.setState({
      name: event.target.value
    });
  }

  handleClick() {
    this.setState({
      clicked: this.state.clicked + 1
    });
  }

  revertClickCounter() {
    this.setState({
      clicked: 0
    });
  }

  render() {
    const { name, clicked } = this.state;
    return (
      <div className="App">
        <h5>class component</h5>
        <h1>The current name is: {name}</h1>
        <h2>You have clicked the button {clicked} times</h2>
        <div>
          <span>
            What is the new name?{" "}
            <input
              type="text"
              placeholder={name}
              onChange={event => this.handleNameChange(event)}
            />
          </span>
        </div>
        <div>
          <button onClick={() => this.handleClick()}>Add Click</button>
          <br />
          <button onClick={() => this.revertClickCounter()}>
            Revert Click Counter
          </button>
        </div>
      </div>
    );
  }
}

export default App;
