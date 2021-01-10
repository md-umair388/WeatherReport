import React, { Component } from "react";

class ColorChange extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      bgColor: "#8A7D81",
    };
  }

  boxClick1 = (e) => {
    this.setState({
      bgColor: "red",
    });
  };
  boxClick2 = (e) => {
    this.setState({
      bgColor: "blue",
    });
  };
  boxClick3 = (e) => {
    this.setState({
      bgColor: "green",
    });
  };
  boxClick4 = (e) => {
    this.setState({
      bgColor: "black",
    });
  };
  boxClick5 = (e) => {
    this.setState({
      bgColor: "yellow",
    });
  };
  boxClick6 = (e) => {
    this.setState({
      bgColor: "brown",
    });
  };

  render() {
    return (
      <div>
        <article className="experimentsHolder">
          <h2>Color Change</h2>
          <div className="buttonCol">
            <div
              style={{
                margin: "8px",
                padding: "5px",
              }}
            >
              <button
                style={{
                  margin: "5px",
                  padding: "5px",
                  backgroundColor: "Red",
                  height: "25px",
                  width: "50px",
                }}
                className="boxClickCss1"
                onClick={this.boxClick1}
              />
              <button
                style={{
                  margin: "8px",
                  padding: "5px",
                  backgroundColor: "Blue",
                  height: "25px",
                  width: "50px",
                }}
                className="boxClickCss2"
                onClick={this.boxClick2}
              />
              <button
                style={{
                  margin: "8px",
                  padding: "5px",
                  backgroundColor: "Green",
                  height: "25px",
                  width: "50px",
                }}
                className="boxClickCss3"
                onClick={this.boxClick3}
              />
              <button
                style={{
                  margin: "8px",
                  padding: "5px",
                  backgroundColor: "Black",
                  height: "25px",
                  width: "50px",
                }}
                className="boxClickCss4"
                onClick={this.boxClick4}
              />
              <button
                style={{
                  margin: "8px",
                  padding: "5px",
                  backgroundColor: "Yellow",
                  height: "25px",
                  width: "50px",
                }}
                className="boxClickCss5"
                onClick={this.boxClick5}
              />
              <button
                style={{
                  margin: "8px",
                  padding: "5px",
                  backgroundColor: "Brown",
                  height: "25px",
                  width: "50px",
                }}
                className="boxClickCss6"
                onClick={this.boxClick6}
              />
            </div>
          </div>
        </article>

        <div
          className="backgroudShow"
          style={{
            backgroundColor: this.state.bgColor,
            width: "100%",
            height: "350px",
          }}
        ></div>
      </div>
    );
  }
}

export default ColorChange;
