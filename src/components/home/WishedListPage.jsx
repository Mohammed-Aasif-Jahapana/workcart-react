import React from 'react'
import { useContext } from "react";
import WishlistContext from "../../context/WishlistContext";
import ProductCard from '../common/ProductCard';
import { Link } from "react-router-dom";

const WishedListPage = ({showBackButton = true}) => {

  const { wishlist } = useContext(WishlistContext);

  return (
    <section className="bg-gray-50 py-16">
      {
        showBackButton && (
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Back Button */}
        <button className="mb-8 font-medium text-blue-600 transition hover:underline">

          <Link to={"/"} >
            ← Back to Products
          </Link>
        </button>
      </div>
        )
      }
  
      <div className="mx-auto max-w-7xl px-4">

        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          My Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-lg text-gray-500">
              Your wishlist is empty.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {wishlist.map((product) => (
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
}

export default WishedListPage