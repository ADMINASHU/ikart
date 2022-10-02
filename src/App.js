import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Profile from "./components/Profile";
import Signin from "./components/Signin";
import Signup from "./components/Singup";
import Contact from "./components/Contact";
import Page404 from "./components/Page404";
import Footer from "./components/Footer";
import ProtectedAuthRoute from "./components/ProtectedAuthRoute";
import UnProtectedRoute from "./components/UnProtectedRoute";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route element={<ProtectedAuthRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route element={<UnProtectedRoute />}>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Page404 />} />\{" "}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
