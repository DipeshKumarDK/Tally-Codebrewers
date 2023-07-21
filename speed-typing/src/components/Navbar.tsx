"use client";

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <section className="flex border-b-[1px] border-t-[1px] border-slate-200 pl-5 pr-5 bg-[#04151b] text-white top-0">
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-slate-100">Typo</h3>
        </div>
        <section className="flex flex-grow justify-between h-full w-full pl-6 pr-6">
          <div className="flex flex-grow border-[1px] border-slate-100 ml-5 rounded-l-full rounded-r-full w-fit pr-2 mt-1 mb-1">
            <input
              type="text"
              className="h-12 bg-[#04151b] outline-none rounded-l-full rounded-r-full w-full p-1 pl-3 pr-3 placeholder:text-slate-200"
              placeholder="Search here"
            />
            <div className="flex flex-col justify-center">
              <FiSearch className="h-8 w-8 p-1 mt-1 mb-1 bg-white text-slate-800 rounded-full" />
            </div>
          </div>
          <Link to="/lobby"
            className="flex justify-end ml-5"
          >
            <h4
              className="text-sm ml-5 font-semibold pt-5 pb-5 cursor-pointer"
            >
              Lobby
            </h4>
          </Link>
          <Link to="/profile"
            className="flex justify-end ml-5"
          >
            <h4
              className="text-sm ml-5 font-semibold pt-5 pb-5 cursor-pointer"
            >
              Profile
            </h4>
          </Link>
          <Link to="/"
            className="flex justify-end ml-5"
          >
            <h4
              className="text-sm ml-5 font-semibold pt-5 pb-5 cursor-pointer"
            >
              Login
            </h4>
          </Link>
        </section>
      </section>
    </>
  );
}
