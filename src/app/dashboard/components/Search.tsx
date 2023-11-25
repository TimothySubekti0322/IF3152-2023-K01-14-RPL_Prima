"use client";

import React, { FC, useState } from "react";

interface SearchProps {
  options: string[];
  rawData: any[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
}

const Search: FC<SearchProps> = ({
  options,
  rawData,
  setData,
  setTotalPages,
}) => {
  // Dropdown open-close state
  const [openDropdown, setOpenDropdown] = useState(false);

  // Selected option state
  const [selectedCategories, setSelectedCategories] =
    useState<string>("Categories");

  // Select option handler
  const selectOption = (option: string) => {
    setSelectedCategories(option);
    setOpenDropdown(false);
  };

  // Search input
  const [searchInput, setSearchInput] = useState<string>("");

  // Search handler
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  // Search submit handler
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedCategories !== "Categories" && searchInput !== "") {
      const filteredData = rawData.filter(
        (item) => item[selectedCategories] == searchInput
      );
      setData(filteredData);
      setTotalPages(Math.ceil(filteredData.length / 10));
    } else if (searchInput == "") {
      setData(rawData.slice(0, 10));
      setTotalPages(Math.ceil(rawData.length / 10));
    }
  };

  return (
    <div className="relative flex-grow">
      <div className="flex relative">
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          className="w-40 md:w-52 z-10 flex items-center justify-between px-4 text-sm md:text-base font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-blue-200 "
          type="button"
          onClick={() => setOpenDropdown(!openDropdown)}
        >
          <p className="flex-grow text-center">
            {camelCaseToTitle(selectedCategories)}
          </p>
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div
          id="dropdown"
          className={`z-10 ${
            !openDropdown && "hidden"
          } absolute top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-40`}
        >
          <ul
            className="py-2 text-sm text-gray-700 "
            aria-labelledby="dropdown-button"
          >
            {options.map((option, index) => (
              <li key={index}>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-4 md:py-3 font-semibold hover:bg-[#5E9AFF]"
                  onClick={() => selectOption(option)}
                >
                  {camelCaseToTitle(option)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block w-full z-20 text-sm md:text-base text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Data here"
            onChange={searchHandler}
          />
          <form onSubmit={submitHandler}>
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

function camelCaseToTitle(str: string): string {
  // Break the camelCase: insert a space before all caps
  let result = str.replace(/([A-Z])/g, " $1");

  // Capitalize the first letter of each word
  return result.replace(/\b\w/g, (char) => char.toUpperCase());
}

export default Search;
