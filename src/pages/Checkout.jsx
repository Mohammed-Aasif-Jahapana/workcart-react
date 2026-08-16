import { useContext, useState } from "react";
import CartContext from "../context/CartContext";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

const Checkout = () => {

    const { cart, setCart } = useContext(CartContext);

    const totalPrice = cart.reduce(
        (total, product) => total + product.price, 0);

    const navigate = useNavigate();

    const handlePlaceOrder = () => {

        if (
            !fullName ||
            !phone ||
            !address ||
            !city ||
            !pincode
        ) {
             toast.error("Please fill all fields.");

            return;
        }



        setCart([]);
        navigate("/order-success");
    };


    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");

    return (
        <section className="bg-gray-100 py-16">

            <div className="mx-auto max-w-7xl px-4">

                <h1 className="mb-10 text-3xl font-bold">
                    Checkout
                </h1>

                <div className="grid gap-8 lg:grid-cols-3">

                    <div className="rounded-2xl bg-white p-8 shadow-lg lg:col-span-2">

                        <h2 className="mb-6 text-2xl font-semibold">
                            Shipping Information
                        </h2>

                        <div className="grid gap-4">

                            <input
                                type="text"
                                placeholder="Full Name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="rounded-lg border p-3 outline-none"
                            />

                            <input
                                type="text"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="rounded-lg border p-3 outline-none"
                            />

                            <textarea
                                placeholder="Address"
                                rows="4"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="rounded-lg border p-3 outline-none"
                            />

                            <input
                                type="text"
                                placeholder="City"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="rounded-lg border p-3 outline-none"
                            />

                            <input
                                type="text"
                                placeholder="Pincode"
                                value={pincode}
                                onChange={(e) => setPincode(e.target.value)}
                                className="rounded-lg border p-3 outline-none"
                            />

                        </div>

                    </div>

                    <div className="rounded-2xl bg-white p-8 shadow-lg">

                        <h2 className="mb-6 text-2xl font-semibold">
                            Order Summary
                        </h2>

                        <div className="space-y-4">

                            <div className="flex justify-between">
                                <span>Products</span>
                                <span>{cart.length}</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Total</span>
                                <span>₹{totalPrice}</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>

                            <hr />

                            <div className="flex justify-between text-xl font-bold">
                                <span>Grand Total</span>
                                <span>₹{totalPrice}</span>
                            </div>

                            <button
                            disabled={cart.length === 0}
                                onClick={handlePlaceOrder}
                                className="disabled:bg-gray-400 disabled:cursor-not-allowed mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white"
                            >
                                Place Order
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Checkout;