import { FaRegHeart, FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";

import WishlistContext from "../../context/WishlistContext";
import CartContext from "../../context/CartContext";

const ProductCard = ({ productData }) => {

  const { wishlist, setWishlist } = useContext(WishlistContext);
  const { cart, setCart } = useContext(CartContext);

  const exists = wishlist.some(
    (item) => item.id === productData.id
  );

  const existCartData = cart.find(
    (item) => item.id === productData.id
  );

  // Wishlist
  const handleClickWishList = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (exists) {

      const updatedWishlist = wishlist.filter(
        (item) => item.id !== productData.id
      );

      setWishlist(updatedWishlist);

    } else {

      setWishlist([
        ...wishlist,
        productData
      ]);

    }
  };


  // Add Cart
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (existCartData) {

      const updatedCart = cart.map((item) => {

        if (item.id === productData.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        }

        return item;

      });

      setCart(updatedCart);

    } else {

      setCart([
        ...cart,
        {
          ...productData,
          quantity: 1
        }
      ]);

    }
  };


  return (
    <Link to={`/products/${productData.id}`}>

      <div className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        {/* Product Image */}
        <div className="relative">

          <img
            src={productData.image}
            alt={productData.title}
            className="h-60 w-full object-cover"
          />

          {/* Wishlist */}
          <button
            className="absolute right-3 top-3 rounded-full bg-white p-2 shadow-md transition hover:scale-110"
            onClick={handleClickWishList}
          >
            {exists ? (
              <FaHeart className="text-xl text-red-500" />
            ) : (
              <FaRegHeart className="text-xl text-red-500" />
            )}
          </button>

        </div>


        {/* Product Details */}
        <div className="p-4">

          <p className="text-sm text-gray-500">
            {productData.category}
          </p>

          <h3 className="mt-1 line-clamp-2 text-lg font-semibold">
            {productData.title}
          </h3>


          {/* Rating */}
          <div className="mt-2 flex items-center gap-1">

            <FaStar className="text-yellow-400" />

            <span className="text-sm">
              {productData.rating}
            </span>

          </div>


          {/* Price */}
          <div className="mt-3 flex items-center gap-3">

            <span className="text-2xl font-bold text-blue-600">
              ₹{productData.price.toLocaleString()}
            </span>

            <span className="text-sm text-gray-400 line-through">
              ₹{productData.oldPrice.toLocaleString()}
            </span>

          </div>


          {/* Add Cart */}
          <button
            onClick={handleAddToCart}
            className="mt-5 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Add To Cart
          </button>

        </div>

      </div>

    </Link>
  );
};

export default ProductCard;