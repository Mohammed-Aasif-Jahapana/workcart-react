import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaArrowLeft, FaShoppingBag } from "react-icons/fa";

import WishlistContext from "../../context/WishlistContext";
import ProductCard from "../common/ProductCard";

const WishedListPage = ({ showBackButton = true }) => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <section className="min-h-screen bg-gray-50 py-10">

      <div className="mx-auto max-w-7xl px-4">

        {/* Back Button */}
        {showBackButton && (
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-white hover:text-blue-600"
          >
            <FaArrowLeft className="text-xs" />
            Continue Shopping
          </Link>
        )}

        {/* Page Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>
            <div className="flex items-center gap-3">
              <FaHeart className="text-2xl text-red-500" />

              <h1 className="text-3xl font-bold text-gray-800">
                My Wishlist
              </h1>
            </div>

            <p className="mt-2 text-sm text-gray-500">
              Save your favorite products and find them here anytime.
            </p>
          </div>

          {wishlist.length > 0 && (
            <div className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm">
              {wishlist.length}{" "}
              {wishlist.length === 1 ? "Item" : "Items"}
            </div>
          )}

        </div>

        {/* Wishlist Content */}
        {wishlist.length === 0 ? (

          /* Empty Wishlist */
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl bg-white px-6 text-center shadow-sm">

            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
              <FaHeart className="text-3xl text-red-400" />
            </div>

            <h2 className="text-2xl font-semibold text-gray-800">
              Your Wishlist is Empty
            </h2>

            <p className="mt-2 max-w-md text-sm text-gray-500">
              You haven't added anything to your wishlist yet.
              Start exploring and save products you love.
            </p>

            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <FaShoppingBag />
              Continue Shopping
            </Link>

          </div>

        ) : (

          /* Wishlist Products */
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

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
};

export default WishedListPage;