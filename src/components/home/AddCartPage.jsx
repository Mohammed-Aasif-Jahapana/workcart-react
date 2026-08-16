import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaShoppingCart,
  FaTrash
} from "react-icons/fa";

import CartContext from "../../context/CartContext";

const AddCartPage = () => {

  const { cart, setCart } = useContext(CartContext);




  // Increase Quantity
  const handleIncrease = (productId) => {

    const updatedCart = cart.map((item) => {

      if (item.id === productId) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }

      return item;

    });

    setCart(updatedCart);
    toast.success("Product added to cart!");
  };


  // Decrease Quantity
  const handleDecrease = (productId) => {

    const updatedCart = cart
      .map((item) => {

        if (item.id === productId) {

          return {
            ...item,
            quantity: item.quantity - 1
          };

        }

        return item;

      })
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };


  // Remove Product
  const handleRemove = (productId) => {

    const updatedCart = cart.filter((item) => item.id !== productId);

    setCart(updatedCart);
    toast.success("Product added to cart!");
  };


  // Calculate Subtotal
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);


  // Delivery
  const delivery = subtotal > 0 ? 0 : 0;


  // Total
  const total = subtotal + delivery;


  return (
    <section className="min-h-screen bg-gray-50 py-10">



      <div className="mx-auto max-w-7xl px-4">

        {/* Back */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-white hover:text-blue-600"
        >
          <FaArrowLeft className="text-xs" />
          Continue Shopping
        </Link>


        {/* Header */}
        <div className="mb-8 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <FaShoppingCart className="text-2xl text-blue-600" />

            <div>

              <h1 className="text-3xl font-bold text-gray-800">
                My Cart
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Review your selected products
              </p>

            </div>

          </div>


          {cart.length > 0 && (
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm">
              {cart.reduce(
                (total, item) => total + item.quantity,
                0
              )}{" "}
              Items
            </span>
          )}

        </div>


        {/* Empty Cart */}
        {cart.length === 0 ? (

          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl bg-white px-6 text-center shadow-sm">

            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">

              <FaShoppingCart className="text-3xl text-blue-400" />

            </div>


            <h2 className="text-2xl font-semibold text-gray-800">
              Your Cart is Empty
            </h2>


            <p className="mt-2 max-w-md text-sm text-gray-500">
              Looks like you haven't added anything to your cart yet.
            </p>


            <Link
              to="/"
              className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Start Shopping
            </Link>

          </div>

        ) : (

          <div className="grid gap-6 lg:grid-cols-3">


            {/* Products */}
            <div className="space-y-4 lg:col-span-2">

              {cart.map((product) => (

                <div
                  key={product.id}
                  className="flex gap-5 rounded-2xl bg-white p-5 shadow-sm"
                >

                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-32 w-32 rounded-xl object-cover"
                  />


                  {/* Details */}
                  <div className="flex flex-1 flex-col justify-between">

                    <div>

                      <p className="text-sm text-gray-500">
                        {product.category}
                      </p>

                      <h2 className="mt-1 text-lg font-semibold text-gray-800">
                        {product.title}
                      </h2>

                      <p className="mt-2 text-xl font-bold text-blue-600">
                        ₹{product.price.toLocaleString()}
                      </p>

                    </div>


                    <div className="mt-4 flex items-center justify-between">


                      {/* Quantity */}
                      <div className="flex items-center rounded-lg border">

                        <button
                          onClick={() =>
                            handleDecrease(product.id)
                          }
                          className="px-4 py-2 text-lg hover:bg-gray-100"
                        >
                          −
                        </button>


                        <span className="px-4 py-2 font-medium">
                          {product.quantity}
                        </span>


                        <button
                          onClick={() =>
                            handleIncrease(product.id)
                          }
                          className="px-4 py-2 text-lg hover:bg-gray-100"
                        >
                          +
                        </button>

                      </div>


                      {/* Remove */}
                      <button
                        onClick={() =>
                          handleRemove(product.id)
                        }
                        className="flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-600"
                      >
                        <FaTrash />
                        Remove
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>


            {/* Summary */}
            <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">

              <h2 className="text-xl font-bold text-gray-800">
                Order Summary
              </h2>


              <div className="my-5 border-t" />


              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>

                <span>
                  ₹{subtotal.toLocaleString()}
                </span>
              </div>


              <div className="mt-3 flex justify-between text-gray-600">

                <span>Delivery</span>

                <span className="text-green-600">
                  FREE
                </span>

              </div>


              <div className="my-5 border-t" />


              <div className="flex justify-between text-xl font-bold">

                <span>Total</span>

                <span className="text-blue-600">
                  ₹{total.toLocaleString()}
                </span>

              </div>


              <div className="mt-8 flex justify-end">

                <Link
                  to="/checkout"
                  className="text-center mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Proceed to Checkout
                </Link>

              </div>


            </div>

          </div>

        )}

      </div>

    </section>
  );
};

export default AddCartPage;