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
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                productData={product}
                wishlist={wishlist}
                toggleWishlist={toggleWishlist}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default FeaturedProducts;