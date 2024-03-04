import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// toast
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/About";
import Product from "./components/product/Product";
import Profile from "./components/profile/Profile";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Singup";
import Page404 from "./components/Page404";
import Footer from "./components/navbar/Footer";
import ProtectedAuthRoute from "./components/routes/ProtectedAuthRoute";
import UnProtectedRoute from "./components/routes/UnProtectedRoute";
import SellerAuthRoute from "./components/routes/SellerAuthRoute";
import UserAuthRoute from "./components/routes/UserAuthRoute";
import Cart from "./components/cart/Cart";
import Seller from "./components/seller/Seller";
import Orders from "./components/Orders";
import Wishlist from "./components/profile/wishlist/Wishlist";
import Search from "./components/search/Search";
import SingleProduct from "./components/product/singleProduct/SingleProduct";
import Wish from "./components/profile/wishlist/Wish";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />

          <Route element={<ProtectedAuthRoute />}>
            <Route element={<SellerAuthRoute />}>
              <Route path="/product" element={<Product />} />
            </Route>
            <Route element={<UserAuthRoute />}>
              <Route path="/seller" element={<Seller />} />
            </Route>
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/wishlist" element={<Wish />} />
          </Route>

          <Route element={<UnProtectedRoute />}>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route element={<ProtectedAuthRoute />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/*" element={<Page404 />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
