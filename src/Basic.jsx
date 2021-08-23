import React from "react";

export default class Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: this.props.count };
    console.log("constructor: 생성됨", props);
  }

  interval = null;

  componentWillMount() {
    console.log("componentWillMount: 그려지기 직전");
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      "componentWillReceiveProps\n부모로부터 받는 props가 '바뀔' 예정 :",
      nextProps
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "shouldComponentUpdate: 업데이트되면 다시 render 할까?",
      nextProps,
      nextState
    );
    return nextState.count % 2 ? true : false;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "componentWillUpdate: should가 true를 리턴했으니 업뎃하기 직전:",
      nextProps,
      nextState
    );
  }

  componentDidUpdate(prevProps, prevstate) {
    console.log(
      "componentDidUpdate: 업데이트 및 re-render 직후:",
      prevProps,
      prevstate
    );
  }

  componentDidMount() {
    console.log("그려진 직후");
    this.timer = setInterval(
      () => this.setState((state) => ({ ...state, count: state.count + 1 })),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    console.log("그려짐");
    return <div className="App">{this.state.count}</div>;
  }
}
