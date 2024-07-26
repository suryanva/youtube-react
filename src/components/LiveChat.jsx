import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("API-POLLING");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const sendMessage = () => {
    if (liveMessage.trim() !== "") {
      dispatch(
        addMessage({
          name: "Surya",
          message: liveMessage,
        })
      );
      setLiveMessage("");
    }
  };

  const EnterKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };
  return (
    <div className="ml-2 w-full h-[600px] p-2 border border-black bg-slate-100 rounded-lg  ">
      <div className="flex shadow-md rounded w-full h-16  top-0">
        <h1 className="font-bold text-xl  flex items-center ml-4 ">
          Live Chat
        </h1>
      </div>
      <div className="flex flex-col-reverse overflow-y-scroll h-[calc(100%-4rem-4rem)]">
        {chatMessages.map((data, index) => (
          <ChatMessage key={index} name={data.name} message={data.message} />
        ))}
      </div>
      <div className="flex items-center border-t border-black mt-2 p-2">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-300 rounded mr-2"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          onKeyDown={EnterKeyDown}
          placeholder="Type your message..."
        />
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
