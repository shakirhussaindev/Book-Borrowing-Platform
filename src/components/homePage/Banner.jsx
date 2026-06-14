import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="bg-black">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Find Your
              <span className="text-primary"> Next Read </span>
              Today
            </h1>

            <p className="mt-6 text-lg text-base-content/70 max-w-xl">
              Explore thousands of books across Story, Tech, and Science. Borrow
              and discover your favorite books anytime, anywhere.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/all-books" className="btn btn-primary btn-lg">
                Browse Now
              </Link>
            </div>

            {/* Stats */}
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
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
              alt="Books"
              className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
              width={'450'}
              height={'450'}
            />

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-base-100 shadow-xl rounded-2xl p-4">
              <p className="font-semibold">📖 1000+ New Arrivals</p>
              <p className="text-sm text-base-content/70">Updated Every Week</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
