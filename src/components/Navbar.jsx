import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Education", link: "#education" },
    { id: 4, name: "Works", link: "#work" },
    { id: 5, name: "Skill", link: "#skill" },
    { id: 6, name: "Contact", link: "#contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0b2a3b] flex justify-between items-center px-6 py-4 md:px-14 md:py-6 z-[100]">
      <a href="/" className="relative text-xl font-semibold text-white">
        Portfolio
      </a>
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        )}
      </button>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-full h-screen bg-[#0b2a3b] md:bg-transparent md:relative md:h-auto md:flex md:items-center md:w-auto`}
      >
        <button
          className="absolute top-4 right-4 md:hidden text-white"
          onClick={() => setIsOpen(false)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-end w-full h-full">
          {navItems.map((item) => (
            <a
              href={item.link}
              className="block md:inline-block text-xl font-semibold ml-0 md:ml-9 mt-8 md:mt-0 text-white transition duration-300 hover:text-sky-500"
              key={item.id}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
