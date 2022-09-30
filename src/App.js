import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Profile from "./components/Profile";
import Sigin from "./components/Sigin";
import Contact from "./components/Contact";
import Page404 from "./components/Page404";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sigin" element={<Sigin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Page404 />} />\{" "}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
