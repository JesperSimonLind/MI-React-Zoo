import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

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
      <h2>{animal.name}</h2>
      <h2>{animal.latinName}</h2>
      <p>Information: {animal.longDescription}</p>
      <Link to="/">
        <button>Back to Home Page</button>
      </Link>
    </>
  );
};
