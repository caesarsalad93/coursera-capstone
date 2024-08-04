import chefsImage from "../assets/Mario and Adrian A.jpg";

const MeetOurChefs = () => {
  return (
    <div className="chefsContainer">
      <div className="chefsText">
        <h2>Meet Our Chefs</h2>
        <p>
          Mario and Adrian, two brothers with a passion for authentic
          Mediterranean cuisine, bring a unique blend of Italian, Greek, and
          Turkish influences to our restaurant. With years of experience and a
          love for traditional recipes, they craft dishes that are both
          delicious and true to their cultural heritage.
        </p>
        <p>
          Mario, a seasoned chef from Italy, creates our menu based on cherished
          family recipes and his extensive culinary background. Adrian, with his
          expertise in marketing, ensures that every dish is a culinary
          masterpiece that delights our guests. Together, they offer an
          unforgettable dining experience that celebrates the rich flavors of
          the Mediterranean.
        </p>
      </div>
      <div className="chefsImage">
        <img src={chefsImage} alt="Mario and Adrian" />
      </div>
    </div>
  );
};

export default MeetOurChefs;
