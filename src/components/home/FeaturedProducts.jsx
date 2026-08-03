import ProductCard from "../common/ProductCard";
//import productList from "../../data/products"; //custom json data 
import getProducts from "../../services/productService"; //from dummy api

import { useEffect, useState } from "react";

const FeaturedProducts = () => {

  const [productList, setProductList] = useState([]);

  //useEffect runs code after the component is rendered.
  useEffect(() => {
    loadProducts();
  }, []);


  const loadProducts = async () => {
    const products = await getProducts(); 

    setProductList(products);
 
  }; 

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <h2 className="text-3xl font-bold">
            Featured Products
          </h2>

          <p className="mt-2 text-gray-500">
            Discover our most popular products.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {
            productList.map((product) => (
              <ProductCard
                productData={product}
                key={product.id} />)
            )
          }
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;