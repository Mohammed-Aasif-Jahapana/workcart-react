import { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
//import productList from "../../data/products"; //custom json data 
import getProducts from "../../services/productService"; //from dummy api

import ProductCardSkeleton from "../common/ProductCardSkeleton";



const FeaturedProducts = ({ searchText }) => {

  const [productList, setProductList] = useState([]); //for listing product form api

  const [loading, setLoading] = useState(true); //skeleton loader
  const [error, setError] = useState("");


  useEffect(() => {   //useEffect runs code after the component is rendered.
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


  const filteredProducts = productList.filter((product) => product.title.toLowerCase().includes(searchText.toLowerCase()))



  if (loading) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-3xl font-bold">Featured Products</h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(8)].map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 text-center">
        <h2 className="text-2xl font-semibold text-red-600">
          {error}
        </h2>
      </section>
    );
  }

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

        {filteredProducts.length === 0 && (
          <div className="py-16 text-center">
            <h2 className="text-2xl font-semibold">
              No products found
            </h2>

            <p className="mt-2 text-gray-500">
              Try searching with a different keyword.
            </p>
          </div>
        )}

        {filteredProducts.length > 0 && (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                productData={product}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default FeaturedProducts;