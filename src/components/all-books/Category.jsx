import React from 'react';

const CategorySidebar = ({selectedCategory,setSelectedCategory,}) => {
  const categories = [
    "All",
    "Mystery",
    "Fiction",
    "Fantasy",
    "Science",
    "History",
  ];
  return (
    <div className="bg-base-200 p-5 rounded-2xl">
      <h2 className="text-xl font-bold mb-4">Categories</h2>

      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`btn w-full justify-start ${
              selectedCategory === category ? "btn-primary" : "btn-ghost"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;