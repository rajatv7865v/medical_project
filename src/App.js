import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import AdvertisePage from "./components/AdvertisePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/advertise" element={<AdvertisePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
