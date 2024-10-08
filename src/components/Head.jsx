import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState, useCallback } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const getSearchSuggestion = useCallback(async () => {
    if (!searchQuery) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      console.log(json);
      setSuggestions(json[1]);
      setShowSuggestions(true);
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      console.error("Failed to fetch search suggestions:", error);
    }
  }, [searchQuery]);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex justify-between items-center p-5 m-2 shadow-md">
      <div className="flex space-x-8">
        <img
          className="h-8 cursor-pointer"
          src="/burger-bar.png"
          alt="hamburger"
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img className="h-8" src="/youtube-icon.png" alt="youtube-logo" />
        </a>
      </div>
      <div className="relative flex w-1/4">
        <input
          type="text"
          className="border border-gray-400 w-full rounded-l-full p-x-4"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} // To allow click event to register
          onFocus={() => searchQuery && setShowSuggestions(true)}
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
        {showSuggestions && (
          <ul className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-b-lg shadow-lg max-h-60 overflow-y-auto z-10">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                🔍 {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex space-x-8">
        <img className="h-8" src="/bell.png" alt="notification" />
        <img className="h-8" src="/user.png" alt="user" />
      </div>
    </div>
  );
};

export default Head;
