import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm() {
  const [roomType, setRoomType] = useState("");

  const handleRoomTypeChange = (e) => {
    setRoomType(e.target.value);
  };

  const roomTypeOptions = [
    { label: "Single Room", value: "single" },
    { label: "Double Room", value: "double" },
    { label: "Twin Room", value: "twin" },
    { label: "Suite", value: "suite" },
  ];

  return (
    <div className="booking-form">
      <h2>ROOM BOOKING</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="room-type">Room Type</label>
          <div className="dropdown">
            <select
              id="room-type"
              name="room-type"
              className="dropdown-select"
              value={roomType}
              onChange={handleRoomTypeChange}
              required
            >
              <option value="">Select a Room Type</option>
              {roomTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="dropdown-menu">
              {roomTypeOptions.map((option) => (
                <div
                  key={option.value}
                  className="dropdown-menu-item"
                  onClick={() => setRoomType(option.value)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="check-in">Check-in Date</label>
          <input type="date" id="check-in" name="check-in" required />
        </div>
        <div className="form-group">
          <label htmlFor="check-out">Check-out Date</label>
          <input type="date" id="check-out" name="check-out" required />
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comments</label>
          <textarea id="comments" name="comments" rows="3"></textarea>
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default BookingForm;
