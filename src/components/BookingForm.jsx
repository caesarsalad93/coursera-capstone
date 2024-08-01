import { useState } from "react";
const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Reservation made for ${date}, at ${time}, for ${guests}, for someone special's ${occasion}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
        type="date"
        id="res-date"
      ></input>
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
      >
         {availableTimes.map((time) => (
            <option key={time} value={time}>
               {time}
            </option>
         ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        value={guests}
        onChange={(e) => {
          setGuests(e.target.value);
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
      </select>
      <input type="submit" value="Make Your reservation"></input>
    </form>
  );
};

export default BookingForm;
