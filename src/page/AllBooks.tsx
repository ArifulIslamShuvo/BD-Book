/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../redux/features/product/bookApi";
import { IBooks } from "../types/globalTypes";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setSearchTerm } from "../redux/features/product/searchSlice";

export default function AllBooks() {
  const { data, isLoading, error } = useGetBooksQuery(undefined);

  const searchTerm = useAppSelector((state) => state.searchBook);
  const dispatch = useAppDispatch();

  const handleSearchChange = (e: { target: { value: any } }) => {
    const searchTerm = e.target.value;
    dispatch(setSearchTerm(searchTerm));
  };

  const filteredData = data?.filter(
    (item: { title: string; author: string; genre: string }) => {
      const itemValues = Object.values(item).map((value) =>
        value.toString().toLowerCase()
      );

      return itemValues.some((value) =>
        value.includes(searchTerm.toLowerCase())
      );
    }
  );

  return (
    <div className="text-center py-8">
      <h2 className="font-bold text-3xl">Search Books</h2>

      <div className="max-w-md mx-auto flex p-3 my-5 rounded-lg ">
        <input
          onChange={handleSearchChange}
          type="text"
          className="w-full border border-gray-300 rounded-l-md py-2 px-3 focus:outline-none focus:border-blue-500"
          placeholder="Search..."
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 15l5-5-5-5"
            />
          </svg>
        </button>
      </div>

      <div className="card-actions justify-center">
        <Link to="/addBook">
          <button className="btn btn-primary">Add Book</button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ml-10 mt-10">
        {filteredData?.map((book: IBooks) => (
          <div
            key={book._id}
            className="card card-compact md:w-96 bg-red-100 shadow-xl"
          >
            <Link to={`/book-details/${book?._id}`}>
              <figure>
                <img src={book?.img} className="h-40 pt-5" alt="Shoes" />
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
              {/* <div className="card-actions justify-center">
                <Link to="/addBook">
                  <button className="btn btn-primary">Add Book</button>
                </Link>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
