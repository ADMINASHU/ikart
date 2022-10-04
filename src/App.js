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
import SellerAuthRoute from "./components/SellerAuthRoute";
import UserAuthRoute from "./components/UserAuthRoute";
import Cart from "./components/Cart";
import Seller from "./components/Seller";
import Orders from "./components/Orders";
import Wishlist from "./components/Wishlist";
import Search from "./components/Search";
import ProtectedSearchRoute from "./components/ProtectedSearchRoute";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedSearchRoute/>}>
            <Route path="/search" element={<Search />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route element={<ProtectedAuthRoute />}>
            <Route element={<SellerAuthRoute />}>
              <Route path="/product" element={<Product />} />
            </Route>
            <Route element={<UserAuthRoute />}>
              <Route path="/seller" element={<Seller />} />
            </Route>
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Route>
          <Route element={<UnProtectedRoute />}>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<Page404 />} />\{" "}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
