import React from "react";

class Child extends React.Component {
  state = {
    childCount: 0
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.count !== prevState.childCount) {
      return {
        childCount: nextProps.count
      };
    }
    return null;
  }
  render() {
    return (
      <>
        <div>props: {this.props.count}</div>
        <div>▼동기화▼</div>
        <div>state: {this.state.childCount}</div>
      </>
    );
  }
}

export default class App extends React.Component {
  state = {
    count: 0
  };
  increase = () => {
    this.setState((state) => ({
      ...state,
      count: this.state.count + 1
    }));
  };
  render() {
    return (
      <div>
        <Child count={this.state.count} />
        <button onClick={this.increase}>+</button>
      </div>
    );
  }
}
