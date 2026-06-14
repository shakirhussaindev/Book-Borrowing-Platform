import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
  const { id, title, image_url } = book;
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-300">
      <figure className="h-72 overflow-hidden">
        <Image
          src={image_url}
          alt={title}
          width={400}
          height={500}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        <h2 className="card-title line-clamp-1">{title}</h2>

        <div className="card-actions mt-4">
          <Link href={`/books/${id}`} className="btn btn-primary w-full">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;