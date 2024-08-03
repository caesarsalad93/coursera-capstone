import BookingForm from "./BookingForm"
const BookingPage = ({availableTimes, dispatch, submitForm}) => {
    return (
        <BookingForm 
        submitForm={submitForm}
        availableTimes={availableTimes}
        dispatch={dispatch}
        />
    )
}

export default BookingPage;