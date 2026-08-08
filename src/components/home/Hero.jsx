import heroBanner from "../../assets/images/hero-banner.png"; 

const Hero = () => { 

  return (
    <section className="bg-gradient-to-r from-blue-50 to-white"> 
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-4 py-12 sm:px-6 lg:flex-row lg:px-8 lg:py-20">

        {/* Left Content */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            🔥 Limited Time Offer
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Up to <span className="text-blue-600">50% OFF</span> <br />
            On Premium Products
          </h1>

          <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg">
            Discover amazing deals on electronics, fashion, beauty,
            home appliances and much more. Shop smarter with
            WorkCart.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700">
              Shop Now
            </button>

            <button className="rounded-lg border-2 border-blue-600 px-8 py-3 font-semibold text-blue-600 transition duration-300 hover:bg-blue-600 hover:text-white">
              Explore
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex w-full justify-center lg:w-1/2">
          <img
            src={heroBanner}
            alt="Hero Banner"
            className="w-full max-w-sm sm:max-w-md lg:max-w-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;