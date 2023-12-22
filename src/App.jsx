import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cuaca from "./Pages/Cuaca";
import Portofolio from "./Pages/Portofolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-my-project/" element={<Home />} />
        <Route path="/react-my-project/about/" element={<About />} />
        <Route path="/react-my-project/cuaca/" element={<Cuaca/>} />
        <Route path="/react-my-project/portofolio/" element={<Portofolio/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
