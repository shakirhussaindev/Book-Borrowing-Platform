import React from 'react';
import Marquee from 'react-fast-marquee'; 

const BookNews = () => {
  const arrivalBooks = [
    {
      id: 1,
      title: "The Midnight Algorithm",
    },
    {
      id: 2,
      title: "Whispers of the Galaxy",
    },
    {
      id: 3,
      title: "The Last Bookkeeper",
    },
    {
      id: 4,
      title: "Neural Frontiers",
    },
  ];
  return (
    <div className="bg-[#1a1c31] w-full">
      <div className="container mx-auto text-white py-3 flex items-center gap-5 px-10">
        <Marquee pauseOnHover={true} speed={100}>
          <p className="text-xl text-amber-600 font-semibold mr-3">
            New Arrivals:
          </p>
          {arrivalBooks.map((book) => {
            return (
              <div key={arrivalBooks.id} className="flex items-center">
                <span className="" key={book.id}>
                  {book.title}
                </span>
                <span className="px-5 text-sm text-gray-300">|</span>
              </div>
            );
          })}
          <span className="text-[#6ad8f1] font-bold text-base px-10">
            Special Discount on Memberships! Join Now and get 50% off
          </span>
        </Marquee>
      </div>
    </div>
  );
};

export default BookNews;