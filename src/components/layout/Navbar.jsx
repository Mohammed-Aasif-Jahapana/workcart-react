import { useContext } from "react"; 
import { FaRegHeart, FaHeart, FaStar } from "react-icons/fa";  
import { Link } from "react-router-dom";
import WishlistContext from '../../context/WishlistContext'

const Navbar = ({ searchText, setSearchText }) => { 

  const { wishlist } = useContext(WishlistContext);

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">

        {/* Logo */}
        <div className="flex justify-center lg:justify-start">
          <h1 className="text-3xl font-bold text-blue-600">
            WorkCart
          </h1>
        </div>

        {/* Search */}
        <div className="w-full lg:w-[40%]">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4 sm:gap-6">
          <button className="font-medium transition hover:text-blue-600">
            Login
          </button>

          <Link
            to="/wishedList"
            className="relative flex items-center gap-2 rounded-lg px-3 py-2 transition hover:bg-gray-100"
          >
            <FaHeart className="text-xl text-red-500" />

            <span className="font-medium text-gray-700">
              Wishlist
            </span>

            {wishlist.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
                {wishlist.length}
              </span>
            )}
          </Link>

          <button className="font-medium transition hover:text-blue-600">
            Cart
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;