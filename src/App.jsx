import "./App.css";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import { useState, useReducer } from "react";
import { fetchAPI, submitAPI } from "./api";

const updateTimes = (state, action) => {
  const selectedDate = new Date(action.payload);
  const newTimes = fetchAPI(selectedDate);
  console.log(newTimes);
  return newTimes;
};

const initializeTimes = () => {
  const today = Date.now();
  const todaysDate = new Date(today)
  return fetchAPI(todaysDate);
};
function App() {

  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/footer" element={<Footer />} />
        <Route
          path="/reservations"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
