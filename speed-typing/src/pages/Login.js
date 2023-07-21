import React, { useRef, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { changeUser } from "../actions/index";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const yes = () => {
    var curr = localStorage.getItem("typo_user");

    const _user = JSON.parse(curr);
    if (curr !== null) {
      dispatch(changeUser(_user));
      navigate("/home");
    }
  };

  useEffect(() => {
    yes()
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    const user = {
      username: email.current.value,
      password: password.current.value,
    };
    try {
      const res = await axios.post("/api/entry/login", user);
      dispatch(changeUser(res.data));
      localStorage.removeItem("typo_user");
      localStorage.setItem("typo_user", JSON.stringify(res.data));
      navigate("/solo");
    } catch (err) { 
      window.alert("Invalid credentials!");
    }
  };

  return (
    <section className="bg-[#00040f] w-full min-h-screen text-white flex flex-col justify-center sm:p-6 p-2">
      <div className="flex justify-center rounded-md">
        <section className="bg-[#222223] xl:w-1/3 lg:w-1/2 md:w-2/3 sm:w-4/5 w-full rounded-md">
          <div className="w-full flex sm:pt-16 sm:pb-16 pt-10 pb-10 justify-center bg-[#171718] rounded-md">
            <h2 className="font-semibold text-4xl">Login</h2>
          </div>
          <form
            onSubmit={handleClick}
            className="bg-[#222225] w-full sm:pl-6 pl-4 sm:pr-6 pr-4 sm:pt-14 pt-10 sm:pb-14 pb-10 rounded-md"
          >
            <input
              className="p-4 placeholder-slate-300 bg-[#00040f] text-xl w-full rounded-md"
              type="text"
              placeholder="Username*"
              ref={email}
            />
            <input
              className="p-4 placeholder-slate-300 bg-[#00040f] text-xl w-full rounded-md mt-4"
              type="password"
              placeholder="Password*"
              ref={password}
            />
            <div className="flex justify-end w-full mt-3">
              <Link
                to="/register"
                className="underline underline-offset-2 hover:text-slate-300 cursor-pointer"
              >
                Don't Have An Account?
              </Link>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className="pt-4 pb-4 pl-6 pr-6 bg-gradient-to-r from-slate-800 to-slate-600 border-[2px] border-slate-200 rounded-md sm:text-xl text-lg"
              >
                Login
              </button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
}

export default Login;
