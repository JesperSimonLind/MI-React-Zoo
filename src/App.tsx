import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ShowAnimals } from "./components/ShowAnimals";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowAnimals />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
