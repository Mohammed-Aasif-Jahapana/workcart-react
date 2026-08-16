import { useState } from "react";
import { useSelector } from "react-redux";

const ProductTable = () => {
  const productList = useSelector(
    (state) => state.products.products
  );

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const totalPages = Math.ceil(
    productList.length / itemsPerPage
  );

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const endIndex =
    startIndex + itemsPerPage;

  const currentProducts = productList.slice(
    startIndex,
    endIndex
  );

  return (
    <div className="mx-auto max-w-7xl p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Product Pagination Demo
      </h1>

      <div className="overflow-x-auto rounded-lg border">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">
                Title
              </th>

              <th className="px-4 py-3 text-left">
                Category
              </th>

              <th className="px-4 py-3 text-left">
                Price
              </th>

              <th className="px-4 py-3 text-left">
                Rating
              </th>
            </tr>
          </thead>

          <tbody>
            {currentProducts.map((product) => (
              <tr
                key={product.id}
                className="border-t"
              >
                <td className="px-4 py-3">
                  {product.title}
                </td>

                <td className="px-4 py-3">
                  {product.category}
                </td>

                <td className="px-4 py-3">
                  ${product.price}
                </td>

                <td className="px-4 py-3">
                  {product.rating}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage(currentPage - 1)
          }
          className="rounded border px-4 py-2 disabled:opacity-50"
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() =>
              setCurrentPage(index + 1)
            }
            className={`rounded px-4 py-2 ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "border"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={
            currentPage === totalPages
          }
          onClick={() =>
            setCurrentPage(currentPage + 1)
          }
          className="rounded border px-4 py-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductTable;