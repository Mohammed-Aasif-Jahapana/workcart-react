//re-usable component

import { FaHeart, FaStar } from "react-icons/fa";

const ProductCard = ({productData}) => {
  
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Product Image */}
      <div className="relative">
        <img
          src={productData.image}
          alt="Product"
          className="h-60 w-full object-cover"
        />

        <button className="absolute right-3 top-3 rounded-full bg-white p-2 shadow">
          <FaHeart className="text-gray-500" />
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

        <div className="mt-2 flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          <span className="text-sm">
           {productData.rating}
          </span>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <span className="text-2xl font-bold text-blue-600">
            ₹{productData.price.toLocaleString()}
          </span>

          <span className="text-sm text-gray-400 line-through">
           ₹{productData.oldPrice.toLocaleString()}
          </span>
        </div>

        <button className="mt-5 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
          Add To Cart
        </button>

      </div>

    </div>
  );
};

export default ProductCard;