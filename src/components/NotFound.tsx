import { Link } from "react-router-dom";
import { NavButton } from "./StyledComponents/Buttons";
import { StyledText } from "./StyledComponents/Text";
import { ButtonWrapper } from "./StyledComponents/Wrappers";

export const NotFound = () => {
  return (
    <>
      <StyledText>The page your are looking does not exist!</StyledText>
      <ButtonWrapper>
        <Link to="/">
          <NavButton>Go Home</NavButton>
        </Link>
      </ButtonWrapper>
    </>
  );
};
