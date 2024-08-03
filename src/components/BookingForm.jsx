import { useState, useEffect } from "react";

const BookingForm = ({availableTimes, dispatch, submitForm}) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
   setDate(e.target.value);
   dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
 };
  
useEffect(() => {

})

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        value={date}
        onChange={handleDateChange}
        type="date"
        id="res-date"
        required
      ></input>
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
        required
      >
         {availableTimes && availableTimes.map((time) => (
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
      ></input>
      <label htmlFor="occasion">Occasion</label>
      <select
        value={occasion}
        onChange={(e) => {
          setOccasion(e.target.value);
        }}
        id="occasion"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Celebrating life</option>
      </select>
      <input type="submit" value="Make Your reservation" disabled={!date}></input>
    </form>
  );
};

export default BookingForm;
