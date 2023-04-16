import React from "react";
import "./Navbar.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const handleLogout = async () => {
  fetch("http://localhost:5000/logout-user", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "Logout Succesfull");
      if (data.status === "ok") {
        window.localStorage.removeItem("token");
        window.location.href = "./sign-in";
      }
    });
};

const StayEZNavbar = () => {
  const [Userdata, setUserdata] = useState({
    userData: "",
  });

  const showLoginBtn =
    typeof Userdata.userData.fname == "undefined" ? true : false;
  // console.log(showLoginBtn);
  const logoutFn = async () => {
    await handleLogout();
    setUserdata({
      userData: "",
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/userData", {
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
          console.log(data.fname);
          console.log("s", showLoginBtn);
          setUserdata({ userData: data.data });
        });
    };
    fetchData();
  }, []);
  const welcomemsg = "Welcome " + Userdata.userData.fname;
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div className="container">
          {showLoginBtn && (
            <Link className="navbar-brand" to={"/sign-in"}>
              StayEz
            </Link>
          )}
          {!showLoginBtn && (
            <Link className="navbar-brand" to={"/homepage"}>
              StayEz
            </Link>
          )}
          {!showLoginBtn && (
            <Nav.Link href="/homepage" className="text-light">
              {welcomemsg}
            </Nav.Link>
          )}

          <Nav.Link href="/homepage" className="text-light">
            Home
          </Nav.Link>

          <Nav.Link href="/about" className="text-light">
            About
          </Nav.Link>
          <Nav.Link href="/help" className="text-light">
            Help
          </Nav.Link>
          {showLoginBtn && (
            <Button
              variant="outline-secondary"
              id="Login"
              className=" text-light"
              href="/sign-in"
            >
              Login
            </Button>
          )}
          {showLoginBtn && (
            <Button
              variant="light"
              id="Signup"
              className="text-dark"
              href="sign-up"
            >
              Signup
            </Button>
          )}

          {!showLoginBtn && (
            <Button
              variant="outline-danger"
              id="logout"
              className=" text-light"
              href="/sign-in"
              onClick={logoutFn}
            >
              Logout
            </Button>
          )}
        </div>
      </nav>
    </>
  );
};

export default StayEZNavbar;
