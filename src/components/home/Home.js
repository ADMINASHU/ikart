import React from "react";
import "./home.scss";
import ProductView from "../product/ProductView";
import HomeView from "./HomeView";

const Home = () => {
  return (
    <div className="home page">
      <div className="home_product">
        <HomeView />
        {/* <div>

        <ProductView />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
