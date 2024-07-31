import Nav from "./Nav";
import Footer from "./Footer";
import CallToAction from "./CallToAction";
import Chicago from "./Chicago";
import BookingForm from "./BookingForm";

const HomePage = () => {
    return (
        <>
            <Nav section="topNav"/>
            <BookingForm />
            <CallToAction />
            <Footer />
        </>
    )
}

export default HomePage;