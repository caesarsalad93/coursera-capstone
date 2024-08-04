import Nav from "./Nav";
import Footer from "./Footer";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import ItemCard from "./ItemCard";

const HomePage = () => {
  return (
    <>
      <Nav section="topNav" />
      <CallToAction />
      <Specials />
      <Footer />
    </>
  );
};

export default HomePage;
