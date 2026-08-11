import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

import Login from "../../auth/Login";
import CartContext from "../../context/CartContext";
import WishlistContext from "../../context/WishlistContext";
import { useContext } from "react";

const Navbar = () => {

  const [showLogin, setShowLogin] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("accessToken")
  );

  const { wishlist } = useContext(WishlistContext);
  const { cart } = useContext(CartContext);


  const handleLogout = () => {

    localStorage.removeItem("accessToken");

    setIsLoggedIn(false);
  };


  return (
    <>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white shadow-md">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">


          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600"
          >
            WorkCart
          </Link>


          {/* Right Side */}
          <div className="flex items-center gap-5">


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
            {isLoggedIn ? (

              <button
                onClick={handleLogout}
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

      </nav>


      {/* Login Modal */}
      {showLogin && (

        <Login
          onClose={() => setShowLogin(false)}
          onLoginSuccess={() => setIsLoggedIn(true)}
        />

      )}

    </>
  );
};

export default Navbar;