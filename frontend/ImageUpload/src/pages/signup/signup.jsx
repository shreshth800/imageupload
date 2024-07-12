import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

export default function SignUp() {
  const [input, setInput] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    await signup(input);
  };
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="./src/assets/UploadIcon.png"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign up on ToDo
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="text"
                  name="name"
                  type="name"
                  required
                  autoComplete="name"
                  onChange={(e) => {
                    setInput({
                      ...input,
                      fullName: e.target.value,
                    });
                  }}
                  className="block p-2 font-medium w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Username
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  required
                  autoComplete="username"
                  onChange={(e) => {
                    setInput({
                      ...input,
                      username: e.target.value,
                    });
                  }}
                  className="block p-2 w-full font-medium rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  onChange={(e) => {
                    setInput({
                      ...input,
                      password: e.target.value,
                    });
                  }}
                  className="block p-2 w-full font-medium rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="password2"
                  name="password2"
                  type="password"
                  required
                  autoComplete="current-password"
                  onChange={(e) => {
                    setInput({
                      ...input,
                      confirmPassword: e.target.value,
                    });
                  }}
                  className="block p-2 mb-6 w-full font-medium rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="flex items-center ">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  onChange={(clicked) => {
                    if (clicked) {
                      setInput({
                        ...input,
                        gender: "male",
                      });
                    }
                  }}
                  className="m-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-1"
                  className=" text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Male
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  onChange={(clicked) => {
                    if (clicked) {
                      setInput({
                        ...input,
                        gender: "female",
                      });
                    }
                  }}
                  className="m-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-2"
                  className="text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Female
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "SignUp"
                )}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already Signed Up?{" "}
            <Link
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              to={"/"}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
