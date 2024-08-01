import "./App.css";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import { useState, useReducer } from "react";

const updateTimes = (state, action) => {
  return state;
};

const initializeTimes = () => {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
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
