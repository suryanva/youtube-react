const ChatMessage = ({ message, name }) => {
  return (
    <div>
      <div className="flex items-center shadow-sm p-2 bg-gray-200">
        <img
          className="w-8 h-8 rounded-md"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="logo"
        />
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
