/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */

import { useParams } from "react-router-dom";
import { useGetReviewsQuery, usePostReviewMutation, useSingleBookQuery } from "../redux/features/product/bookApi";
import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";

export default function BookDetails() {
  const { id } = useParams();

  const { data, isLoading, error } = useSingleBookQuery(id);
  console.log(data);
  console.log(isLoading);
  console.log(error);

  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useAppDispatch();

  const [postReview] = usePostReviewMutation();
  const { data:book } = useGetReviewsQuery(id);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(inputValue);
    const options = {
      id: id,
      data: { review: inputValue },
    };

    postReview(options);
    setInputValue("");
  };

  return (
    <div>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300 pb-8 px-32">
        <div className="w-[50%]">
          <img src={data?.img} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{data?.title}</h1>
          <p>
            by -{" "}
            <span className="text-blue-600 font-bold px-2">{data?.author}</span>
          </p>
          <p>
            Category:{" "}
            <span className="text-orange-500 font-bold px-2">
              {data?.genre}
            </span>
          </p>
          <p>
            Publication Date:{" "}
            <span className="font-bold px-2">{data?.publication_date}</span>
          </p>
          <div className="">
            <button className="btn btn-warning mr-4">Edit Book</button>
            <button className="btn btn-error">Delete Book</button>
          </div>
        </div>
      </div>

      <div className="flex max-w-12xl mx-auto items-center justify-center  border-gray-300 pb-8 px-32 pt-4">
        <form onSubmit={handleSubmit} className="w-[75%] flex items-center ">
          <textarea
            className="textarea textarea-primary w-[75%]"
            placeholder="Review"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          ></textarea>
          <button
            type="submit"
            className="btn bg-primary p-4 rounded-lg ml-2 cursor-pointer"
          >
           Send
          </button>
        </form>
      </div>
      {book?.reviews?.map((review: string) => (
        <>
          <div className="flex items-center justify-start max-w-full mx-auto  pb-4 px-32 pt-1">
            <div className="w-10 rounded-full mr-4">
              <img src={data?.profile} />
            </div>
            <div>
              <p className="ml-40 text-yellow-50">{review}</p>
            </div>
          </div>
        </>
      ))}
      </div>
  );
}
