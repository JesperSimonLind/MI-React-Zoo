import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { NavButton } from "./StyledComponents/Buttons";
import { StyledDescription } from "./StyledComponents/Description";
import { StyledImage } from "./StyledComponents/Images";
import { StyledTitle } from "./StyledComponents/Titles";
import { ButtonWrapper, ImageWrapper } from "./StyledComponents/Wrappers";

export const SingleAnimal = () => {
  const [animal, setAnimal] = useState<IAnimal>({
    name: "",
    latinName: "",
    imageUrl: "",
    longDescription: "",
  });

  let params = useParams();

  useEffect(() => {
    fetch("https://animals.azurewebsites.net/api/animals/" + params.id)
      .then((response) => response.json())
      .then((singleAnimalInfo) => setAnimal(singleAnimalInfo));
  });
  return (
    <>
      <StyledTitle>{animal.name}</StyledTitle>
      <StyledTitle>{animal.latinName}</StyledTitle>
      <ImageWrapper>
        <StyledImage src={animal.imageUrl} alt={animal.name} />
      </ImageWrapper>
      <StyledDescription>
        Information: {animal.longDescription}
      </StyledDescription>
      <ButtonWrapper>
        <Link to="/">
          <NavButton>Back to Home Page</NavButton>
        </Link>
      </ButtonWrapper>
    </>
  );
};
