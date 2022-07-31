import React, { Component } from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullname: "Achraf Hadj Salem",
        bio: "Developer",
        img: "./moi.jpg",
        profession: "React JS Developer",
      },
      show: false,
      count: 0,
    };
  }

  incrementCounter = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  componentDidMount() {
    setInterval(this.incrementCounter, 1000);
  }

  showHide = () => {
    this.setState({
      show: !this.state.show,
      count: 0,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="App">
          <div className="">
            <button className="felsa" onClick={this.showHide}>
              {this.state.show ? "" : ""}
            </button>
          </div>
          {this.state.show && (
            <div className="profile-card">
              <div className="profileimg">
                <div className="Photo">
                  <img src={this.state.person.img} alt=""></img>
                </div>
              </div>
              <div className="profile-content">
                <h1>{this.state.person.fullname}</h1>
                <h3>{this.state.person.profession}</h3>
                <p>{this.state.person.bio}</p>
              </div>
            </div>
          )}
          <div className="compteur">
            <h4> Counter</h4>
            <br />
            <h3>{this.state.count} second</h3>
            <br />
          </div>
        </div>
        <div className="footer">
          <p> Created with ❤ by Achr@f</p>
        </div>
      </div>
    );
  }
}

export default App;
