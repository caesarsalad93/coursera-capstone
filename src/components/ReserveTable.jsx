import { Link } from "react-router-dom";

const ReserveTable = () => {
  return (

      <button>
            <Link className="reserveButton" to="/reservations">Reserve A Table</Link>
      </button>
  );
};

export default ReserveTable;
