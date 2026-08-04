const ProductFilters = ({ productList, selectedCategory, setSelectedCategory }) => {

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
                        <option key={category}value={category}>
                            {category}
                        </option>
                    ))
                    }

                </select> 
            </div>
        </section>
    );
};

export default ProductFilters;