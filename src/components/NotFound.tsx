import { Link } from "react-router-dom";
import { NavButton } from "./StyledComponents/Buttons";

export const NotFound = () => {
  return (
    <>
      <p>The page your are looking does not exist!</p>
      <Link to="/">
        <NavButton>Go Home</NavButton>
      </Link>
    </>
  );
};
