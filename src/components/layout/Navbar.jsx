const Navbar = () => {
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
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4 sm:gap-6">
          <button className="font-medium transition hover:text-blue-600">
            Login
          </button>

          <button className="font-medium transition hover:text-blue-600">
            Wishlist
          </button>

          <button className="font-medium transition hover:text-blue-600">
            Cart
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;