 import React, { useState } from "react";
// import { FaFacebook, FaInstagram, FaRegUser, FaWhatsapp } from "react-icons/fa";
// import { RiMenu3Fill } from "react-icons/ri";
// import { IoBagOutline } from "react-icons/io5";
// import { Link, useNavigate } from "react-router-dom";

// import logo from "../assets/img/Logo.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const closeModel = (e) => {
    if (e.target.classList.contains("model_main")) {
      setOpen(false);
    }
  };

  return (
    <>
      {/* Topbar */}
      <section className="bg-green-800 text-white p-2 text-2xl">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="flex items-center">
              <p className="text-sm font-medium">Call us: +91 1234567890</p>
            </div>
            <div className="flex items-center text-2xl">
              <a href="/" className="mr-4">
                <FaFacebook />
              </a>
              <a href="/" className="mr-4">
                <FaInstagram />
              </a>
              <a href="/">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Navbar  */}
      <section className="relative bg-white-100 border-b font-poppin shadow">
        <div className="container mx-auto">
          <nav className="flex justify-between">
            <div className="flex items-center justify-between w-full px-2 py-2 lg:px-2">
              <div className="flex items-center gap-5">
                <a href="/" className="text-2xl text-gray-700 ">
                  <img src={logo} alt="logo" className="w-14 h-14" />
                </a>
                <h1 className="text-base uppercase font-semibold">
                  Krishna Agri <br /> Biotech
                </h1>
              </div>
              <div className="flex items-center lg:hidden">
                <div className="uppercase px-2 text-2xl text-green-800 relative cursor-pointer lg:mt-0 ">
                  <Link to="/">
                    <FaRegUser />
                  </Link>
                </div>
                <div
                  className="uppercase px-5 text-2xl text-green-800  relative cursor-pointer lg:mt-0"
                  onClick={() => navigate("/cart")}
                >
                  <IoBagOutline />
                  <span className="absolute -top-2 right-2 text-[12px] bg-green-800 h-4 w-4 flex items-center justify-center m-0 rounded-full text-white">
                    5
                  </span>
                </div>

                <button
                  className="flex items-center px-2 py-2 text-2xl text-gray-800 rounded  hover:text-teal-800 hover:border-teal-300 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <RiMenu3Fill />
                </button>
              </div>
              <ul className="hidden font-medium lg:flex">
                <li className="mr-12">
                  <a
                    href="/shop"
                    className="text-gray-700 hover:text-gray-600 "
                  >
                    जैविक पोष्‍क तत्‍व{" "}
                  </a>
                </li>
                <li className="mr-12">
                  <a
                    href="/shop"
                    className="text-gray-700 hover:text-gray-600 "
                  >
                    कीटनाशक{" "}
                  </a>
                </li>
                <li className="mr-12">
                  <a
                    href="/shop"
                    className="text-gray-700 hover:text-gray-600 "
                  >
                    फफुद नाशक
                  </a>
                </li>
                <li className="mr-12">
                  <a
                    href="/about"
                    className="text-gray-700 hover:text-gray-600 "
                  >
                    जानकारी
                  </a>
                </li>
                <li className="mr-12">
                  <a
                    href="/contact"
                    className="text-gray-700 hover:text-gray-600 "
                  >
                    संपर्क करे
                  </a>
                </li>
              </ul>
              <div className="items-center hidden max-w-xs  pl-4 bg-white border-2 shadow rounded-lg lg:flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="mr-2 bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <input
                  type="text"
                  className="w-full py-2 pl-3  outline-0 border-0"
                  placeholder="Search..."
                />
                <div className="pr-4">
                  <select
                    name
                    id
                    className="pl-3 pr-4 border-0 border-l outline-0 border-gray-400 cursor-pointer "
                  >
                    <option value>All items</option>
                    <option value>Option 1</option>
                    <option value>Option 2</option>
                  </select>
                </div>
              </div>
              <div className="items-center justify-end hidden lg:flex ">
                <div className="uppercase px-2 text-2xl text-green-800 relative cursor-pointer lg:mt-0 mt-4">
                  <Link to="/admin/dashboardView">
                    <FaRegUser />
                  </Link>
                </div>
                <div className="uppercase px-2 text-2xl text-green-800  relative cursor-pointer lg:mt-0 mt-4">
                  <IoBagOutline />
                  <span className="absolute -top-2 right-2 text-[12px] bg-green-800 h-4 w-4 flex items-center justify-center m-0 rounded-full text-white">
                    5
                  </span>
                </div>
              </div>
            </div>
          </nav>
          {/* Mobile Sidebar */}
          <div
            className={`fixed inset-0 w-full bg-gray-800 opacity-25 lg:hidden dark:bg-gray-400 ${
              open
                ? "translate-x-0 ease-in-opacity-100"
                : "-translate-x-full ease-out opacity-0"
            }`}
          ></div>
          <div
            onClick={closeModel}
            className={`model_main absolute inset-0 z-10 h-screen p-3 text-gray-700 duration-500 transform shadow-md bg-teal-50 w-80 lg:hidden lg:transform-none lg:relative ${
              open
                ? "translate-x-0 ease-in-opacity-100"
                : "-translate-x-full ease-out opacity-0"
            }`}
          >
            <div className="flex justify-between">
              <a className="p-2 text-2xl font-bold" href="#">
                <img src={logo} alt="logo" className="w-16 h-16" />
              </a>
              <button
                className="p-2 rounded-md hover:text-teal-300 lg:hidden"
                onClick={() => setOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-x-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>

            <div className="flex items-center max-w-xs py-2 pl-4 bg-white rounded-lg mt-7">
              <input
                type="text"
                className="w-full py-2 pl-3 border-0"
                placeholder="Search..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="mr-2 bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
            <ul className="px-5 text-left mt-7 font-semibold">
              <li className="pb-3">
                <a
                  href="/shop"
                  className="text-base text-gray-700 hover:text-teal-400"
                >
                  जैविक पोष्‍क तत्‍व
                </a>
              </li>
              <li className="pb-3">
                <a
                  href="/shop"
                  className="text-base text-gray-700 hover:text-teal-400"
                >
                  कीटनाशक{" "}
                </a>
              </li>
              <li className="pb-3">
                <a
                  href="/shop"
                  className="text-base text-gray-700 hover:text-teal-400"
                >
                  फफुद नाशक{" "}
                </a>
              </li>
              <li className="pb-3">
                <a
                  href="/about"
                  className="text-base text-gray-700 hover:text-teal-400"
                >
                  जानकारी
                </a>
              </li>
              <li className="pb-3">
                <a
                  href="/contact"
                  className="text-base text-gray-700 hover:text-teal-400"
                >
                  संपर्क{" "}
                </a>
              </li>
            </ul>
            <div className="flex items-center text-2xl px-5 mt-7">
              <a href="/" className="mr-4">
                <FaFacebook />
              </a>
              <a href="/" className="mr-4">
                <FaInstagram />
              </a>
              <a href="/">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;