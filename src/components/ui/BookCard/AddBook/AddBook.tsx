/* eslint-disable @typescript-eslint/no-floating-promises */
import React from "react";
import { useState } from "react";
import { useAddBookMutation } from "../../../../redux/features/product/bookApi";
import { toast } from "react-toastify";

function AddBook() {
  interface Book {
    title: string;
    author: string;
    img: string;
    genre: string;
    publication_date: string;
    reviews: string[];
  }

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10);

  const [formData, setFormData] = useState<Book>({
    title: "",
    author: "",
    img: "",
    genre: "",
    publication_date: formattedDate,
    reviews: [],
  });

  const [addBook] = useAddBookMutation();
console.log(addBook);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addBook(formData);
    
    toast("Add new book successfully");
    setFormData({
      title: "",
      author: "",
      img: "",
      genre: "",
      publication_date: "",
      reviews: [],
    });
  };
  return (
    
    <div className="max-w-[700px] mx-auto mt-10 bg-slate-100 p-10 rounded-lg">
    <h1 className="text-2xl text-blue-700 font-medium text-center pb-4">
      Add New Book
    </h1>

    <form onSubmit={handleSubmit}>
      <>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-blue-700 text-xl">
              Title
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter book title"
            className="input input-bordered w-full "
            name='title'
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-blue-700 text-xl">
            Author
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter book author"
            className="input input-bordered w-full "
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-blue-700 text-xl">
              Image
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter book image link"
            className="input input-bordered w-full "
            name="img"
            value={formData.img}
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-blue-700 text-xl">
              Genre
            </span>
          </label>
          <input
            type="text"
            name="genre"
            placeholder="Enter book genre"
            className="input input-bordered w-full "
            value={formData.genre}
            onChange={handleChange}
          />
        </div>
        <div className="pt-8">
          <button type="submit" className="btn btn-primary w-full text-slate-100">
            Add Book
          </button>
        </div>
      </>
    </form>
  </div>
  );
}

export default AddBook;
