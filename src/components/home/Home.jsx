import { useState, useEffect } from "react";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Hero from "./Hero";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import TodaysDeals from "./TodaysDeals";
import ProductFilters from './ProductFilters'
import getProducts from '../../services/productService' 
import WishedListPage from "./WishedListPage";


const Home = () => {

  //lifting up state concepts, passing the states to nearest parent and from parent pass to other comp

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");  


  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const products = await getProducts();

      setProductList(products);
    } catch (error) {
      console.error(error);
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <Navbar
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Hero />
      <ProductFilters
        productList={productList}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <Categories />
     <WishedListPage/>
      

      <FeaturedProducts
        productList={productList}
        loading={loading}
        error={error}
        searchText={searchText}
        selectedCategory={selectedCategory}
        sortBy={sortBy}  
      />
      <Footer />
    </>
  );
};

export default Home;