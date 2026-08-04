import { useState } from "react";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Hero from "./Hero";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import TodaysDeals from "./TodaysDeals";


const Home = () => {

  //lifting up state, bcz we need to pass searchtext to nearest parent of navar- so adding in home js
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <Navbar
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Hero />
      <Categories />
      <FeaturedProducts
        searchText={searchText}
      />
      <TodaysDeals />
      <Footer />
    </>
  );
};

export default Home;