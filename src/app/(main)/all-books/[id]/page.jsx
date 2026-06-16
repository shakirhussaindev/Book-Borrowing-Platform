import Image from 'next/image';

export const generateMetadata = async ({params})=>{
  const {id} = await params
  const res = await fetch(
    "https://book-borrowing-platform-lac.vercel.app/book.json",
  );
  const data = await res.json();

  const expectedData = data.find((d) => d.id == id);
  return {
    title: expectedData.title,
    description: expectedData.author,
  };
};

const BookDetails = async ({params}) => {
  const {id} = await params
  const res = await fetch(
    "https://book-borrowing-platform-lac.vercel.app/book.json",
  );
  const data = await res.json();

  const expectedData = data.find((d) => d.id == id);
  console.log(expectedData);
  const {
    title,
    image_url,
    category,
    author,
    description,
    available_quantity,
  } = expectedData;
  return (
    <div className="container mx-auto px-5 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Book Image */}
        <div className="flex justify-center">
          <Image
            src={image_url}
            alt={title}
            width={400}
            height={600}
            className="rounded-2xl shadow-2xl object-cover"
          />
        </div>

        {/* Book Info */}
        <div>
          <span className="badge badge-primary mb-4">{category}</span>

          <h1 className="text-4xl font-bold">{title}</h1>

          <p className="text-lg text-gray-500 mt-2">By {author}</p>

          <p className="mt-6 leading-8 text-base-content/80">
            {description}
          </p>

          <div className="mt-6">
            <p className="font-semibold text-lg">
              Available Quantity:
              <span className="text-primary ml-2">
                {available_quantity} copies left
              </span>
            </p>
          </div>

          <button className="btn btn-primary mt-8">Borrow This Book</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;