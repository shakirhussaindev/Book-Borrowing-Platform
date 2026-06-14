import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
  const { id, title, image_url, available_quantity } = book;
  return (
    <Card className="bg-base-100 shadow-lg hover:shadow-2xl border border-base-300 p-5 hover:border-[#6ad8f1]">
      <figure className="h-120 w-full">
        <Image
          src={image_url}
          alt={title}
          width={400}
          height={500}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="w-full rounded-md"
        />
      </figure>

      {/* Card Body */}
      <div className="">
        <div className="flex justify-between items-center py-3">
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-xs text-red-400">{available_quantity} Left</p>
        </div>

        <div className="btn bg-[#6ad8f1] w-full text-gray-800">
          <Link href={`/all-books/${id}`} className="">
            Details
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default BookCard;