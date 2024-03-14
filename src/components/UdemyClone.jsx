import React, { useState } from "react";
import { IoGlobeOutline } from "react-icons/io5";
import { FaGreaterThan } from "react-icons/fa";

import { FaArrowRight } from "react-icons/fa6";

// import UdemyLogo from '../images/UdemyLogo.jpg'

const UdemyClone = () => {
  //This is a Binding .......
  const [Username, setUsername] = useState("");

  return (
    <div className="bg-white ">
      {/*========== HEADER start  ==========*/}
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full font-serif bg-white border-b border-gray-200 text-sm py-3 h-16  sm:py-0 dark:bg-gray-800 dark:border-gray-700">
        <nav
          className="relative max-w-[98rem] w-full sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <a href="#">
              <img
                className="w-auto h-7"
                src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg"
                alt=""
              />
            </a>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hsCollapseOpen:hidden flexShrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hsCollapseOpen:block hidden flexShrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col gap-y-2 gap-x-0 mt-5 sm:flex-row sm:items-center sm:gap-y-0 sm:gap-x-5 sm:mt-0 sm:ps-7">
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                <button
                  type="button"
                  className="flex items-center w-full text-gray-500 hover:text-[#5624d0] font-medium dark:text-gray-400 dark:hover:text-gray-500 "
                >
                  Categories
                  {/* <svg className="flexShrink-0 ms-2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg> */}
                </button>

                <div className="hs-dropdown-menu w-24  transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-80 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                  <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                    <div className="hs-dropdown flex justify-between relative  [--placement:right-top]">
                      <button
                        type="button"
                        className="relative  py-3 px-6 hover:text-[#5624d0]  inline-flex items-center gap-x-6 text-sm font-semibold rounded-s-md bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Development
                      </button>
                      <div className="hs-dropdown relative inline-flex">
                        <button
                          id="hs-split-dropright"
                          type="button"
                          className="hs-dropdown-toggle relative -ms-[.3125rem] py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold  bg-gray-100 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:hover:bg-white  dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          {/* <span className="sr-onLy">Toggle Dropdown</span> */}
                          <svg
                            className="flexShrink-0 size-4 textGray-600"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </button>

                        <div
                          className="hs-dropdown-menu w-72 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                          aria-labelledby="hs-split-dropright"
                        >
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Web Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Data Science{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Mobile Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Programing Languages{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Game Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Database Design{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Software testing{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Software Development Tool{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="hs-dropdown relative flex justify-between [--placement:right-top]">
                      <button
                        type="button"
                        className="relative py-3 px-6 hover:text-[#5624d0]  inline-flex items-center gap-x-6 text-sm font-semibold rounded-s-md bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Business
                      </button>
                      <div className="hs-dropdown relative inline-flex">
                        <button
                          id="hs-split-dropright"
                          type="button"
                          className="hs-dropdown-toggle relative -ms-[.3125rem] py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold  bg-gray-100 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:hover:bg-white  dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          {/* <span className="sr-onLy">Toggle Dropdown</span> */}
                          <svg
                            className="flexShrink-0 size-4 textGray-600"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </button>

                        <div
                          className="hs-dropdown-menu w-72 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                          aria-labelledby="hs-split-dropright"
                        >
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Web Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Data Science{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Mobile Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Programing Languages{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Game Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Database Design{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Software testing{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Software Development Tool{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="hs-dropdown relative flex justify-between [--placement:right-top]">
                      <button
                        type="button"
                        className="relative py-3 px-6 hover:text-[#5624d0]  inline-flex items-center gap-x-6 text-sm font-semibold rounded-s-md bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Finance & Accounting
                      </button>
                      <div className="hs-dropdown relative inline-flex">
                        <button
                          id="hs-split-dropright"
                          type="button"
                          className="hs-dropdown-toggle relative -ms-[.3125rem] py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold  bg-gray-100 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:hover:bg-white  dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          {/* <span className="sr-onLy">Toggle Dropdown</span> */}
                          <svg
                            className="flexShrink-0 size-4 textGray-600"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </button>

                        <div
                          className="hs-dropdown-menu w-72 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                          aria-labelledby="hs-split-dropright"
                        >
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Web Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Data Science{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Mobile Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Programing Languages{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Game Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Database Design{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Software testing{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Software Development Tool{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="hs-dropdown relative flex justify-between [--placement:right-top]">
                      <button
                        type="button"
                        className="relative py-3 px-6 hover:text-[#5624d0]  inline-flex items-center gap-x-6 text-sm font-semibold rounded-s-md bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        IT & Software
                      </button>
                      <div className="hs-dropdown relative inline-flex">
                        <button
                          id="hs-split-dropright"
                          type="button"
                          className="hs-dropdown-toggle relative -ms-[.3125rem] py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold  bg-gray-100 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:hover:bg-white  dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          {/* <span className="sr-onLy">Toggle Dropdown</span> */}
                          <svg
                            className="flexShrink-0 size-4 textGray-600"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </button>

                        <div
                          className="hs-dropdown-menu w-72 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                          aria-labelledby="hs-split-dropright"
                        >
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Web Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Data Science{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Mobile Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Programing Languages{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Game Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Database Design{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Software testing{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Software Development Tool{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="hs-dropdown relative flex justify-between [--placement:right-top]">
                      <button
                        type="button"
                        className="relative py-3 px-6 hover:text-[#5624d0]  inline-flex items-center gap-x-6 text-sm font-semibold rounded-s-md bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Office Productivity
                      </button>
                      <div className="hs-dropdown relative inline-flex">
                        <button
                          id="hs-split-dropright"
                          type="button"
                          className="hs-dropdown-toggle relative -ms-[.3125rem] py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold  bg-gray-100 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:hover:bg-white  dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          {/* <span className="sr-onLy">Toggle Dropdown</span> */}
                          <svg
                            className="flexShrink-0 size-4 textGray-600"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </button>

                        <div
                          className="hs-dropdown-menu w-72 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                          aria-labelledby="hs-split-dropright"
                        >
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Web Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Data Science{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Mobile Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Programing Languages{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Game Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Database Design{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Software testing{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Software Development Tool{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="hs-dropdown relative flex justify-between [--placement:right-top]">
                      <button
                        type="button"
                        className="relative py-3 px-6 hover:text-[#5624d0]  inline-flex items-center gap-x-6 text-sm font-semibold rounded-s-md bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Design
                      </button>
                      <div className="hs-dropdown relative inline-flex">
                        <button
                          id="hs-split-dropright"
                          type="button"
                          className="hs-dropdown-toggle relative -ms-[.3125rem] py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold  bg-gray-100 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:hover:bg-white  dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          {/* <span className="sr-onLy">Toggle Dropdown</span> */}
                          <svg
                            className="flexShrink-0 size-4 textGray-600"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </button>

                        <div
                          className="hs-dropdown-menu w-72 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                          aria-labelledby="hs-split-dropright"
                        >
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Web Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Data Science{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Mobile Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Programing Languages{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Game Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Database Design{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Software testing{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Software Development Tool{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="hs-dropdown relative flex justify-between [--placement:right-top]">
                      <button
                        type="button"
                        className="relative py-3 px-6 hover:text-[#5624d0]  inline-flex items-center gap-x-6 text-sm font-semibold rounded-s-md bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Marketing
                      </button>
                      <div className="hs-dropdown relative inline-flex">
                        <button
                          id="hs-split-dropright"
                          type="button"
                          className="hs-dropdown-toggle relative -ms-[.3125rem] py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold  bg-gray-100 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:hover:bg-white  dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          {/* <span className="sr-onLy">Toggle Dropdown</span> */}
                          <svg
                            className="flexShrink-0 size-4 textGray-600"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </button>

                        <div
                          className="hs-dropdown-menu w-72 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                          aria-labelledby="hs-split-dropright"
                        >
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Web Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Data Science{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Mobile Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Programing Languages{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Game Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Database Design{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Software testing{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Software Development Tool{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="hs-dropdown relative flex justify-between [--placement:right-top]">
                      <button
                        type="button"
                        className="relative py-3 px-6 hover:text-[#5624d0]  inline-flex items-center gap-x-6 text-sm font-semibold rounded-s-md bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        LifeStyle
                      </button>
                      <div className="hs-dropdown relative inline-flex">
                        <button
                          id="hs-split-dropright"
                          type="button"
                          className="hs-dropdown-toggle relative -ms-[.3125rem] py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold  bg-gray-100 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:hover:bg-white  dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          {/* <span className="sr-onLy">Toggle Dropdown</span> */}
                          <svg
                            className="flexShrink-0 size-4 textGray-600"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </button>

                        <div
                          className="hs-dropdown-menu w-72 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                          aria-labelledby="hs-split-dropright"
                        >
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Web Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Data Science{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Mobile Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Programing Languages{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Game Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Database Design{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Software testing{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Software Development Tool{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="hs-dropdown relative flex justify-between [--placement:right-top]">
                      <button
                        type="button"
                        className="relative py-3 px-6 hover:text-[#5624d0]  inline-flex items-center gap-x-6 text-sm font-semibold rounded-s-md bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Photography & Video
                      </button>
                      <div className="hs-dropdown relative inline-flex">
                        <button
                          id="hs-split-dropright"
                          type="button"
                          className="hs-dropdown-toggle relative -ms-[.3125rem] py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold  bg-gray-100 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:hover:bg-white  dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          {/* <span className="sr-onLy">Toggle Dropdown</span> */}
                          <svg
                            className="flexShrink-0 size-4 textGray-600"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </button>

                        <div
                          className="hs-dropdown-menu w-72 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                          aria-labelledby="hs-split-dropright"
                        >
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Web Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Data Science{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Mobile Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Programing Languages{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Game Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Database Design{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Software testing{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Software Development Tool{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="hs-dropdown relative flex justify-between [--placement:right-top]">
                      <button
                        type="button"
                        className="relative py-3 px-6 hover:text-[#5624d0]  inline-flex items-center gap-x-6 text-sm font-semibold rounded-s-md bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Heath & Fitness
                      </button>
                      <div className="hs-dropdown relative inline-flex">
                        <button
                          id="hs-split-dropright"
                          type="button"
                          className="hs-dropdown-toggle relative -ms-[.3125rem] py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold  bg-gray-100 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:hover:bg-white  dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          {/* <span className="sr-onLy">Toggle Dropdown</span> */}
                          <svg
                            className="flexShrink-0 size-4 textGray-600"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </button>

                        <div
                          className="hs-dropdown-menu w-72 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                          aria-labelledby="hs-split-dropright"
                        >
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Web Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Data Science{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Mobile Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Programing Languages{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Game Development{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Database Design{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Software testing{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                          <a
                            className="flex hover:text-[#5624d0]  items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                            href="#"
                          >
                            Software Development Tool{" "}
                            <svg
                              className="flexShrink-0 size-4 textGray-600"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="items-center hidden rounded-full px-56 py-1 pl-4 bg-[#f7f9fa] dark:text-gray-800 dark:bg-[#f7f9fa]  border-2 border-black shadow-md lg:flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="mr-2 bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <input
                  type="text "
                  className="  bg-[#f7f9fa]  px-1 w-96 py-1 text-black border-none"
                  placeholder="search for anything ..."
                  value={Username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>

              {/* ======================= */}
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                <button
                  type="button"
                  className="flex items-center w-full text-black hover:text-[#5624d0] font-medium dark:text-black  dark:hover:text-black  "
                >
                  Udemy Business
                  {/* <svg className="flexShrink-0 ms-2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg> */}
                </button>

                <div className="hs-dropdown-menu  w-20  transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-80 hidden z-10 bg-white sm:shadow-md  p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                  <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                    <div className="hs-dropdown  relative  [--placement:right-top]">
                      <h1 className=" text-black text-lg  text-center font-semibold py-3">
                        Get your access to over <br /> 25,000 top Udemy courses,{" "}
                        <br /> anytime , anywhere.{" "}
                      </h1>
                      <button className="flex justify-center items-center text-center text-white bg-black text-base  font-semibold py-2 px-16 ">
                        Try Udemy Business{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* ========================= */}

              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                <button
                  type="button"
                  className="flex items-center w-full text-black hover:text-[#5624d0] font-medium dark:text-black  dark:hover:text-black  "
                >
                  Tech on Udemy
                  {/* <svg className="flexShrink-0 ms-2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg> */}
                </button>

                <div className="hs-dropdown-menu  w-20  transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-80 hidden z-10 bg-white sm:shadow-md  p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                  <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                    <div className="hs-dropdown  relative  [--placement:right-top]">
                      <h1 className=" text-black text-lg  text-center font-semibold py-3">
                        Turn on you know into an <br /> opportunity and reach{" "}
                        <br />
                        millions around the world{" "}
                      </h1>
                      <button className="flex justify-center items-center text-center text-white bg-black text-base  font-semibold py-2 px-24 ">
                        Learn more{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* ====================== */}
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                <button
                  type="button"
                  className="flex items-center w-full text-black hover:text-[#5624d0] font-medium dark:text-black  dark:hover:text-black  "
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div className="hs-dropdown-menu  w-20  transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-80 hidden z-10 bg-white sm:shadow-md  p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                  <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                    <div className="hs-dropdown  relative  [--placement:right-top]">
                      <h1 className="  text-black text-base  text-center font-semibold py-2 px-1">
                        {" "}
                        Your Card is Empty{" "}
                      </h1>
                      <h2 className="  text-[#5624d0]  text-base  text-center font-semibold py-1  px-1">
                        Keep Shopping{" "}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= */}

              <div>
                <button className=" text-black bg-white py-3 px-6 border border-black font-bold hover:bg-[#e3e7ea]">
                  Log in{" "}
                </button>
              </div>

              <div>
                <button className=" text-white  bg-black py-3 px-6 border border-black font-bold ">
                  Sign up
                </button>
              </div>

              <div>
                <button className=" text-black bg-white text-xl  py-3 px-3 border border-black font-bold hover:bg-[#e3e7ea]">
                  <IoGlobeOutline />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/*========== END HEADER ==========*/}

      {/*========== Crousal Start  ==========*/}

      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img-b.udemycdn.com/notices/web_carousel_slide/image/a916ff92-af3c-4f26-95dd-2e36cf938903.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-center items-center  bg-white ml-28 mt-16 text-center shadow-lg h-[10rem] w-[30rem] p-11">
            <div>
              <h1 className="text-3xl text-black font-serif font-bold">
                Learning comes to you
              </h1>
              <h2 className="text-base text-black font-serif ">
                Attain a world of knowledge — at home or on the go. Courses as
                low as ₹549 through March 14.
              </h2>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className=" ">
              ❮
            </a>
            <a href="#slide2" className=" ">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img-b.udemycdn.com/notices/web_carousel_slide/image/a916ff92-af3c-4f26-95dd-2e36cf938903.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-center items-center  bg-white ml-28 mt-16 text-center shadow-lg h-[10rem] w-[30rem] p-11">
            <div>
              <h1 className="text-3xl text-black font-serif font-bold">
                Subscribe to the best of Udemy{" "}
              </h1>
              <h2 className="text-base text-black font-serif ">
                Attain a world of knowledge — at home or on the go. Courses as
                low as ₹549 through March 14.
              </h2>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="  ">
              ❮
            </a>
            <a href="#slide3" className=" ">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img-b.udemycdn.com/notices/web_carousel_slide/image/a916ff92-af3c-4f26-95dd-2e36cf938903.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-center items-center  bg-white ml-28 mt-16 text-center shadow-lg h-[15rem] w-[30rem] p-16">
            <div>
              <h1 className="text-3xl text-black font-serif font-bold">
                Learning comes to you
              </h1>
              <h2 className="text-base text-black font-serif ">
                Attain a world of knowledge — at home or on the go. Courses as
                low as ₹549 through March 14.
              </h2>
              <button className="flex justify-center items-center text-center text-white bg-black text-lg  font-semibold py-2 m-6 px-16 ">
                Learn more{" "}
              </button>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="  ">
              ❮
            </a>
            <a href="#slide4" className=" ">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/*========== Crousal End  ==========*/}

      <div className="max-w-[90rem] w-full  sm:px-6 lg:px-20 py-10 ">
        <h1 className="text-4xl text-black font-serif py-2 font-bold">
          All the skills you need in one place
        </h1>
        <p className="text-xl ">
          From critical workplace skills to technical topics, our catalog
          supports well-rounded professional development.
        </p>
      </div>

      {/* ===============Courses Section ================= */}

      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav
          className="flex space-x-2 menu menu-horizontal border-b-2 max-w-[90rem] w-full  sm:px-6 lg:px-20 text-lg font-bold text-[#2d2f31] hover:text-black "
          aria-label="Tabs"
          role="tablist"
        >
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black py-2 pr-4 inline-flex items-center gap-x-4 border-b-2 border-transparent text-base whitespace-nowrap text-gray-500 hover:text-black focus:outline-none focus:text-black disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active"
            id="tabs-with-underline-item-1"
            data-hs-tab="#tabs-with-underline-1"
            aria-controls="tabs-with-underline-1"
            role="tab"
          >
            Web Development
          </button>
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black py-2 px-4 inline-flex items-center gap-x-4 border-b-2 border-transparent text-base whitespace-nowrap text-gray-500 hover:text-black focus:outline-none focus:text-black disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
            id="tabs-with-underline-item-2"
            data-hs-tab="#tabs-with-underline-2"
            aria-controls="tabs-with-underline-2"
            role="tab"
          >
            IT Certificates
          </button>
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black py-2 px-4 inline-flex items-center gap-x-4 border-b-2 border-transparent text-base whitespace-nowrap text-gray-500 hover:text-black focus:outline-none focus:text-black disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
            id="tabs-with-underline-item-3"
            data-hs-tab="#tabs-with-underline-3"
            aria-controls="tabs-with-underline-3"
            role="tab"
          >
            Leadership
          </button>
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black py-2 px-4 inline-flex items-center gap-x-4 border-b-2 border-transparent text-base whitespace-nowrap text-gray-500 hover:text-black focus:outline-none focus:text-black disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
            id="tabs-with-underline-item-4"
            data-hs-tab="#tabs-with-underline-4"
            aria-controls="tabs-with-underline-4"
            role="tab"
          >
            Data Science
          </button>
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black py-2 px-4 inline-flex items-center gap-x-4 border-b-2 border-transparent text-base whitespace-nowrap text-gray-500 hover:text-black focus:outline-none focus:text-black disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
            id="tabs-with-underline-item-5"
            data-hs-tab="#tabs-with-underline-5"
            aria-controls="tabs-with-underline-5"
            role="tab"
          >
            Communication
          </button>
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black py-2 px-4 inline-flex items-center gap-x-4 border-b-2 border-transparent text-base whitespace-nowrap text-gray-500 hover:text-black focus:outline-none focus:text-black disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
            id="tabs-with-underline-item-6"
            data-hs-tab="#tabs-with-underline-6"
            aria-controls="tabs-with-underline-6"
            role="tab"
          >
            Business Analytics & Intelligence
          </button>
        </nav>
      </div>

      <div className="mt-3 bg-[#f7f9fa]">
        <div
          id="tabs-with-underline-1"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-1"
        >
          <ul className="menu menu-horizontal max-w-[98rem] w-full  sm:px-6 lg:px-20 text-base font-bold text-[#2d2f31]  ">
            <li className="bg-[#2d2f31] m-2 rounded-full text-white p-1">
              <a className="text-center ">Web Development</a>
              <h6 className="text-[0.9rem] my-[-1rem] text-center  p-3">
                12.2M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">JavaScript </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                16.2M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">React Js </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                7M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Angular </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                4M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Java </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                14.2M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Android Development </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                8M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">IOS Development </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                8M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">CSS </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                8M+ learner
              </h6>
            </li>
          </ul>

          <section className="max-w-[95rem] w-full  sm:px-6 lg:px-20  py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-8">
              <div className=" grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="hs-tooltip [--placement:right]">
                  <div className="hs-tooltip-toggle   ">
                    <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        aria-label="Te nulla oportere reprimique his dolorum"
                      >
                        <img
                          alt=""
                          className="object-cover w-full h-full dark:bg-gray-500"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1TbgvkdZBvy7OTM4RM83SSHbUe9rMQCbEQw&usqp=CAU"
                        />
                      </a>
                      <div className="flex flex-col  p-4">
                        <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                          The Complete 2024 Web Development Bootcamp
                        </h3>
                        <h4 className="text-[1rem] py-2">Dr. Angela yu </h4>

                        <div className="flex gap-2">
                          <h2 className="text-black font-bold">4.7</h2>
                          <div class="-ml-1 flex gap-0.5  ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 text-yellow-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 text-yellow-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 text-yellow-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 text-yellow-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 text-yellow-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                          <h3>(365.154)</h3>
                        </div>
                        <h4 className="font-bold text-gray-800 text-[1rem]">
                          ₹549 <del>₹3,099</del>
                        </h4>
                        <button className="bg-[#eceb98] text-black px-4 py-1 my-3 w-24">
                          Bestseller
                        </button>
                      </div>
                    </article>
                    <span
                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible "
                      role="tooltip"
                    >
                      <div className="flex flex-col bg-white border w-80 shadow-sm  p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <h3 className="text-base font-serif font-bold text-gray-800 dark:text-white">
                          The Web Developer Bootcamp 2024
                        </h3>
                        
                        <p className="mt-1 text-xs font-bold text-gray-500 dark:text-gray-500">
                         Update February 2024
                        </p>
                          
                        <p className="mt-1 text-xs font-medium  text-gray-500 dark:text-gray-500">
                      74 total hours - AI levels - Subtitles 
                        </p>
                        <p className="mt-2 text-base text-gray-900 dark:text-gray-600">
                        Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps
                        </p>
                      
                        <p className="mt-2 text-sm text-gray-900 dark:text-gray-600">
                        👍 Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.</p>
                        <p className="mt-2 text-sm text-gray-900 dark:text-gray-600">
                        👍  Learn the latest technologies, including Javascript, React, Node and even Web3 development. </p>
                          <p className="mt-2 text-sm text-gray-900 dark:text-gray-600">
                          👍   After the course you will be able to build ANY website you want.</p>
                          <button className="border font-serif font-bold text-base text-white bg-[#8710d8] w-52 py-2 px-7 mt-5 hover:bg-black ">
            Add to cart 
          </button>
                      </div>
                    </span>
                  </div>
                </div>

                <div className="hs-tooltip [--placement:right]">
                  <div className="hs-tooltip-toggle   ">
                  <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      aria-label="Te nulla oportere reprimique his dolorum"
                    >
                      <img
                        alt=""
                        className="object-cover w-full h-full dark:bg-gray-500"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcvCHkv-ecIqOwZDlEuMPo-9yN7v5MhK2-Vw&usqp=CAU"
                      />
                    </a>
                    <div className="flex flex-col  p-4">
                      <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                        Practical Web Developement 22 Courses in 1{" "}
                      </h3>
                      <h4 className="text-[1rem] py-2">
                        Creative Online School{" "}
                      </h4>

                      <div className="flex gap-2">
                        <h2 className="text-black font-bold">4.7</h2>
                        <div class="-ml-1 flex gap-0.5  ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <h3>(365.154)</h3>
                      </div>
                      <h4 className="font-bold text-gray-800 text-[1rem]">
                        ₹549 <del>₹3,099</del>
                      </h4>
                    </div>
                  </article>
                        <span
                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible "
                      role="tooltip"
                    >
                      <div className="flex flex-col bg-white border w-80 shadow-sm  p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <h3 className="text-base font-serif font-bold text-gray-800 dark:text-white">
                          The Web Developer Bootcamp 2024
                        </h3>
                        
                        <p className="mt-1 text-xs font-bold text-gray-500 dark:text-gray-500">
                         Update February 2024
                        </p>
                          
                        <p className="mt-1 text-xs font-medium  text-gray-500 dark:text-gray-500">
                      74 total hours - AI levels - Subtitles 
                        </p>
                        <p className="mt-2 text-base text-gray-900 dark:text-gray-600">
                        Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps
                        </p>
                      
                        <p className="mt-2 text-sm text-gray-900 dark:text-gray-600">
                        👍 Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.</p>
                        <p className="mt-2 text-sm text-gray-900 dark:text-gray-600">
                        👍  Learn the latest technologies, including Javascript, React, Node and even Web3 development. </p>
                          <p className="mt-2 text-sm text-gray-900 dark:text-gray-600">
                          👍   After the course you will be able to build ANY website you want.</p>
                          <button className="border font-serif font-bold text-base text-white bg-[#8710d8] w-52 py-2 px-7 mt-5 hover:bg-black ">
            Add to cart 
          </button>
                      </div>
                    </span>
                  </div>
                </div>

                <div className="hs-tooltip [--placement:right]">
                  <div className="hs-tooltip-toggle   ">
                  <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      aria-label="Te nulla oportere reprimique his dolorum"
                    >
                      <img
                        alt=""
                        className="object-cover w-full h-full dark:bg-gray-500"
                        src="https://img-b.udemycdn.com/course/480x270/625204_436a_3.jpg"
                      />
                    </a>
                    <div className="flex flex-col  p-4">
                      <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                        The Web Development Bootcamp 2024{" "}
                      </h3>
                      <h4 className="text-[1rem] py-2">Colt Steele </h4>

                      <div className="flex gap-2">
                        <h2 className="text-black font-bold">4.7</h2>
                        <div class="-ml-1 flex gap-0.5  ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <h3>(365.154)</h3>
                      </div>
                      <h4 className="font-bold text-gray-800 text-[1rem]">
                        ₹549 <del>₹3,099</del>
                      </h4>
                    </div>
                  </article>
                       <span
                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible "
                      role="tooltip"
                    >
                      <div className="flex flex-col bg-white border w-80 shadow-sm  p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <h3 className="text-base font-serif font-bold text-gray-800 dark:text-white">
                          The Web Developer Bootcamp 2024
                        </h3>
                        
                        <p className="mt-1 text-xs font-bold text-gray-500 dark:text-gray-500">
                         Update February 2024
                        </p>
                          
                        <p className="mt-1 text-xs font-medium  text-gray-500 dark:text-gray-500">
                      74 total hours - AI levels - Subtitles 
                        </p>
                        <p className="mt-2 text-base text-gray-900 dark:text-gray-600">
                        Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps
                        </p>
                      
                        <p className="mt-2 text-sm text-gray-900 dark:text-gray-600">
                        👍 Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.</p>
                        <p className="mt-2 text-sm text-gray-900 dark:text-gray-600">
                        👍  Learn the latest technologies, including Javascript, React, Node and even Web3 development. </p>
                          <p className="mt-2 text-sm text-gray-900 dark:text-gray-600">
                          👍   After the course you will be able to build ANY website you want.</p>
                          <button className="border font-serif font-bold text-base text-white bg-[#8710d8] w-52 py-2 px-7 mt-5 hover:bg-black ">
            Add to cart 
          </button>
                      </div>
                    </span>
                  </div>
                </div>

                <div className="hs-tooltip [--placement:right]">
                  <div className="hs-tooltip-toggle   ">
                  <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      aria-label="Te nulla oportere reprimique his dolorum"
                    >
                      <img
                        alt=""
                        className="object-cover w-full h-full dark:bg-gray-500"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1maPUdOVwR3_hxYmz31EQjKFhgr5V3gxTzg&usqp=CAU"
                      />
                    </a>
                    <div className="flex flex-col  p-4">
                      <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                        The Web Development Masterclass - Online Certification
                        Course
                      </h3>
                      <h4 className="text-[1rem] py-2">YouAccel Training </h4>

                      <div className="flex gap-2">
                        <h2 className="text-black font-bold">4.7</h2>
                        <div class="-ml-1 flex gap-0.5  ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <h3>(365.154)</h3>
                      </div>
                      <h4 className="font-bold text-gray-800 text-[1rem]">
                        ₹549 <del>₹3,099</del>
                      </h4>
                    </div>
                  </article>
                      <span
                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible "
                      role="tooltip"
                    >
                      <div className="flex flex-col bg-white border w-80 shadow-sm  p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <h3 className="text-base font-serif font-bold text-gray-800 dark:text-white">
                          The Web Developer Bootcamp 2024
                        </h3>
                        
                        <p className="mt-1 text-xs font-bold text-gray-500 dark:text-gray-500">
                         Update February 2024
                        </p>
                          
                        <p className="mt-1 text-xs font-medium  text-gray-500 dark:text-gray-500">
                      74 total hours - AI levels - Subtitles 
                        </p>
                        <p className="mt-2 text-base text-gray-900 dark:text-gray-600">
                        Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps
                        </p>
                      
                        <p className="mt-2 text-sm text-gray-900 dark:text-gray-600">
                        👍 Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.</p>
                        <p className="mt-2 text-sm text-gray-900 dark:text-gray-600">
                        👍  Learn the latest technologies, including Javascript, React, Node and even Web3 development. </p>
                          <p className="mt-2 text-sm text-gray-900 dark:text-gray-600">
                          👍   After the course you will be able to build ANY website you want.</p>
                          <button className="border font-serif font-bold text-base text-white bg-[#8710d8] w-52 py-2 px-7 mt-5 hover:bg-black ">
            Add to cart 
          </button>
                      </div>
                    </span>
                  </div>
                </div>


                

                <button className="border-2 py-3 shadow-md px-3 w-96 text-base text-black  font-serif font-bold hover:bg-[#dce2e6]">
                  Show all Web Development Courses{" "}
                </button>
              </div>
            </div>
          </section>
        </div>

        <div
          id="tabs-with-underline-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-2"
        >
          <ul className="menu menu-horizontal max-w-[98rem] w-full  sm:px-6 lg:px-20 text-base font-bold text-[#2d2f31] ">
            <li className="bg-[#2d2f31] m-2 rounded-full text-white p-1 ">
              <a className="text-center ">Amazon AWS </a>
              <h6 className="text-[0.9rem] my-[-1rem] text-center  p-3">
                12.2M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">AWS Certificates </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                16.2M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Cloud Partition</a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                7M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Microshoft Az-900 </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                4M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">AWS certificates solutions</a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                14.2M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Kubernetes</a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                8M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">IOS Development </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                8M+ learner
              </h6>
            </li>
          </ul>

          <section className="max-w-[95rem] w-full  sm:px-6 lg:px-20  py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-8">
              <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-full dark:bg-gray-500"
                      src="https://img-c.udemycdn.com/course/750x422/567828_67d0.jpg"
                    />
                  </a>
                  <div className="flex flex-col  p-4">
                    <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                      New Ultimate AWS Certificates cloude practitioner CLF-C02
                    </h3>
                    <h4 className="text-[1rem] py-2">Dr. Angela yu </h4>

                    <div className="flex gap-2">
                      <h2 className="text-black font-bold">4.7</h2>
                      <div class="-ml-1 flex gap-0.5  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <h3>(365.154)</h3>
                    </div>
                    <h4 className="font-bold text-gray-800 text-[1rem]">
                      ₹549 <del>₹3,099</del>
                    </h4>
                    <button className="bg-[#eceb98] text-black px-4 py-1 my-3 w-24">
                      Bestseller
                    </button>
                  </div>
                </article>
                <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-full dark:bg-gray-500"
                      src="https://img-c.udemycdn.com/course/750x422/2776760_f176_10.jpg"
                    />
                  </a>
                  <div className="flex flex-col  p-4">
                    <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                      Amazon Web Services (AWS ) certificates{" "}
                    </h3>
                    <h4 className="text-[1rem] py-2">
                      Creative Online School{" "}
                    </h4>

                    <div className="flex gap-2">
                      <h2 className="text-black font-bold">4.7</h2>
                      <div class="-ml-1 flex gap-0.5  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <h3>(365.154)</h3>
                    </div>
                    <h4 className="font-bold text-gray-800 text-[1rem]">
                      ₹549 <del>₹3,099</del>
                    </h4>
                  </div>
                </article>
                <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-full dark:bg-gray-500"
                      src="https://img-c.udemycdn.com/course/750x422/950390_270f_3.jpg"
                    />
                  </a>
                  <div className="flex flex-col  p-4">
                    <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                      Amazon Web Services (AWS ) certificates 2024{" "}
                    </h3>
                    <h4 className="text-[1rem] py-2">Colt Steele </h4>

                    <div className="flex gap-2">
                      <h2 className="text-black font-bold">4.7</h2>
                      <div class="-ml-1 flex gap-0.5  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <h3>(365.154)</h3>
                    </div>
                    <h4 className="font-bold text-gray-800 text-[1rem]">
                      ₹549 <del>₹3,099</del>
                    </h4>
                  </div>
                </article>
                <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-full dark:bg-gray-500"
                      src="https://img-c.udemycdn.com/course/750x422/2196488_8fc7_10.jpg"
                    />
                  </a>
                  <div className="flex flex-col  p-4">
                    <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                      Amazon Web Services (AWS ) certificates Online
                      Certification Course
                    </h3>
                    <h4 className="text-[1rem] py-2">YouAccel Training </h4>

                    <div className="flex gap-2">
                      <h2 className="text-black font-bold">4.7</h2>
                      <div class="-ml-1 flex gap-0.5  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <h3>(365.154)</h3>
                    </div>
                    <h4 className="font-bold text-gray-800 text-[1rem]">
                      ₹549 <del>₹3,099</del>
                    </h4>
                  </div>
                </article>

                <button className="border-2 py-3 shadow-md px-3 w-96 text-base text-black  font-serif font-bold hover:bg-[#dce2e6]">
                  Show all Web Development Courses{" "}
                </button>
              </div>
            </div>
          </section>
        </div>

        <div
          id="tabs-with-underline-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-3"
        >
          <ul className="menu menu-horizontal max-w-[98rem] w-full  sm:px-6 lg:px-20 text-base font-bold text-[#2d2f31] ">
            <li className="bg-[#2d2f31] m-2 rounded-full text-white p-1 ">
              <a className="text-center ">Leadership </a>
              <h6 className="text-[0.9rem] my-[-1rem] text-center  p-3">
                12.2M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Management Skills </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                16.2M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Project Management</a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                7M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Personal Productivity </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                4M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Java </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                14.2M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Emotional Intelligence </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                8M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Digital Transformation </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                8M+ learner
              </h6>
            </li>
          </ul>

          <section className="max-w-[95rem] w-full  sm:px-6 lg:px-20  py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-8">
              <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-full dark:bg-gray-500"
                      src="https://img-c.udemycdn.com/course/750x422/1754098_e0df_3.jpg"
                    />
                  </a>
                  <div className="flex flex-col  p-4">
                    <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                      The Complete 2024 Web Development Bootcamp
                    </h3>
                    <h4 className="text-[1rem] py-2">Dr. Angela yu </h4>

                    <div className="flex gap-2">
                      <h2 className="text-black font-bold">4.7</h2>
                      <div class="-ml-1 flex gap-0.5  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <h3>(365.154)</h3>
                    </div>
                    <h4 className="font-bold text-gray-800 text-[1rem]">
                      ₹549 <del>₹3,099</del>
                    </h4>
                    <button className="bg-[#eceb98] text-black px-4 py-1 my-3 w-24">
                      Bestseller
                    </button>
                  </div>
                </article>
                <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-full dark:bg-gray-500"
                      src="https://img-c.udemycdn.com/course/750x422/1759114_873a_13.jpg"
                    />
                  </a>
                  <div className="flex flex-col  p-4">
                    <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                      Practical Web Developement 22 Courses in 1{" "}
                    </h3>
                    <h4 className="text-[1rem] py-2">
                      Creative Online School{" "}
                    </h4>

                    <div className="flex gap-2">
                      <h2 className="text-black font-bold">4.7</h2>
                      <div class="-ml-1 flex gap-0.5  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <h3>(365.154)</h3>
                    </div>
                    <h4 className="font-bold text-gray-800 text-[1rem]">
                      ₹549 <del>₹3,099</del>
                    </h4>
                  </div>
                </article>
                <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-full dark:bg-gray-500"
                      src="https://img-c.udemycdn.com/course/750x422/625204_436a_3.jpg"
                    />
                  </a>
                  <div className="flex flex-col  p-4">
                    <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                      The Web Development Bootcamp 2024{" "}
                    </h3>
                    <h4 className="text-[1rem] py-2">Colt Steele </h4>

                    <div className="flex gap-2">
                      <h2 className="text-black font-bold">4.7</h2>
                      <div class="-ml-1 flex gap-0.5  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <h3>(365.154)</h3>
                    </div>
                    <h4 className="font-bold text-gray-800 text-[1rem]">
                      ₹549 <del>₹3,099</del>
                    </h4>
                  </div>
                </article>
                <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-full dark:bg-gray-500"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1maPUdOVwR3_hxYmz31EQjKFhgr5V3gxTzg&usqp=CAU"
                    />
                  </a>
                  <div className="flex flex-col  p-4">
                    <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                      The Web Development Masterclass - Online Certification
                      Course
                    </h3>
                    <h4 className="text-[1rem] py-2">YouAccel Training </h4>

                    <div className="flex gap-2">
                      <h2 className="text-black font-bold">4.7</h2>
                      <div class="-ml-1 flex gap-0.5  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <h3>(365.154)</h3>
                    </div>
                    <h4 className="font-bold text-gray-800 text-[1rem]">
                      ₹549 <del>₹3,099</del>
                    </h4>
                  </div>
                </article>

                <button className="border-2 py-3 shadow-md px-3 w-96 text-base text-black  font-serif font-bold hover:bg-[#dce2e6] ">
                  Show all Web Development Courses{" "}
                </button>
              </div>
            </div>
          </section>
        </div>

        <div
          id="tabs-with-underline-4"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-4"
        >
          <ul className="menu menu-horizontal max-w-[98rem] w-full  sm:px-6 lg:px-20 text-base font-bold text-[#2d2f31] ">
            <li className="bg-[#2d2f31] m-2 rounded-full text-white p-1 ">
              <a className="text-center ">Data Science </a>
              <h6 className="text-[0.9rem] my-[-1rem] text-center  p-3">
                12.2M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Python </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                16.2M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Machine Learning </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                7M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Chat GPT </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                4M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center "> Natural Language </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                14.2M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Artificial Intelligence </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                8M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Statics</a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                8M+ learner
              </h6>
            </li>
          </ul>

          <section className="max-w-[95rem] w-full  sm:px-6 lg:px-20  py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-8">
              <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-full dark:bg-gray-500"
                      src="https://img-c.udemycdn.com/course/750x422/1759114_873a_13.jpg"
                    />
                  </a>
                  <div className="flex flex-col  p-4">
                    <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                      The Complete 2024 Web Development Bootcamp
                    </h3>
                    <h4 className="text-[1rem] py-2">Dr. Angela yu </h4>

                    <div className="flex gap-2">
                      <h2 className="text-black font-bold">4.7</h2>
                      <div class="-ml-1 flex gap-0.5  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <h3>(365.154)</h3>
                    </div>
                    <h4 className="font-bold text-gray-800 text-[1rem]">
                      ₹549 <del>₹3,099</del>
                    </h4>
                    <button className="bg-[#eceb98] text-black px-4 py-1 my-3 w-24">
                      Bestseller
                    </button>
                  </div>
                </article>
                <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-full dark:bg-gray-500"
                      src="https://img-c.udemycdn.com/course/750x422/851712_fc61_6.jpg"
                    />
                  </a>
                  <div className="flex flex-col  p-4">
                    <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                      Practical Web Developement 22 Courses in 1{" "}
                    </h3>
                    <h4 className="text-[1rem] py-2">
                      Creative Online School{" "}
                    </h4>

                    <div className="flex gap-2">
                      <h2 className="text-black font-bold">4.7</h2>
                      <div class="-ml-1 flex gap-0.5  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <h3>(365.154)</h3>
                    </div>
                    <h4 className="font-bold text-gray-800 text-[1rem]">
                      ₹549 <del>₹3,099</del>
                    </h4>
                  </div>
                </article>
                <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-full dark:bg-gray-500"
                      src="https://img-c.udemycdn.com/course/750x422/625204_436a_3.jpg"
                    />
                  </a>
                  <div className="flex flex-col  p-4">
                    <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                      The Web Development Bootcamp 2024{" "}
                    </h3>
                    <h4 className="text-[1rem] py-2">Colt Steele </h4>

                    <div className="flex gap-2">
                      <h2 className="text-black font-bold">4.7</h2>
                      <div class="-ml-1 flex gap-0.5  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <h3>(365.154)</h3>
                    </div>
                    <h4 className="font-bold text-gray-800 text-[1rem]">
                      ₹549 <del>₹3,099</del>
                    </h4>
                  </div>
                </article>
                <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-full dark:bg-gray-500"
                      src="https://img-c.udemycdn.com/course/750x422/567828_67d0.jpg"
                    />
                  </a>
                  <div className="flex flex-col  p-4">
                    <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                      The Web Development Masterclass - Online Certification
                      Course
                    </h3>
                    <h4 className="text-[1rem] py-2">YouAccel Training </h4>

                    <div className="flex gap-2">
                      <h2 className="text-black font-bold">4.7</h2>
                      <div class="-ml-1 flex gap-0.5  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <h3>(365.154)</h3>
                    </div>
                    <h4 className="font-bold text-gray-800 text-[1rem]">
                      ₹549 <del>₹3,099</del>
                    </h4>
                  </div>
                </article>

                <button className="border-2 py-3 shadow-md px-3 w-96 text-base text-black  font-serif font-bold ">
                  Show all Web Development Courses{" "}
                </button>
              </div>
            </div>
          </section>
        </div>

        <div
          id="tabs-with-underline-5"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-5"
        >
          <ul className="menu menu-horizontal max-w-[98rem] w-full  sm:px-6 lg:px-20 text-base font-bold text-[#2d2f31] ">
            <li className="bg-[#2d2f31] m-2 rounded-full text-white p-1 ">
              <a className="text-center ">Leadership </a>
              <h6 className="text-[0.9rem] my-[-1rem] text-center  p-3">
                12.2M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Management Skills </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                16.2M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Project Management</a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                7M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Personal Productivity </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                4M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Java </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                14.2M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Emotional Intelligence </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                8M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Digital Transformation </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                8M+ learner
              </h6>
            </li>
          </ul>

          <section className="max-w-[95rem] w-full  sm:px-6 lg:px-20  py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-8">
              <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-full dark:bg-gray-500"
                      src="https://img-c.udemycdn.com/course/750x422/1565838_e54e_18.jpg"
                    />
                  </a>
                  <div className="flex flex-col  p-4">
                    <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                      The Complete 2024 Web Development Bootcamp
                    </h3>
                    <h4 className="text-[1rem] py-2">Dr. Angela yu </h4>

                    <div className="flex gap-2">
                      <h2 className="text-black font-bold">4.7</h2>
                      <div class="-ml-1 flex gap-0.5  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <h3>(365.154)</h3>
                    </div>
                    <h4 className="font-bold text-gray-800 text-[1rem]">
                      ₹549 <del>₹3,099</del>
                    </h4>
                    <button className="bg-[#eceb98] text-black px-4 py-1 my-3 w-24">
                      Bestseller
                    </button>
                  </div>
                </article>
                <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-full dark:bg-gray-500"
                      src="https://img-c.udemycdn.com/course/750x422/1362070_b9a1_2.jpg"
                    />
                  </a>
                  <div className="flex flex-col  p-4">
                    <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                      Practical Web Developement 22 Courses in 1{" "}
                    </h3>
                    <h4 className="text-[1rem] py-2">
                      Creative Online School{" "}
                    </h4>

                    <div className="flex gap-2">
                      <h2 className="text-black font-bold">4.7</h2>
                      <div class="-ml-1 flex gap-0.5  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <h3>(365.154)</h3>
                    </div>
                    <h4 className="font-bold text-gray-800 text-[1rem]">
                      ₹549 <del>₹3,099</del>
                    </h4>
                  </div>
                </article>
                <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-full dark:bg-gray-500"
                      src="https://img-c.udemycdn.com/course/750x422/625204_436a_3.jpg"
                    />
                  </a>
                  <div className="flex flex-col  p-4">
                    <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                      The Web Development Bootcamp 2024{" "}
                    </h3>
                    <h4 className="text-[1rem] py-2">Colt Steele </h4>

                    <div className="flex gap-2">
                      <h2 className="text-black font-bold">4.7</h2>
                      <div class="-ml-1 flex gap-0.5  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <h3>(365.154)</h3>
                    </div>
                    <h4 className="font-bold text-gray-800 text-[1rem]">
                      ₹549 <del>₹3,099</del>
                    </h4>
                  </div>
                </article>
                <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-full dark:bg-gray-500"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1maPUdOVwR3_hxYmz31EQjKFhgr5V3gxTzg&usqp=CAU"
                    />
                  </a>
                  <div className="flex flex-col  p-4">
                    <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                      The Web Development Masterclass - Online Certification
                      Course
                    </h3>
                    <h4 className="text-[1rem] py-2">YouAccel Training </h4>

                    <div className="flex gap-2">
                      <h2 className="text-black font-bold">4.7</h2>
                      <div class="-ml-1 flex gap-0.5  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <h3>(365.154)</h3>
                    </div>
                    <h4 className="font-bold text-gray-800 text-[1rem]">
                      ₹549 <del>₹3,099</del>
                    </h4>
                  </div>
                </article>

                <button className="border-2 py-3 shadow-md px-3 w-96 text-base text-black  font-serif font-bold ">
                  Show all Web Development Courses{" "}
                </button>
              </div>
            </div>
          </section>
        </div>

        <div
          id="tabs-with-underline-6"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-6"
        >
          <ul className="menu menu-horizontal max-w-[98rem] w-full  sm:px-6 lg:px-20 text-base font-bold text-[#2d2f31] ">
            <li className="bg-[#2d2f31] m-2 rounded-full text-white p-1 ">
              <a className="text-center ">Excel</a>
              <h6 className="text-[0.9rem] my-[-1rem] text-center  p-3">
                12.2M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">SQL</a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                16.2M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Project Management</a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                7M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Personal Productivity </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                4M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Microshoft power BI</a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                14.2M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Emotional Intelligence </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                8M+ learner
              </h6>
            </li>
            <li className="bg-[#eff4f7] hover:bg-[#d1d7dc] m-2 rounded-full  text-gray-700">
              <a className="text-center ">Tablea </a>
              <h6 className="text-[0.9rem] my-[-1rem] px-5 text-center">
                8M+ learner
              </h6>
            </li>
          </ul>

          <section className="max-w-[95rem] w-full  sm:px-6 lg:px-20  py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-8">
              <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-full dark:bg-gray-500"
                      src="https://img-c.udemycdn.com/course/750x422/1759114_873a_13.jpg"
                    />
                  </a>
                  <div className="flex flex-col  p-4">
                    <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                      The Complete 2024 Web Development Bootcamp
                    </h3>
                    <h4 className="text-[1rem] py-2">Dr. Angela yu </h4>

                    <div className="flex gap-2">
                      <h2 className="text-black font-bold">4.7</h2>
                      <div class="-ml-1 flex gap-0.5  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <h3>(365.154)</h3>
                    </div>
                    <h4 className="font-bold text-gray-800 text-[1rem]">
                      ₹549 <del>₹3,099</del>
                    </h4>
                    <button className="bg-[#eceb98] text-black px-4 py-1 my-3 w-24">
                      Bestseller
                    </button>
                  </div>
                </article>
                <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-full dark:bg-gray-500"
                      src="https://img-c.udemycdn.com/course/750x422/950390_270f_3.jpg"
                    />
                  </a>
                  <div className="flex flex-col  p-4">
                    <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                      Practical Web Developement 22 Courses in 1{" "}
                    </h3>
                    <h4 className="text-[1rem] py-2">
                      Creative Online School{" "}
                    </h4>

                    <div className="flex gap-2">
                      <h2 className="text-black font-bold">4.7</h2>
                      <div class="-ml-1 flex gap-0.5  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <h3>(365.154)</h3>
                    </div>
                    <h4 className="font-bold text-gray-800 text-[1rem]">
                      ₹549 <del>₹3,099</del>
                    </h4>
                  </div>
                </article>
                <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-full dark:bg-gray-500"
                      src="https://img-c.udemycdn.com/course/750x422/2196488_8fc7_10.jpg"
                    />
                  </a>
                  <div className="flex flex-col  p-4">
                    <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                      The Web Development Bootcamp 2024{" "}
                    </h3>
                    <h4 className="text-[1rem] py-2">Colt Steele </h4>

                    <div className="flex gap-2">
                      <h2 className="text-black font-bold">4.7</h2>
                      <div class="-ml-1 flex gap-0.5  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <h3>(365.154)</h3>
                    </div>
                    <h4 className="font-bold text-gray-800 text-[1rem]">
                      ₹549 <del>₹3,099</del>
                    </h4>
                  </div>
                </article>
                <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-full dark:bg-gray-500"
                      src="https://img-c.udemycdn.com/course/750x422/851712_fc61_6.jpg"
                    />
                  </a>
                  <div className="flex flex-col  p-4">
                    <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                      The Web Development Masterclass - Online Certification
                      Course
                    </h3>
                    <h4 className="text-[1rem] py-2">YouAccel Training </h4>

                    <div className="flex gap-2">
                      <h2 className="text-black font-bold">4.7</h2>
                      <div class="-ml-1 flex gap-0.5  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <h3>(365.154)</h3>
                    </div>
                    <h4 className="font-bold text-gray-800 text-[1rem]">
                      ₹549 <del>₹3,099</del>
                    </h4>
                  </div>
                </article>

                <button className="border-2 py-3 shadow-md px-3 w-96 text-base text-black  font-serif font-bold ">
                  Show all Web Development Courses{" "}
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* TRusted Compnies Section */}

      <section className="p-6 dark:bg-[#ffffff] dark:text-gray-800">
        <div className="container p-4 mx-auto text-center">
          <h2 className="text-xl font-semibold text-[#6a6f73]">
            Trusted by over 15,000 companies and millions of learners around the
            world
          </h2>
        </div>
        <div className="container flex flex-wrap justify-center mx-auto dark:text-[#6a6f73]">
          <div className="flex justify-center  p-11 align-middle ">
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg"
              alt=""
            />
          </div>
          <div className="flex justify-center  p-11 align-middle ">
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg"
              alt=""
            />
          </div>
          <div className="flex justify-center  p-11 align-middle ">
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg"
              alt=""
            />
          </div>
          <div className="flex justify-center  p-11 align-middle ">
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/att.svg"
              alt=""
            />
          </div>
          <div className="flex justify-center  p-11 align-middle ">
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg"
              alt=""
            />
          </div>
          <div className="flex justify-center  p-11 align-middle ">
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg"
              alt=""
            />
          </div>
          <div className="flex justify-center  p-11 align-middle ">
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/citi.svg"
              alt=""
            />
          </div>
          <div className="flex justify-center  p-11 align-middle ">
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Learning focused on your goals */}

      <section className="dark:bg-gray-800 bg-[#f7f9fa] dark:text-gray-100 max-w-[95rem] w-full  sm:px-6 lg:px-20 ">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-4xl font-bold tracking-tight sm:text-4xl dark:text-black text-black  font-serif">
                Learning focused on your goals
              </h3>
              <div className="mt-12 space-y-12">
                <div className="flex border-2 border-l-[0.8rem] border-[#5624D0] pl-2 pr-12 py-5 hover:bg-[#e4e8eb] rounded-lg">
                  <div className="flex-shrink-0 ">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <img
                        src="https://s.udemycdn.com/design-system/expressive-icons/light/1x/hands-on-practice.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 text-black font-bold font-serif dark:text-gray-50">
                      Hands-on training
                    </h4>
                    <p className="mt-2 text-gray-700 dark:text-gray-400">
                      Upskill effectively with AI-powered coding exercises,
                      practice tests, skills assessments, labs, and workspaces.
                    </p>
                  </div>
                </div>
                <div className="flex   border-2 pl-2 pr-12 py-5 rounded-lg hover:bg-[#e4e8eb] ">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <img
                        src="https://s.udemycdn.com/design-system/expressive-icons/light/1x/certificate.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg  text-black font-bold font-serifleading-6 dark:text-gray-50">
                      Cu imperdiet posidonium sed
                    </h4>
                    <p className="mt-2 text-gray-700">
                      Amet utinam aliquando ut mea, malis admodum ocurreret nec
                      et, elit tibique cu nec. Nec ex maluisset inciderint, ex
                      quis.
                    </p>
                  </div>
                </div>
                <div className="flex  border-2 pl-2 pr-12 py-5 rounded-lg hover:bg-[#e4e8eb] ">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <img
                        src="https://s.udemycdn.com/design-system/expressive-icons/light/1x/empty-state-1.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg  text-black font-bold font-serif leading-6 dark:text-gray-50">
                      Nulla omittam sadipscing mel ne
                    </h4>
                    <p className="mt-2 text-gray-700">
                      At sed possim oporteat probatus, justo graece ne nec,
                      minim commodo legimus ut vix. Ut eos iudico quando soleat,
                      nam modus.
                    </p>
                    <h1 className=" text-[#5624D0] text-lg font-bold font-serif pt-2">
                      Find out more{" "}
                    </h1>
                  </div>
                </div>
                <div className="flex   border-2 pl-2 pr-12 py-5 rounded-lg hover:bg-[#e4e8eb] ">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <img
                        src="https://s.udemycdn.com/design-system/expressive-icons/light/1x/organizations-2.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg  text-black font-bold font-serif leading-6 dark:text-gray-50">
                      Nulla omittam sadipscing mel ne
                    </h4>
                    <p className="mt-2 text-gray-700">
                      At sed possim oporteat probatus, justo graece ne nec,
                      minim commodo legimus ut vix. Ut eos iudico quando soleat,
                      nam modus.
                    </p>
                    <h1 className=" text-[#5624D0] text-lg font-bold font-serif pt-2">
                      Find out more{" "}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src="https://s.udemycdn.com/lohp/features-and-value-props/v5/desktop-hands-on-learning-1x.png"
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section  */}

      <section className="py-[4rem] bg-[#f7f9fa] text-gray-800 max-w-[95rem] w-full  sm:px-6 lg:px-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-stretch -mx-4">
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow border-t-8 border-[#a435f0] sm:p-8 bg-gray-100">
                <div className="space-y-2">
                  <h4 className="text-[2.5rem] font-bold">Personal Plan</h4>
                  <span className="text-[1.2rem] font-semibold">
                    Starting at ₹850 per month
                  </span>
                  <p className="mt-3 leading-relaxed text-gray-800">
                    Billed monthly or annually. Cancel anytime.
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-gray-900 text-white"
                >
                  Try it Free{" "}
                </button>
                <ul className="flex-1 mb-6 text-gray-800">
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6  text-[#19a38c]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Access to 11,000+ top courses</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6  text-[#19a38c]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Certification prep</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6  text-[#19a38c]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Goal-focused recommendations</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6  text-[#19a38c]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>AI-powered coding exercises</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 border-t-8 border-[#5624d0] bg-gray-100">
                <div className="space-y-2">
                  <h4 className="text-[2.5rem] font-bold">Team Plan</h4>
                  <span className="text-[1.2rem] font-semibold">
                    ₹1,167 a month per user
                  </span>
                  <p className="mt-3 leading-relaxed text-gray-800">
                    Billed monthly or annually. Cancel anytime.
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-gray-900 text-white"
                >
                  Try it Free
                </button>
                <ul className="flex-1 mb-6 text-gray-800">
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6  text-[#19a38c]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Access to 11,000+ top courses</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6  text-[#19a38c]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Certification prep</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6  text-[#19a38c]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Goal-focused recommendations</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6  text-[#19a38c]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>AI-powered coding exercises</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6  text-[#19a38c]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Analytics and adoption reports</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 border-t-8 border-[#5624d0] bg-gray-100">
                <div className="space-y-2">
                  <h4 className="text-[2.5rem] font-bold">Enterprise Plan</h4>
                  <span className="text-[1.2rem] font-semibold">
                    Contact sales for pricing
                  </span>
                  <p className="mt-3 leading-relaxed text-gray-800">
                    Billed monthly or annually. Cancel anytime.
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-gray-900 text-white"
                >
                  Request Demo
                </button>
                <ul className="flex-1 mb-6 text-gray-800">
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6  text-[#19a38c]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Access to 11,000+ top courses</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6  text-[#19a38c]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Certification prep</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6  text-[#19a38c]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Goal-focused recommendations</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6  text-[#19a38c]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>AI-powered coding exercises</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6  text-[#19a38c]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Advanced analytics and insights</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6  text-[#19a38c]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      International course collection featuring 15 languages
                    </span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6  text-[#19a38c]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Hands-on tech training with add-ons</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6  text-[#19a38c]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Customizable content</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6  text-[#19a38c]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Strategic implementation services with add-on</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section  */}

      <section className="bg-white dark:bg-gray-900 max-w-[90rem] w-full  sm:px-6 lg:px-20">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-serif text-black font-bold">
            See what others are achieving through learning
          </h1>

          <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 border rounded-lg dark:border-gray-700">
              <img
                src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                className="h-5 w-5"
                alt=""
              />
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                “ Udemy was rated the most popular online course or
                certification program for learning how to code according to
                StackOverflow’s 2023 Developer survey.”.
              </p>

              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://s.udemycdn.com/home/ub-case-studies/Alvin_Lim.jpeg"
                  alt=""
                />

                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Robert
                  </h1>
                  <h1 className="text-sm text-gray-500 dark:text-white">
                    Partner Account Manager at Amazon{" "}
                  </h1>

                  <span className="text-sm text-gray-500">
                    CTO, Robert Consultency
                  </span>
                  <h1 className="text-sm text-gray-500 dark:text-white">
                    Dimentional{" "}
                  </h1>
                </div>
              </div>
              <br />
              <a className="text-base text-[#5624D0] font-bold hover:text-[#6849b4] pt-11 ">
                View Web Development Courses{" "}
                <i class="fa-solid fa-greater-than px-2 text-sm "></i>{" "}
              </a>
            </div>

            <div className="p-8 border rounded-lg dark:border-gray-700">
              <img
                src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                className="h-5 w-5"
                alt=""
              />

              <p className="leading-loose text-gray-500 dark:text-gray-400">
                Udemy gives you the ability to be persistent. I learned exactly
                what I needed to know in the real world. It helped me sell
                myself to get a new role.
              </p>

              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://s.udemycdn.com/home/ub-case-studies/Ian_Stevens.png"
                  alt=""
                />

                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Jeny Doe
                  </h1>
                  <span className="text-sm text-gray-500">
                    CEO, Jeny Consultency
                  </span>
                  <h1 className="text-sm text-gray-500 dark:text-white">
                    Partner Account Manager at Amazon{" "}
                  </h1>

                  <h1 className="text-sm text-gray-500 dark:text-white">
                    Dimentional{" "}
                  </h1>
                </div>
              </div>
              <br />
              <a className="text-base text-[#5624D0] font-bold hover:text-[#6849b4] pt-11 ">
                View Web Development Courses{" "}
                <i class="fa-solid fa-greater-than px-2 text-sm"></i>
              </a>
            </div>

            <div className="p-8 border rounded-lg dark:border-gray-700">
              <img
                src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                className="h-5 w-5"
                alt=""
              />

              <p className="leading-loose text-gray-500 dark:text-gray-400">
                Udemy gives you the ability to be persistent. I learned exactly
                what I needed to know in the real world. It helped me sell
                myself to get a new role.
              </p>

              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://s.udemycdn.com/home/ub-case-studies/William_A_Wachlin.jpeg"
                  alt=""
                />

                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Ema Watson{" "}
                  </h1>
                  <span className="text-sm text-gray-500">
                    Marketing Manager at Stech
                  </span>
                  <h1 className="text-sm text-gray-500 dark:text-white">
                    Dimentional{" "}
                  </h1>
                  <h1 className="text-sm text-gray-500 dark:text-white">
                    Partner Account Manager at Amazon{" "}
                  </h1>
                </div>
              </div>
              <br />
              <a className="text-base text-[#5624D0] font-bold hover:text-[#6849b4] pt-11 ">
                View Web Development Courses{" "}
                <i className="fa-solid fa-greater-than px-2 text-sm"></i>{" "}
              </a>
            </div>
          </section>
        </div>
      </section>

      {/* Top trends for the future of work section  */}

      <div className="container px-6 py-16 mx-auto max-w-[95rem] bg-[#f7f9fa] w-full  sm:px-6 lg:px-20">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-[30%]">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl font-serif">
                Top trends for the future of work
              </h1>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                GenAI and leadership are at the core of today's skills-based
                economy. Get the 2024 Global Learning & Skills Trends Report to
                learn more.
              </p>

              <button className="w-full px-7 py-2 mt-6 text-base font-bold tracking-wider text-black  transition-colors duration-300 transform bg-white lg:w-auto hover:bg-gray-200 border-2 border-black  focus:outline-none">
                Get the report <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-[80%]">
            <img
              className="w-full h-full lg:max-w-3xl"
              src="https://udemy-prod-static-assets.s3.us-east-1.amazonaws.com/lohp/ub-reports/v1/2024-ub-reports.png"
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>

      {/* Trending Now Section */}

      <section className=" dark:bg-gray-800 dark:text-gray-100 max-w-[95rem] w-full  sm:px-6 lg:px-20">
        <h1 className="font-serif font-bold text-4xl text-black pt-6">
          Trending Now{" "}
        </h1>
        <hr className="my-2 border-gray-200 md:my-4 dark:border-gray-700" />

        <div className="container grid justify-center gap-2 mx-auto lg:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col  py-6">
            <h2 className="mb-5 text-2xl font-bold sm:text-3xl title-font text-black ">
              ChatGPT is a top skill{" "}
            </h2>
            <a
              className="inline-flex mb-3 text-violet-600 items-center space-x-2 text-xl font-bold dark:text-violet-400 hover:text-[#401b9c] border-[#401b9c]"
              href="/components"
            >
              See ChatGPT courses{" "}
              <i class="fa-solid fa-greater-than text-sm pl-3 pt-2"></i>
            </a>
            <h2>2,766,170 learners </h2>
            <button className="border-2 py-3 my-7 text-black font-semibold text-lg font-serif hover:bg-gray-300">
              Show all trending skills{" "}
              <i class="fa-solid fa-arrow-up-right-dots pl-4"></i>
            </button>
          </div>

          <div className="flex flex-col px-8 py-6 lg:border-none xl:border-solid">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-100">
              Development{" "}
            </h2>
            <div className="py-2">
              <a
                className="inline-flex  text-violet-600 items-center space-x-2 text-lg font-bold dark:text-violet-400  hover:text-[#401b9c] hover:border-b border-[#401b9c]"
                href="/components"
              >
                Python{" "}
                <i class="fa-solid fa-greater-than text-sm pl-3 pt-2"></i>
              </a>
              <h2>12,981,020 learners</h2>
            </div>
            <div className="py-2">
              <a
                className="inline-flex  text-violet-600 items-center space-x-2 text-lg font-bold dark:text-violet-400  hover:text-[#401b9c] hover:border-b border-[#401b9c]"
                href="/components"
              >
                Web Development{" "}
                <i class="fa-solid fa-greater-than text-sm pl-3 pt-2"></i>
              </a>
              <h2>44,588,216 learners</h2>
            </div>
            <div className="py-2">
              <a
                className="inline-flex  text-violet-600 items-center space-x-2 text-lg font-bold dark:text-violet-400  hover:text-[#401b9c] hover:border-b border-[#401b9c]"
                href="/components"
              >
                Data Science{" "}
                <i class="fa-solid fa-greater-than text-sm pl-3 pt-2"></i>
              </a>
              <h2>7,871,426 learners</h2>
            </div>
          </div>

          <div className="flex flex-col px-8 py-6 lg:border-none xl:border-solid">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-100">
              Development{" "}
            </h2>
            <div className="py-2">
              <a
                className="inline-flex  text-violet-600 items-center space-x-2 text-lg font-bold dark:text-violet-400  hover:text-[#401b9c] hover:border-b border-[#401b9c]"
                href="/components"
              >
                Blender{" "}
                <i class="fa-solid fa-greater-than text-sm pl-3 pt-2"></i>
              </a>
              <h2>12,981,020 learners</h2>
            </div>
            <div className="py-2">
              <a
                className="inline-flex  text-violet-600 items-center space-x-2 text-lg font-bold dark:text-violet-400  hover:text-[#401b9c] hover:border-b border-[#401b9c]"
                href="/components"
              >
                Graphics Design{" "}
                <i class="fa-solid fa-greater-than text-sm pl-3 pt-2"></i>
              </a>
              <h2>44,588,216 learners</h2>
            </div>
            <div className="py-2">
              <a
                className="inline-flex  text-violet-600 items-center space-x-2 text-lg font-bold dark:text-violet-400  hover:text-[#401b9c] hover:border-b border-[#401b9c]"
                href="/components"
              >
                User Experience Design{" "}
                <i class="fa-solid fa-greater-than text-sm pl-3 pt-2"></i>
              </a>
              <h2>7,871,426 learners</h2>
            </div>
          </div>

          <div className="flex flex-col px-8 py-6 lg:border-none xl:border-solid">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-100">
              Development{" "}
            </h2>
            <div className="py-2">
              <a
                className="inline-flex  text-violet-600 items-center space-x-2 text-lg font-bold dark:text-violet-400  hover:text-[#401b9c] hover:border-b border-[#401b9c]"
                href="/components"
              >
                PMI Project Management Professional (PMP)
                <i class="fa-solid fa-greater-than text-sm pl-3 pt-2"></i>
              </a>
              <h2>12,981,020 learners</h2>
            </div>
            <div className="py-2">
              <a
                className="inline-flex  text-violet-600 items-center space-x-2 text-lg font-bold dark:text-violet-400  hover:text-[#401b9c] hover:border-b border-[#401b9c]"
                href="/components"
              >
                Microshoft Power BI{" "}
                <i class="fa-solid fa-greater-than text-sm pl-3 pt-2"></i>
              </a>
              <h2>44,588,216 learners</h2>
            </div>
            <div className="py-2">
              <a
                className="inline-flex  text-violet-600 items-center space-x-2 text-lg font-bold dark:text-violet-400  hover:text-[#401b9c] hover:border-b border-[#401b9c]"
                href="/components"
              >
                Project Management{" "}
                <i class="fa-solid fa-greater-than text-sm pl-3 pt-2"></i>
              </a>
              <h2>7,871,426 learners</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Learner Are Viewing  */}
       <section className="max-w-[95rem] w-full  sm:px-6 lg:px-20  py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-8">
              <div className=" grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="hs-tooltip [--placement:right]">
                  <div className="hs-tooltip-toggle   ">
                    <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        aria-label="Te nulla oportere reprimique his dolorum"
                      >
                        <img
                  alt=""
                  className="object-cover w-full h-full dark:bg-gray-500"
                  src="https://img-c.udemycdn.com/course/480x270/1921420_384a_14.jpg"
                />
                      </a>
                      <div className="flex flex-col  p-4">
                        <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                          The Complete 2024 Web Development Bootcamp
                        </h3>
                        <h4 className="text-[1rem] py-2">Dr. Angela yu </h4>

                        <div className="flex gap-2">
                          <h2 className="text-black font-bold">4.7</h2>
                          <div class="-ml-1 flex gap-0.5  ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 text-yellow-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 text-yellow-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 text-yellow-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 text-yellow-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 text-yellow-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                          <h3>(365.154)</h3>
                        </div>
                        <h4 className="font-bold text-gray-800 text-[1rem]">
                          ₹549 <del>₹3,099</del>
                        </h4>
                        <button className="bg-[#eceb98] text-black px-4 py-1 my-3 w-24">
                          Bestseller
                        </button>
                      </div>
                    </article>
                    <span
                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible "
                      role="tooltip"
                    >
                      <div className="flex flex-col bg-white border w-80 shadow-sm  p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <h3 className="text-base font-serif font-bold text-gray-800 dark:text-white">
                          The Web Developer Bootcamp 2024
                        </h3>
                        
                        <p className="mt-1 text-xs font-bold text-gray-500 dark:text-gray-500">
                         Update February 2024
                        </p>
                          
                        <p className="mt-1 text-xs font-medium  text-gray-500 dark:text-gray-500">
                      74 total hours - AI levels - Subtitles 
                        </p>
                        <p className="mt-2 text-base text-gray-900 dark:text-gray-600">
                        Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps
                        </p>
                      
                        <p className="mt-2 text-sm text-gray-900 dark:text-gray-600">
                        👍 Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.</p>
                        <p className="mt-2 text-sm text-gray-900 dark:text-gray-600">
                        👍  Learn the latest technologies, including Javascript, React, Node and even Web3 development. </p>
                          <p className="mt-2 text-sm text-gray-900 dark:text-gray-600">
                          👍   After the course you will be able to build ANY website you want.</p>
                          <button className="border font-serif font-bold text-base text-white bg-[#8710d8] w-52 py-2 px-7 mt-5 hover:bg-black ">
            Add to cart 
          </button>
                      </div>
                    </span>
                  </div>
                </div>

                <div className="hs-tooltip [--placement:right]">
                  <div className="hs-tooltip-toggle   ">
                  <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      aria-label="Te nulla oportere reprimique his dolorum"
                    >
                      <img
                  alt=""
                  className="object-cover w-full h-full dark:bg-gray-500"
                  src="https://img-c.udemycdn.com/course/480x270/3142166_a637_3.jpg"
                />
                    </a>
                    <div className="flex flex-col  p-4">
                      <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                        Practical Web Developement 22 Courses in 1{" "}
                      </h3>
                      <h4 className="text-[1rem] py-2">
                        Creative Online School{" "}
                      </h4>

                      <div className="flex gap-2">
                        <h2 className="text-black font-bold">4.7</h2>
                        <div class="-ml-1 flex gap-0.5  ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <h3>(365.154)</h3>
                      </div>
                      <h4 className="font-bold text-gray-800 text-[1rem]">
                        ₹549 <del>₹3,099</del>
                      </h4>
                    </div>
                  </article>
                        <span
                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible "
                      role="tooltip"
                    >
                      <div className="flex flex-col bg-white border w-80 shadow-sm  p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <h3 className="text-base font-serif font-bold text-gray-800 dark:text-white">
                          The Web Developer Bootcamp 2024
                        </h3>
                        
                        <p className="mt-1 text-xs font-bold text-gray-500 dark:text-gray-500">
                         Update February 2024
                        </p>
                          
                        <p className="mt-1 text-xs font-medium  text-gray-500 dark:text-gray-500">
                      74 total hours - AI levels - Subtitles 
                        </p>
                        <p className="mt-2 text-base text-gray-900 dark:text-gray-600">
                        Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps
                        </p>
                      
                        <p className="mt-2 text-sm text-gray-900 dark:text-gray-600">
                        👍 Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.</p>
                        <p className="mt-2 text-sm text-gray-900 dark:text-gray-600">
                        👍  Learn the latest technologies, including Javascript, React, Node and even Web3 development. </p>
                          <p className="mt-2 text-sm text-gray-900 dark:text-gray-600">
                          👍   After the course you will be able to build ANY website you want.</p>
                          <button className="border font-serif font-bold text-base text-white bg-[#8710d8] w-52 py-2 px-7 mt-5 hover:bg-black ">
            Add to cart 
          </button>
                      </div>
                    </span>
                  </div>
                </div>

                <div className="hs-tooltip [--placement:right]">
                  <div className="hs-tooltip-toggle   ">
                  <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      aria-label="Te nulla oportere reprimique his dolorum"
                    >
                    <img
                  alt=""
                  className="object-cover w-full h-full dark:bg-gray-500"
                  src="https://img-c.udemycdn.com/course/480x270/2776760_f176_10.jpg"
                />
                    </a>
                    <div className="flex flex-col  p-4">
                      <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                        The Web Development Bootcamp 2024{" "}
                      </h3>
                      <h4 className="text-[1rem] py-2">Colt Steele </h4>

                      <div className="flex gap-2">
                        <h2 className="text-black font-bold">4.7</h2>
                        <div class="-ml-1 flex gap-0.5  ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <h3>(365.154)</h3>
                      </div>
                      <h4 className="font-bold text-gray-800 text-[1rem]">
                        ₹549 <del>₹3,099</del>
                      </h4>
                    </div>
                  </article>
                       <span
                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible "
                      role="tooltip"
                    >
                      <div className="flex flex-col bg-white border w-80 shadow-sm  p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <h3 className="text-base font-serif font-bold text-gray-800 dark:text-white">
                          The Web Developer Bootcamp 2024
                        </h3>
                        
                        <p className="mt-1 text-xs font-bold text-gray-500 dark:text-gray-500">
                         Update February 2024
                        </p>
                          
                        <p className="mt-1 text-xs font-medium  text-gray-500 dark:text-gray-500">
                      74 total hours - AI levels - Subtitles 
                        </p>
                        <p className="mt-2 text-base text-gray-900 dark:text-gray-600">
                        Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps
                        </p>
                      
                        <p className="mt-2 text-sm text-gray-900 dark:text-gray-600">
                        👍 Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.</p>
                        <p className="mt-2 text-sm text-gray-900 dark:text-gray-600">
                        👍  Learn the latest technologies, including Javascript, React, Node and even Web3 development. </p>
                          <p className="mt-2 text-sm text-gray-900 dark:text-gray-600">
                          👍   After the course you will be able to build ANY website you want.</p>
                          <button className="border font-serif font-bold text-base text-white bg-[#8710d8] w-52 py-2 px-7 mt-5 hover:bg-black ">
            Add to cart 
          </button>
                      </div>
                    </span>
                  </div>
                </div>

                <div className="hs-tooltip [--placement:right]">
                  <div className="hs-tooltip-toggle   ">
                  <article className="flex flex-col bg-white border rounded-sm shadow-sm dark:bg-gray-900">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      aria-label="Te nulla oportere reprimique his dolorum"
                    >
                     <img
                  alt=""
                  className="object-cover w-full h-full dark:bg-gray-500"
                  src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg"
                />
                    </a>
                    <div className="flex flex-col  p-4">
                      <h3 className="flex-1  text-base text-gray-900 font-bold leading-snug">
                        The Web Development Masterclass - Online Certification
                        Course
                      </h3>
                      <h4 className="text-[1rem] py-2">YouAccel Training </h4>

                      <div className="flex gap-2">
                        <h2 className="text-black font-bold">4.7</h2>
                        <div class="-ml-1 flex gap-0.5  ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <h3>(365.154)</h3>
                      </div>
                      <h4 className="font-bold text-gray-800 text-[1rem]">
                        ₹549 <del>₹3,099</del>
                      </h4>
                    </div>
                  </article>
                      <span
                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible "
                      role="tooltip"
                    >
                      <div className="flex flex-col bg-white border w-80 shadow-sm  p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <h3 className="text-base font-serif font-bold text-gray-800 dark:text-white">
                          The Web Developer Bootcamp 2024
                        </h3>
                        
                        <p className="mt-1 text-xs font-bold text-gray-500 dark:text-gray-500">
                         Update February 2024
                        </p>
                          
                        <p className="mt-1 text-xs font-medium  text-gray-500 dark:text-gray-500">
                      74 total hours - AI levels - Subtitles 
                        </p>
                        <p className="mt-2 text-base text-gray-900 dark:text-gray-600">
                        Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps
                        </p>
                      
                        <p className="mt-2 text-sm text-gray-900 dark:text-gray-600">
                        👍 Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.</p>
                        <p className="mt-2 text-sm text-gray-900 dark:text-gray-600">
                        👍  Learn the latest technologies, including Javascript, React, Node and even Web3 development. </p>
                          <p className="mt-2 text-sm text-gray-900 dark:text-gray-600">
                          👍   After the course you will be able to build ANY website you want.</p>
                          <button className="border font-serif font-bold text-base text-white bg-[#8710d8] w-52 py-2 px-7 mt-5 hover:bg-black ">
            Add to cart 
          </button>
                      </div>
                    </span>
                  </div>
                </div>


                

                <button className="border-2 py-3 shadow-md px-3 w-96 text-base text-black  font-serif font-bold hover:bg-[#dce2e6]">
                  Show all Web Development Courses{" "}
                </button>
              </div>
            </div>
          </section>

      {/* Booz Allen Hamilton Unlocks Section  */}

      <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row max-w-[95rem] bg-[#f7f9fa] w-full  sm:px-6 lg:px-20">
        {/*content - start*/}
        <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
          <img
            src="https://s.udemycdn.com/lohp/ub-case-studies/v1/logo-boozallenhamilton-2.svg"
            alt=""
            className="h-[40%] w-[60%]"
          />

          <h1 className="mb-8 text-4xl font-bold text-[#2d2f31] sm:text-2xl md:mb-12 md:text-4xl">
            Booz Allen Hamilton Unlocks Talent Retention and Productivity
            Through Upskilling
          </h1>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
            <div className="border-b-2 py-4 text-black ">
              <h2 className="text-3xl font-bold ">93%</h2>
              <h3>retention rate among participating employees</h3>
            </div>
            <div className="border-b-2 py-4 text-black ">
              <h2 className="text-3xl font-bold ">65%</h2>
              <h3>of learners noted a positive impact on their productivity</h3>
            </div>
          </div>
          <button className="border text-lg text-white bg-[#2d2f31] w-52 py-2 px-5 mt-5 hover:bg-black ">
            Read full story <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        {/*content - end*/}

        {/*image - start*/}
        <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
          <img
            src="https://s.udemycdn.com/lohp/ub-case-studies/v1/boozallenhamilton-1x.png"
            loading="lazy"
            alt="Photo by Fakurian Design"
            className="h-full w-full object-cover object-center"
          />
        </div>
        {/*image - end*/}
      </section>

      {/* Footer section  */}
      <footer className="bg-[#2d2f31] dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div className="md:flex md:-mx-3 md:items-center md:justify-between">
            <h1 className="text-xl font-semibold tracking-tight text-white  md:mx-3 xl:text-2xl dark:text-white">
              Top companies choose{" "}
              <span className="text-[#a435f0]"> Udemy Business</span> to build
              in-demand career skills.
            </h1>

            <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
              <section className="p-6 dark:bg-[#ffffff] dark:text-gray-800">
                <div className="container flex flex-wrap justify-center mx-auto dark:text-[#6a6f73]">
                  <div className="flex justify-center px-4 align-middle ">
                    <img
                      src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center px-4 align-middle ">
                    <img
                      src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center px-4 align-middle ">
                    <img
                      src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center px-4 align-middle ">
                    <img
                      src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center px-4 align-middle ">
                    <img
                      src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
                      alt=""
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Who We Are
                </a>
                <a
                  href="#"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Our Philosophy
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-white dark:text-white">
                Industries
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Retail & E-Commerce
                </a>
                <a
                  href="#"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Information Technology
                </a>
                <a
                  href="#"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Finance & Insurance
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-white dark:text-white">
                Services
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Translation
                </a>
                <a
                  href="#"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Proofreading & Editing
                </a>
                <a
                  href="#"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Content Creation
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-white dark:text-white">
                Contact Us
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  +880 768 473 4978
                </a>
                <a
                  href="#"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  info@merakiui.com
                </a>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

          <div className="flex flex-col items-center justify-between sm:flex-row">
            <a href="#">
              <img
                className="w-auto h-7"
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
                alt=""
              />
            </a>

            <p className="mt-4 text-sm text-white sm:mt-0 dark:text-gray-300">
              © Copyright 2021. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UdemyClone;
