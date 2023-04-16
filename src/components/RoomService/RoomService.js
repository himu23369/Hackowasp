import React, { useState } from "react";
import "./RoomService.css";

const RoomServicePage = () => {
  const [roomNumber, setRoomNumber] = useState("");
  const [request, setRequest] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestData = { roomNumber, request };
    // Send the request data to the admin dashboard using an API call or other method.
    console.log(requestData);
    // Reset the form after submission
    setRoomNumber("");
    setRequest("");
  };

  return (
    <div className="room-service-page">
      <h1>Room Service Request</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="roomNumber">Room Number</label>
          <input
            type="text"
            id="roomNumber"
            className="form-control"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="request">Request</label>
          <textarea
            id="request"
            className="form-control"
            rows="5"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">
          <span>Submit Request</span>
          <div className="button-icon">
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M18.9,9.3c-0.3-0.3-0.7-0.4-1.1-0.4c-0.4,0-0.8,0.1-1.1,0.4l-6.4,6.4l-2.2-2.2c-0.3-0.3-0.7-0.4-1.1-0.4c-0.4,0-0.8,0.1-1.1,0.4c-0.6,0.6-0.6,1.6,0,2.1l3.3,3.3c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l7.5-7.5c0.6-0.6,0.6-1.6,0-2.1L18.9,9.3z"
              ></path>
            </svg>
          </div>
        </button>
      </form>
    </div>
  );
};

export default RoomServicePage;
