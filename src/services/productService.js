const PRODUCT_API = "https://dummyjson.com/products";

const getProducts = async () => {
  const response = await fetch(PRODUCT_API);

  const data = await response.json();

  const transformedProducts = data.products.map((apiProduct) => ({
    id: apiProduct.id,
    title: apiProduct.title,
    category: apiProduct.category,
    price: apiProduct.price,
    rating: apiProduct.rating,
    image: apiProduct.thumbnail,
    oldPrice: Math.round(
      apiProduct.price /
      (1 - apiProduct.discountPercentage / 100)
    ),
  }));

  return transformedProducts;
};

export default getProducts;