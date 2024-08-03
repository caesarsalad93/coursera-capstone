import { useState, useEffect } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: "UPDATE_TIMES", payload: e.target.value });
  };

  useEffect(() => {});

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion,
    };
    submitForm(formData);
    alert(
      `Reservation made for ${date}, at ${time}, for ${guests}, for someone special's ${occasion}`
    );
  };

  return (
    <form onSubmit={handleSubmit} aria-labelledby="booking-form-title">
           <h2 id="booking-form-title">Reservation Booking</h2>
      <label htmlFor="res-date">Choose date</label>
      <input
        value={date}
        onChange={handleDateChange}
        type="date"
        id="res-date"
        name="res-date"
        required
        aria-required="true"
      ></input>
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="res-time"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
        required
        aria-required="true"
      >
        {availableTimes &&
          availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        value={guests}
        onChange={(e) => {
          setGuests(Number(e.target.value));
        }}
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="guests"
      ></input>
      <label htmlFor="occasion">Occasion</label>
      <select
        value={occasion}
        onChange={(e) => {
          setOccasion(e.target.value);
        }}
        id="occasion"
        name="occasion"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Celebrating life</option>
      </select>
      <button
        type="submit"
        value="Make Your reservation"
        disabled={!date}
        aria-disabled={!date}
      >Make Your Reservation</button>
    </form>
  );
};

export default BookingForm;
