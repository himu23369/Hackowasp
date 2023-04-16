import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/Signup";
import UserDetails from "./components/userDeatils";
import Tile from "./components/tiles/tiles";
import Navbar from "./components/Navbar/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Background from "./components/Background/Background";
// import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import FoodOrder from "./components/FoodOrder/FoodOrder";
import BookingForm from "./components/BookingForm/BookingForm";
import RoomServicePage from "./components/RoomService/RoomService";
import NfcReader from "./components/Room_key/Room_key"
function App() {
  return (
    <Router>
      <Background />
      <Container>
        <Row>
          <Col>
            <Navbar />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="mainBody">
              <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/homepage" element={<Tile />} />
                <Route path="/userDetails" element={<UserDetails />} />
                <Route path="/checkin" element={<BookingForm />} />
                <Route path="/order" element={<FoodOrder />} />
                <Route path="/roomservice" element={<RoomServicePage />} />
                <Route path="/nfc" element={<NfcReader />} />
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
