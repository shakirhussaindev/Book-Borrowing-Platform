import React from 'react';
import BookCard from '../shared/BookCard';

const Featured = async () => {
  const res = await fetch('https://book-borrowing-platform-lac.vercel.app/book.json')
  const books = await res.json()
  const featuredBooks = books.slice(0,4)
  console.log(featuredBooks)
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl md:text-6xl font-bold">
        Featured Books
      </h2>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-7'>
        {
          featuredBooks.map(book => <BookCard key={book.id} book={book}/>)
        }
      </div>
    </div>
  );
};

export default Featured;