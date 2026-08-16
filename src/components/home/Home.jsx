import { useState, useEffect } from "react";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Hero from "./Hero";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import TodaysDeals from "./TodaysDeals";
import ProductFilters from './ProductFilters'
// import getProducts from '../../services/productService'
import WishedListPage from "./WishedListPage";
import AddCartPage from "./AddCartPage";
import Profile from "../../pages/Profile";

//redux syncthunk concept
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/productSlice";
import ProductTable from "../../pages/ProductTable";


const Home = () => {

  //lifting up state concepts, passing the states to nearest parent and from parent pass to other comp

  // const [productList, setProductList] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");

  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const dispatch = useDispatch();


  const productState = useSelector(
    (state) => state.products
  );

  const productList = productState.products;

  const loading = productState.loading;

  const error = productState.error;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // useEffect(() => {
  //   loadProducts();
  // }, []);

  useEffect(() => {

    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 500);

    return () => {
      clearTimeout(timer);
    };

  }, [searchText]);


  // const loadProducts = async () => {
  //   try {
  //     const products = await getProducts();

  //     setProductList(products);
  //   } catch (error) {
  //     console.error(error);
  //     setError("Failed to load products.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };


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

      {/* <WishedListPage showBackButton={false}/>
      <AddCartPage showOrderSummary={false}/> */}

      <FeaturedProducts
        productList={productList}
        loading={loading}
        error={error}
        searchText={debouncedSearch}
        selectedCategory={selectedCategory}
        sortBy={sortBy}
      />
      <Footer />
    </>
  );
};

export default Home;