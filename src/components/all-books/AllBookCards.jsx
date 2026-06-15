"use client"
import React, { useEffect, useState } from 'react';
import BookCard from '../shared/BookCard';

const AllBookCards =  () => {
  const [allBooks, setAllBooks] = useState([])
  const [search, setSearch] = useState("");

useEffect(()=>{
  const booksFetch = async ()=> {
    try {
      const res = await fetch('https://book-borrowing-platform-lac.vercel.app/book.json')
      const data = await res.json()
      setAllBooks[data]
    }catch(error){
      console.log("Failed to fetch books:", error)
    }
  }
  booksFetch()
},[])

  const filterdBook = allBooks.filter(book => book.title.toLowerCase().includes(search.toLocaleLowerCase()))
  return (
    <div>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search books by title..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid lg:grid-cols-3 gap-5">
        {filterdBook.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBookCards;