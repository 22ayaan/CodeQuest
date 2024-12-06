import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const fname = document.getElementById("fname").value;
    // console.log(fname);
    localStorage.setItem("fname", fname);
    navigate("/dashboard");
  };
  return (
    <>
      <Header />
      <div className="flex h-screen bg-stone-800">
        <div className="m-auto bg-stone-700 max-h-[800px] p-5 flex flex-col rounded-lg">
          <div className="flex flex-row justify-center h-full">
            <p className="mt-2 mb-4 text-2xl font-bold tracking-wide text-white">
              Sign Up
            </p>
          </div>
          <div className="h-full">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="pl-1 mt-3 font-semibold">First Name</p>
                  <input
                    type="text"
                    id="fname"
                    className="mt-1 border-[1px] border-slate-200 bg-stone-600 rounded-md py-2 px-2 w-full"
                  />
                </div>
                <div>
                  <p className="pl-1 mt-3 font-semibold">Last Name</p>
                  <input
                    type="text"
                    className="mt-1 border-[1px] border-slate-200 bg-stone-600 rounded-md py-2 px-2 w-full"
                  />
                </div>
              </div>
              <div>
                <p className="pl-1 mt-3 font-semibold">Email</p>
                <input
                  type="email"
                  className="mt-1 border-[1px] border-slate-200 bg-stone-600 rounded-md py-2 px-2 w-full"
                />
                <p className="pl-1 mt-3 font-semibold">Password</p>
                <input
                  type="password"
                  className="mt-1 border-[1px] border-slate-200 bg-stone-600 rounded-md py-2 px-2 w-full"
                />
              </div>
              <button
                type="submit"
                className="float-right px-5 py-3 mt-4 font-semibold text-black bg-white rounded-md"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;