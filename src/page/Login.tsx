/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { toast } from 'react-toastify';

interface SignupFormInputs {
  email: string;
  password: string;
}
function Login() {
  const navigate = useNavigate();
  const { user, isLoading, isError, error } = useAppSelector((state: { user: any }) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  const dispatch = useAppDispatch();

  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const onSubmit = (data: SignupFormInputs) => {
    dispatch(loginUser({email : data.email, password: data.password}))
  };
  useEffect(() => {
    if (user.email && !isLoading) {
      navigate(from, { replace: true });
      toast.success("User loggedin Successfully");
    }
  }, [user.email, isLoading, navigate, from]);
  if (isError) {
    toast.error(error); 
  }
  return (
    <div className="m-auto xl:container px-12 sm:px-0 mx-auto ">
      <div className="mx-auto h-full sm:w-max">
        <div className="m-auto  py-12">
          <div className="mt-12 rounded-3xl border    -mx-6 sm:-mx-10 p-8 sm:p-10">
            <h3 className="text-2xl font-semibold  ">Sign in</h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-10 space-y-8 dark:text-white"
            >
              <div>
                <div
                  className={`relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300 ${
                    errors.email ? "before:bg-red-400" : ""
                  }`}
                >
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email or user name"
                    {...register("email", { required: "Email is required" })}
                    className={`w-full bg-transparent pb-3 border-b border-gray-300 dark:placeholder-gray-300 text-gray-400   dark:border-gray-600 outline-none ${
                      errors.email ? "invalid:border-red-400" : ""
                    } transition`}
                  />
                </div>
                {errors.email && (
                  <span className="text-red-400">
                    {/* {errors.email.message} */}
                  </span>
                )}
              </div>

              <div className="flex flex-col items-end">
                <div
                  className={`w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300 ${
                    errors.password ? "before:bg-red-400" : ""
                  }`}
                >
                  <input
                    type="password"
                    id="password"
                    placeholder="Your password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className={`w-full bg-transparent pb-3 border-b border-gray-600 placeholder-red-500  dark:placeholder-gray-300 dark:border-gray-600 text-gray-400  outline-none ${
                      errors.password ? "invalid:border-red-400" : ""
                    } transition`}
                  />
                </div>
                {errors.password && (
                  <span className="text-red-400">
                    {errors.password.message}
                  </span>
                )}
                <button type="reset" className="-mr-3 w-max p-3">
                  <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                    Forgot password ?
                  </span>
                </button>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
                >
                  <span className="text-base font-semibold text-white dark:text-gray-900">
                    Login
                  </span>
                </button>
                <div className="text-center">
                  <p className="mt-7"> or Sign in with</p>
                  <div className="mt-5 flex flex-wrap sm:grid gap-6 grid-cols-2">
                    <button className="w-full h-11 rounded-full border border-gray-300/75  px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700">
                      <div className="w-max mx-auto flex items-center justify-center space-x-4">
                        <svg
                          className="w-5"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z"
                            fill="#4285F4"
                          />
                          <path
                            d="M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z"
                            fill="#34A853"
                          />
                          <path
                            d="M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z"
                            fill="#EB4335"
                          />
                        </svg>
                        <span className="block w-max text-sm font-semibold tracking-wide text-cyan-700 dark:text-white">
                          With Google
                        </span>
                      </div>
                    </button>
                    <button className="w-full h-11 rounded-full bg-gray-900 px-6 transition hover:bg-gray-800 focus:bg-gray-700 active:bg-gray-600 dark:bg-gray-700 dark:border dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700">
                      <div className="w-max mx-auto flex items-center justify-center space-x-4 text-white">
                        <svg
                           className="w-5"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0" />

                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />

                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <circle
                              cx="16"
                              cy="16"
                              r="14"
                              fill="url(#paint0_linear_87_7208)"
                            />{" "}
                            <path
                              d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z"
                              fill="white"
                            />{" "}
                            <defs>
                              {" "}
                              <linearGradient
                                id="paint0_linear_87_7208"
                                x1="16"
                                y1="2"
                                x2="16"
                                y2="29.917"
                                gradientUnits="userSpaceOnUse"
                              >
                                {" "}
                                <stop stop-color="#18ACFE" />{" "}
                                <stop offset="1" stop-color="#0163E0" />{" "}
                              </linearGradient>{" "}
                            </defs>{" "}
                          </g>
                        </svg>
                        <span className="block w-max text-sm font-semibold tracking-wide text-white">
                          With Facebook
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
                <button type="reset" className="-ml-3 w-max p-3">
                  <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                    Don't have an account?
                    <Link to="/register">Register</Link>
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="border-t pt-12 text-gray-500 dark:border-gray-800"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
