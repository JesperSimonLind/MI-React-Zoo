import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { getList, save } from "../services/StorageService";
import { NavButton } from "./StyledComponents/Buttons";
import { StyledDescription } from "./StyledComponents/Description";
import { StyledImage } from "./StyledComponents/Images";
import { StyledTitle } from "./StyledComponents/Titles";
import { ButtonWrapper, ImageWrapper } from "./StyledComponents/Wrappers";

export const ShowAnimals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    let animalList: IAnimal[] = getList<IAnimal>();
    if (animalList.length === 0) {
      fetch("https://animals.azurewebsites.net/api/animals")
        .then((response) => response.json())
        .then((animalData) => {
          setAnimals(animalData);
          save(animalData);
        });
    } else {
      setAnimals(animalList);
    }
  }, []);
  return (
    <>
      {animals.map((animal) => {
        return (
          <>
            <div key={animal.id}>
              <StyledTitle>{animal.name}</StyledTitle>
              {/* <ImageWrapper>
                <StyledImage src={animal.imageUrl} alt={animal.name} />
              </ImageWrapper> */}
              <StyledDescription>{animal.shortDescription}</StyledDescription>
              <ButtonWrapper>
                <Link to={"/animal/" + animal.id}>
                  <NavButton>Mer Info</NavButton>
                </Link>
              </ButtonWrapper>
            </div>
          </>
        );
      })}
    </>
  );
};
