"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    title: "Find Your Next Read Today",
    description:
      "Explore thousands of books across Story, Tech, and Science. Borrow and discover your favorite books anytime, anywhere.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    title: "Discover New Worlds Through Books",
    description:
      "Browse an extensive collection of fiction, fantasy, science, and history books from our digital library.",
    image:
      "https://miro.medium.com/v2/resize:fit:1200/1*6Jp3vJWe7VFlFHZ9WhSJng.jpeg",
  },
  {
    title: "Read, Learn and Grow",
    description:
      "Join thousands of readers and unlock access to knowledge with our modern library platform.",
    image:
      "https://assets.nationalbooktokens.com/uploaded_files/site/shared/assets/readers_awards/readers-awards-shortlist-25-min.png",
  },
];

export default function Banner() {
  return (
    <section className="bg-black">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="container mx-auto px-6 py-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    {slide.title.split(" ").slice(0, 2).join(" ")}
                    <span className="text-primary">
                      {" "}
                      {slide.title.split(" ").slice(2, 4).join(" ")}{" "}
                    </span>
                    {slide.title.split(" ").slice(4).join(" ")}
                  </h1>

                  <p className="mt-6 text-lg text-base-content/70 max-w-xl">
                    {slide.description}
                  </p>

                  <div className="mt-8">
                    <Link href="/all-books" className="btn btn-primary btn-lg">
                      Browse Now
                    </Link>
                  </div>

                  <div className="flex gap-8 mt-10">
                    <div>
                      <h3 className="text-3xl font-bold text-primary">12K+</h3>
                      <p className="text-sm text-base-content/70">Books</p>
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold text-primary">5K+</h3>
                      <p className="text-sm text-base-content/70">Readers</p>
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold text-primary">4.9★</h3>
                      <p className="text-sm text-base-content/70">Rating</p>
                    </div>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>

                  <Image
                    src={slide.image}
                    alt="Books"
                    width={450}
                    height={450}
                    className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
                  />

                  <div className="absolute -bottom-6 -left-6 bg-base-100 shadow-xl rounded-2xl p-4">
                    <p className="font-semibold">📖 1000+ New Arrivals</p>
                    <p className="text-sm text-base-content/70">
                      Updated Every Week
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
