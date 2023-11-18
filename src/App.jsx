import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Store from "./pages/Store";
import Portfolio from "./pages/Portfolio";
import Pricelist from "./pages/Pricelist";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="domov" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="obchod" element={<Store />} />
          <Route path="cennik" element={<Pricelist />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
