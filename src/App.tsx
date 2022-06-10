import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { NotFound } from "./components/NotFound";
import { ShowAnimals } from "./components/ShowAnimals";
import { SingleAnimal } from "./components/SingleAnimal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowAnimals />} />
          <Route path="/animal/:id" element={<SingleAnimal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
