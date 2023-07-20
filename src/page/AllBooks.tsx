/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../redux/features/product/bookApi";
import { IBooks } from "../types/globalTypes";

export default function AllBooks() {
  const { data, isLoading, error } = useGetBooksQuery(undefined);

  return (
    <div className="text-center py-8">
      <h2 className="font-bold text-3xl">All Books Catalog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-10 mt-10">
        {data?.map((book: IBooks) => (
          <div
            key={book._id}
            className="card card-compact md:w-96 bg-red-100 shadow-xl"
          >
            <Link to={`/book-details/${book?._id}`}>
              <figure>
                <img src={book?.img} className="h-40" alt="Shoes" />
              </figure>
            </Link>

            <div className="card-body text-center">
              <h2 className="text-center text-xl font-bold">{book.title}</h2>

              <p>
                <span className="font-bold">Author:</span>{" "}
                <span className="text-orange-500">{book.author}</span>
              </p>
              <p>
                <span className="font-bold">Genre:</span>{" "}
                <span className="text-purple-500">{book.genre}</span>
              </p>
              <p>
                <span className="font-bold">Published:</span>{" "}
                <span className="text-blue-400">{book.publication_date}</span>
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Add Book</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
