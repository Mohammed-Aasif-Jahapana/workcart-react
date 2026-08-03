const Categories = () => {
    const categories = [
  {
    id: 1,
    name: "Electronics",
    icon: "📱",
  },
  {
    id: 2,
    name: "Fashion",
    icon: "👕",
  },
  {
    id: 3,
    name: "Beauty",
    icon: "💄",
  },
  {
    id: 4,
    name: "Furniture",
    icon: "🛋",
  },
  {
    id: 5,
    name: "Groceries",
    icon: "🛒",
  },
  {
    id: 6,
    name: "Automotive",
    icon: "🏍",
  },
];
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

       <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
  {categories.map((category) => (
    <div
      key={category.id}
      className="cursor-pointer rounded-xl border bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="text-5xl">
        {category.icon}
      </div>

      <p className="mt-4 font-semibold">
        {category.name}
      </p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Categories;