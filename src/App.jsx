import "./App.css";
import Footer from "./components/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import { useState, useReducer } from "react";
import { fetchAPI, submitAPI } from "./api";
import ConfirmedBooking from "./components/ConfirmedBooking";

export const updateTimes = (state, action) => {
  const selectedDate = new Date(action.payload);
  const newTimes = fetchAPI(selectedDate);
  console.log(newTimes);
  return newTimes;
};

export const initializeTimes = () => {
  const today = Date.now();
  const todaysDate = new Date(today);
  return fetchAPI(todaysDate);
};

function App() {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmation');
    } else {
      console.log('error');
    }
  };

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    null,
    initializeTimes
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/footer" element={<Footer />} />
        <Route
          path="/reservations"
          element={
            <BookingPage submitForm={submitForm} availableTimes={availableTimes} dispatch={dispatch} />
          }
        />
        <Route path="/confirmation" element={<ConfirmedBooking />}></Route>
      </Routes>
    </>
  );
}

export default App;
