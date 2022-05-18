import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, HopLevelOne, HopLevelTwo } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/hop-1" element={<HopLevelOne />} />
        <Route path="/hop-2" element={<HopLevelTwo />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
