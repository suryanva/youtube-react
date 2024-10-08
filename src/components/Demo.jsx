import { useState } from "react";

const Demo = () => {
  const [text, setText] = useState("");
  const [isDark, setIsDark] = useState(true);

  const darkTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDark ? "bg-yellow-500 text-white" : "")
      }
    >
      <div>
        <input
          className="border border-black w-72 rounded-md p-2"
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="p-1 border border-blue-400 bg-indigo-400"
          onClick={() => darkTheme()}
        >
          Click
        </button>
      </div>
    </div>
  );
};

export default Demo;
