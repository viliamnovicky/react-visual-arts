import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="domov" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
