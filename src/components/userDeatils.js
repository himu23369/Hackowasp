import React, { Component } from "react";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/userData", {
      method: "Post",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }
  render() {
    return (
      <>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <div className="container">
              Name <br />
              <h3>{this.state.userData.fname}</h3>
              <br />
              email <br />
              <h3>{this.state.userData.email}</h3>
            </div>
          </div>
        </div>
      </>
    );
  }
}
