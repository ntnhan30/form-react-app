// jshint ignore: start
import React, { Component } from "react";
import "./App.css";
import users from "./users.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: users,
      input: "",
      nationality: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    // this.setState({
    //   users: users.filter(user => {
    //     return (
    //       user.name.first.includes(this.state.input) ||
    //       user.name.last.includes(this.state.input)
    //     );
    //   })
    // });
    console.log("INPUT", this.state.input);
  }
  render() {
    let nationalities = [];
    users.map(user => {
      if (!nationalities.includes(user.nat)) {
        nationalities.push(user.nat);
      }
    });
    nationalities.sort((a, b) => {
      console.log(a);
      if (a < b) {
        return -1;
      } else {
        return 1;
      }
    });
    return (
      <div className="App">
        <div>{nationalities.map(nat => console.log("NAT:", nat))}</div>
        <h1>Form React App</h1>
        <span>NAtionality: {this.state.nationality}</span>
        <form>
          <input
            type="text"
            name="input"
            value={this.state.input}
            placeholder="Your search"
            onChange={this.handleChange}
          />
          {this.state.input}
        </form>
        <div className="table">
          <p>Pic</p>
          <p>Name</p>
          <p>Email</p>
          <p>Gender</p>
          <p>Age</p>
          <form action="">
            {" "}
            Nationality
            <select name="nationality" onChange={this.handleChange}>
              {nationalities.map(nat => {
                return <option value={nat}>{nat}</option>;
              })}
            </select>
          </form>
        </div>
        <div>
          {users
            .filter(user => {
              return (
                user.name.first
                  .toUpperCase()
                  .includes(this.state.input.toUpperCase()) ||
                user.name.last
                  .toUpperCase()
                  .includes(this.state.input.toUpperCase())
              );
            })
            .filter(user => {
              return user.nat
                .toUpperCase()
                .includes(this.state.nationality.toUpperCase());
            })
            .map(user => (
              <div className="table">
                <img src={user.picture.medium} alt="" />
                <p>
                  {user.name.first} {user.name.last}
                </p>
                <p>{user.email}</p>
                <p>{user.gender}</p>
                <p>{user.dob.age}</p>
                <p>{user.nat}</p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
