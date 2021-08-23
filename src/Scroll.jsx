import React from "react";

class App extends React.Component {
  i = 0;
  state = {
    list: []
  };
  listDiv = React.createRef();

  render() {
    return (
      <div
        id="list"
        ref={this.listDiv}
        style={{ height: 100, overflow: "scroll" }}
      >
        {this.state.list.map((i) => {
          return <div>{i}</div>;
        })}
      </div>
    );
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => ({ list: [...state.list, this.i++] }));
    }, 1000);
  }

  // 업데이트 직전에 현재 상태를 스냅샷으로 찍어서 return으로 저장
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.list.length === this.state.list.length) {
      return null; // 스냅샷을 저장하지 않음
    }
    const list = this.listDiv.current;
    return list.scrollHeight - list.scrollTop;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
    if (!snapshot) return;
    const list = this.listDiv.current;
    list.scrollTop = list.scrollHeight - snapshot;
  }
}
