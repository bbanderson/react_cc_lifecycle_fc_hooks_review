import React from "react";

class Numbering extends React.Component {
  state = {};
  componentDidMount() {
    console.log("Numbering componentDidMount");
  }
  componentWillUnmount() {
    console.log("Numbering componentWillUnMount");
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    console.log("Numbering getDerivedStateFromProps", nextProps, prevProps);
    return {};
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Numbering componentDidUpdate", prevProps, prevState);
  }
  render() {
    return this.props.children;
  }
}

class App extends React.Component {
  state = {
    count: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => ({ count: state.count + 1 }));
    }, 1000);
  }
  render() {
    if (this.state.count % 2 === 0) {
      return (
        <Numbering className="even" title="even">
          {this.state.count}
        </Numbering>
      );
    }
    return (
      <Numbering className="odd" title="odd">
        {this.state.count}
      </Numbering>
    );
  }
}

export default App;
