import { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
import { FaRegHeart, FaHeart } from "react-icons/fa";

import ProductCardSkeleton from "../common/ProductCardSkeleton";


const FeaturedProducts = ({ productList, loading, error, searchText, selectedCategory, sortBy, wishlist, toggleWishlist }) => {

  const filteredProducts = productList.filter((product) => {

    const matchesSearch = product.title.toLowerCase().includes(searchText.toLowerCase());

    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });


  const sortedProducts = [...filteredProducts]; //sort will replace the original array, so making copy of it

  if (sortBy === "priceLow") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "priceHigh") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "nameAsc") {
    sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sortBy === "nameDesc") {
    sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
  }


  const [visibleCount, setVisibleCount] = useState(8);

  const visibleProducts = sortedProducts.slice(0, visibleCount);


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
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                productData={product}
                wishlist={wishlist}
                toggleWishlist={toggleWishlist}
              />
            ))}


          </div>

        )}
        {visibleCount < sortedProducts.length && (
          <div className="mt-14 flex justify-center">
            <button
              onClick={() => setVisibleCount(visibleCount + 8)}
              className="group flex items-center gap-2 rounded-full border border-gray-300 bg-white px-8 py-3 font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg"
            >
              Load More
              <span className="transition-transform duration-200 group-hover:translate-y-1">
                ↓
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;