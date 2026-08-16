import { Link } from "react-router-dom";

const ProductFilters = ({ productList, selectedCategory, setSelectedCategory, sortBy, setSortBy }) => {

    const categories = ["all", ...new Set(productList.map((product) => product.category))];

    return (
        <section className="py-8">
            <div className="mx-auto flex max-w-7xl px-4 sm:px-6 lg:px-8">
                <select
                    value={selectedCategory}
                    onChange={(event) => setSelectedCategory(event.target.value)}
                    className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500">

                    {
                        categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))
                    }

                </select>

                <select
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}
                    className="rounded-lg border border-gray-300 mx-4 px-4 py-2 outline-none focus:border-blue-500"
                >
                    <option value="default">Default</option>
                    <option value="priceLow">Price: Low to High</option>
                    <option value="priceHigh">Price: High to Low</option>
                    <option value="nameAsc">Name: A to Z</option>
                    <option value="nameDesc">Name: Z to A</option>
                </select>

                <Link
                    to="/product-table"
                    className="inline-block rounded-lg bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
                >
                    See product list
                </Link>


            </div>
        </section>
    );
};

export default ProductFilters;