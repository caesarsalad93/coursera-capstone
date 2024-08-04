import Nav from "./Nav";
import Footer from "./Footer";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import MeetOurChefs from "./MeetOurChefs";
const HomePage = () => {
  return (
    <>
      <Nav section="topNav" />
      <CallToAction />
      <Specials />
      <MeetOurChefs />
      <Footer />
    </>
  );
};

export default HomePage;
