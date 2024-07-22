import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between items-center p-5 m-2 shadow-md">
      <div className="flex space-x-8">
        <img
          className=" h-8 cursor-pointer"
          src="src/assets/burger-bar.png"
          alt="hamburger"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img
            className=" h-8"
            src="src/assets/youtube-icon.png"
            alt="youtube-logo"
          />
        </a>
      </div>
      <div className="flex w-1/4 ">
        <input
          type="text"
          name=""
          id=""
          className="border  border-gray-400 w-full rounded-l-full"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="flex space-x-8">
        <img className=" h-8" src="src/assets/bell.png" alt="notification" />
        <img className=" h-8" src="src/assets/user.png" alt="user" />
      </div>
    </div>
  );
};

export default Head;
