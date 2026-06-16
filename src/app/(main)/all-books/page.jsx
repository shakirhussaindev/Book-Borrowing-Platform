"use client";
import BookCard from "@/components/shared/BookCard";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const AllBooksPage = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const categories = [
    "All",
    "Mystery",
    "Fiction",
    "Fantasy",
    "Science",
    "History",
  ];

  useEffect(() => {
    const booksFetch = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://book-borrowing-platform-lac.vercel.app/book.json",
        );
        const data = await res.json();
        setAllBooks(data);
      } catch (error) {
        console.log("Failed to fetch books:", error);
      } finally {
        setLoading(false);
      }
    };
    booksFetch();
  }, []);

  const filteredBook = allBooks.filter((book) => {
    const categoryMatch =
      selectedCategory === "All" ? true : book.category === selectedCategory;
    const searchMatch = book.title
      .toLowerCase()
      .includes(search.toLocaleLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="container mx-auto px-10 py-10">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-2 ">
          <p className="text-xl font-bold pb-10">Categories</p>

          <div className="flex flex-col gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`btn justify-start ${
                  selectedCategory === category ? "bg-[#6ad8f1]" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="col-span-10 ">
          <div className="mb-8">
            <input
              type="text"
              placeholder={`Search ${selectedCategory} books...`}
              className="input input-bordered w-full text-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="grid lg:grid-cols-3 gap-5">
            {loading ? (
              <div className="min-h-[60vh] flex justify-center items-center col-span-full">
                <BeatLoader color="#6ad8f1" />
              </div>
            ) : filteredBook.length > 0 ? (
              filteredBook.map((book) => <BookCard key={book.id} book={book} />)
            ) : (
              <div className="col-span-full flex justify-center items-center py-20">
                <h2 className="text-2xl font-semibold text-gray-500">
                  📚 Book not found
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
