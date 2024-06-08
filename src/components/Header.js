import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Braces, Cross, CrossIcon, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="py-5 px-4 md:px-20 shadow-md">
        <div className="flex flex-row gap-2 justify-between">
          <div className="">
            <Link to="/">
              <h1 className="hidden md:block text-xl md:text-2xl font-bold hover:text-blue-500">
                Code Column
              </h1>
              <div className="md:hidden hover:text-blue-500">
                <Braces size={28} />
              </div>
            </Link>
          </div>
          <div className="flex md:gap-5 gap-3 items-center">
            <Link to="/book-mentor">
              <h1 className="text-lg text-white rounded-md text-center px-4  py-1 bg-blue-500 hover:bg-blue-700">
                Book 1:1 Mentorship
              </h1>
            </Link>
            <div className="cursor-pointer hover:scale-110">
              {isMenuOpen ? (
                <X size={28} onClick={handleMenuClick} />
              ) : (
                <Menu size={28} onClick={handleMenuClick} />
              )}
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <>
            <div className="flex absolute text-white bg-blue-500 p-7 rounded-md right-0 md:mx-20 mx-4 mt-5">
              <ul className="flex flex-col gap-4 ">
                <Link to="/">Resource Hub</Link>
                <Link to="/">Interview Ques.</Link>
                <Link to="/">Courses</Link>
                <Link to="/">Join the Community</Link>
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
}