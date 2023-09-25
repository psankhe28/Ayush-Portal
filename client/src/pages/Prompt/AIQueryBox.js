import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";

const AIQueryBox = () => {
  const [inputText, setInputText] = useState("");
  const [searched, setSearched] = useState(false);
  const updateSearched = (newValue) => {
    setSearched(newValue);
  };
  const [aiResponse, setAiResponse] = useState("");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const onClearButtonClick = () => {
    setInputText("");
  };

  const handleSubmit = async (e) => {
    updateSearched(true);
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/ai", {
        question: inputText,
      });

      console.log("API Response:", response.data);
      if (response.data) {
        setAiResponse(response.data.message);
      }
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-red-950 to-blue-950 py-8 pt-16">
      <div className="container mx-auto text-center">
        <div className="max-w-xl mx-auto">
          <form>
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative flex gap-2 items-center">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
              </div>
              <textarea
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={`Are you a ${
                  userInfo?.userType === "investor"
                    ? "investor"
                    : userInfo?.userType === "startup"
                    ? "startup"
                    : "mentor"
                } and our AI will take care of the rest!`}
                rows="4"
                required
                value={inputText}
                onChange={handleInputChange}
              />

              <button
                onClick={handleSubmit}
                type="submit"
                className="right-2.5 text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ml-2 mb-auto mt-auto dark:bg-slate-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                SEARCH
              </button>

              <button
                onClick={onClearButtonClick}
                className="bg-red-500 text-white rounded-md px-4 py-2 text-sm"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
        {searched ? (
          <div className="bg-gray-100 ">
            <Card text={aiResponse} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default AIQueryBox;