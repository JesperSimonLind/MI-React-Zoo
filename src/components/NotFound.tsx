import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <p>The page your are looking does not exist!</p>
      <Link to="/">
        <button>Go Home</button>
      </Link>
    </>
  );
};
