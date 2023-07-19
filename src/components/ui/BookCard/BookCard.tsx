/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IBooks } from "../../../types/globalTypes";

interface IProps {
  book: IBooks;
}

export default function BookCard({ book }: IProps) {
  const { _id, title, img, author, genre, publication_date } = book;


  return (
    <div className="col-span-4 mb-8">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        
          <figure>
            <img src={img} className="h-40" alt="Shoes" />
          </figure>
        
        <div className="card-body text-center">
          
            <h2 className="text-center text-xl font-bold">{title}</h2>
          
          <p>
            <span className="font-bold">Author:</span>{" "}
            <span className="text-orange-500">{author}</span>
          </p>
          <p>
            <span className="font-bold">Genre:</span>{" "}
            <span className="text-purple-500">{genre}</span>
          </p>
          <p>
            <span className="font-bold">Published:</span>{" "}
            <span className="text-blue-400">{publication_date}</span>
          </p>
          <div className="card-actions justify-center">
            <button
              className="btn btn-primary"
            >
              Add Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}