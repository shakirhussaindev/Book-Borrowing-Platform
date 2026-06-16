import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
            <BookOpen size={50} className=" text-[#6ad8f1]" />
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-primary">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold mt-4">Page Not Found</h2>

        <p className="text-base-content/70 mt-4 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist.
        </p>

        {/* Home Button */}
        <Link href="/" className="btn bg-[#6ad8f1] mt-8 px-8 py-6 text-black text-lg font-bold">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
