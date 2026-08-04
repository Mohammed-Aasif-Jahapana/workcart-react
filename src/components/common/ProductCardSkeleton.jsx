const ProductCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md">
      {/* Image */}
      <div className="h-60 w-full animate-pulse bg-gray-200"></div>

      {/* Content */}
      <div className="space-y-4 p-4">
        <div className="h-4 w-20 animate-pulse rounded bg-gray-200"></div>

        <div className="h-6 w-full animate-pulse rounded bg-gray-200"></div>

        <div className="h-4 w-24 animate-pulse rounded bg-gray-200"></div>

        <div className="h-6 w-32 animate-pulse rounded bg-gray-200"></div>

        <div className="h-10 w-full animate-pulse rounded-lg bg-gray-200"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;