import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";

export const ShowAnimals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    if (animals.length !== 0) return;
    fetch("https://animals.azurewebsites.net/api/animals")
      .then((response) => response.json())
      .then((animalData) => {
        setAnimals(animalData);
        console.log(animalData);
      });
  });
  return <>Det funkar!</>;
};
