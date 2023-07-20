/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */

import { useParams } from "react-router-dom";
import { useSingleBookQuery } from "../redux/features/product/bookApi";

export default function BookDetails() {
  const { id } = useParams();

  const { data, isLoading, error } = useSingleBookQuery(id);
  console.log(data);
  console.log(isLoading);
  console.log(error);

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
            <span className="text-blue-600 font-bold px-2">
              {data?.author}
            </span>
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


        </div>
      </div>
      
      <div className="flex max-w-12xl mx-auto items-center border-gray-300 pb-8 px-32 pt-4">
        {data?.reviews?.map((review: string) => (
          <>
            <div className="w-10 rounded-full mr-4">
              <img src={data?.profile} />
            </div>
            <div>
              <p>{review}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
