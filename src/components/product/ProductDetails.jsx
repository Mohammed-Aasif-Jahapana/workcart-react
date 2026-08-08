import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductById } from "../../services/productService";

const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const { id } = useParams();

    useEffect(() => {
        loadProduct();
    }, [id]);


    const loadProduct = async () => {
        try {
            const productData = await getProductById(id);

            setProduct(productData);
        } catch (error) {
            console.error(error);
            setError("Failed to load product.");
        } finally {
            setLoading(false);
        }
    };


    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (!product) {
        return <h1>Product not found.</h1>;
    }

    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Back Button */}
                <button className="mb-8 font-medium text-blue-600 transition hover:underline">

                    <Link to={"/"} >
                        ← Back to Products
                    </Link>
                </button>

                {/* Product Details */}
                <div className="grid gap-10 rounded-2xl bg-white p-8 shadow-md lg:grid-cols-2">

                    {/* Product Image */}
                    <div className="flex items-center justify-center rounded-xl bg-gray-100 p-8">
                        <img
                            src={product.image}
                            alt="Product"
                            className="h-96 object-contain"
                        />
                    </div>

                    {/* Product Info */}
                    <div>

                        <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
                            {product.category}
                        </span>

                        <h1 className="mt-4 text-4xl font-bold text-gray-800">
                            {product.title}
                        </h1>

                        <div className="mt-4 flex items-center gap-3">
                            <span className="rounded bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
                                ⭐ {product.rating}
                            </span>

                            <span className="text-sm text-gray-500">
                                ₹{product.price}
                            </span>
                        </div>

                        <h2 className="mt-6 text-4xl font-bold text-blue-600">
                            ₹{product.price}
                        </h2>

                        <p className="mt-6 leading-8 text-gray-600">
                            {product.description}
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <button className="rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition hover:bg-blue-700">
                                Add to Cart
                            </button>

                            <button className="rounded-lg border border-blue-600 px-8 py-3 font-medium text-blue-600 transition hover:bg-blue-50">
                                Buy Now
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ProductDetails;