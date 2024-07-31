import { Link } from "react-router-dom";

const ReserveTable = () => {
  return (
    <Link to="/reservations">
      <button>Reserve A Table</button>
    </Link>
  );
};

export default ReserveTable;
