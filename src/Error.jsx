import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  };
  render() {
    if (this.state.hasError) {
      return <div>에러 발생</div>;
    }
    return <div>{this.props.children}</div>;
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }
}

class App extends React.Component {
  render() {
    return;
  }
}
