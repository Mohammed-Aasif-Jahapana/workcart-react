//mainly this page created for using customhooks logics [if want to see in home page just call this component.] (hook name is useFetch.js)
import React from 'react'
import useFetch from "../hooks/useFetch";
import ProductCard from "../components/common/ProductCard"

const ProductListingPage = () => {

    const { data, loading, error } = useFetch("https://dummyjson.com/products");


    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Something went wrong.</p>;
    }


    return (
        <div>
            <p>ProductListingPage</p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {data.products.map((product) => (
                    <ProductCard
                        key={product.id}
                        productData={{
                            id: product.id,
                            title: product.title,
                            category: product.category,
                            price: product.price,
                            rating: product.rating,
                            image: product.thumbnail,
                            oldPrice: product.price,
                        }}
                    />
                ))}
            </div>

        </div>
    )
}

export default ProductListingPage