import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaSearch
} from "react-icons/fa";

import Login from "../../auth/Login";
import CartContext from "../../context/CartContext";
import WishlistContext from "../../context/WishlistContext";

import { useSelector, useDispatch } from "react-redux";
import { mylogout } from "../../redux/authSlice";

const Navbar = ({ searchText, setSearchText }) => {

  const isLoggedInUser = useSelector(
    (state) => state.auth.isLoggedIn
  );

  const loggedInUser = useSelector(
    (state) => state.auth.user
  );

  const [showLogin, setShowLogin] = useState(false);

  const { wishlist } = useContext(WishlistContext);
  const { cart } = useContext(CartContext);

  const dispatch = useDispatch();


  return (
    <>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white shadow-md">

        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4">

          {/* Logo */}
          <Link
            to="/"
            className="shrink-0 text-2xl font-bold text-blue-600"
          >
            WorkCart
          </Link>


          {/* Search */}
          <div className="relative mx-auto hidden w-full max-w-xl md:block">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-full border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-blue-500"
            />

          </div>


          {/* Right Side */}
          <div className="ml-auto flex shrink-0 items-center gap-5">


            {/* Wishlist */}
            <Link
              to="/wishedList"
              className="relative text-xl text-gray-600 hover:text-red-500"
            >

              <FaHeart />

              {wishlist.length > 0 && (
                <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {wishlist.length}
                </span>
              )}

            </Link>


            {/* Cart */}
            <Link
              to="/addCart"
              className="relative text-xl text-gray-600 hover:text-blue-600"
            >

              <FaShoppingCart />

              {cart.length > 0 && (
                <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                  {cart.length}
                </span>
              )}

            </Link>


            {/* Login / Logout */}
            {isLoggedInUser ? (

              <button
                onClick={() => dispatch(mylogout())}
                className="rounded-lg bg-red-500 px-5 py-2 font-semibold text-white transition hover:bg-red-600"
              >
                Logout
              </button>

            ) : (

              <button
                onClick={() => setShowLogin(true)}
                className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700"
              >
                Login
              </button>

            )}

          </div>

        </div>


        {/* Mobile Search */}
        <div className="px-4 pb-4 md:hidden">

          <div className="relative">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-full border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-blue-500"
            />

          </div>

        </div>

      </nav>


      {/* Login Modal */}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
        />
      )}

    </>
  );
};

export default Navbar;