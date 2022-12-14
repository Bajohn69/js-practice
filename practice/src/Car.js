import React from "react";

// class 的寫法
class Car extends React.Component {
  constructor(props) {
    super(props); // super 是母集合
    this.state = { color: "red" };
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  //   useEffect = componentDidMount, componentDidUpdate, componentWillUnmount 三個綜合

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  //   componentWillUnmount() {
  //     console.log();
  //   }

  buttonHandler() {
    this.setState({ color: "green" });
  }
  render() {
    return (
      <div>
        <h2>
          I am a {this.props.brand} {this.state.color} car.
        </h2>
        <button onClick={this.buttonHandler}>change color</button>
      </div>
    );
  }
}

export default Car;
