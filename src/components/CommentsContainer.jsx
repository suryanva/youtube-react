import comments from "../utils/comments";

const Comment = ({ data }) => {
  const { author, avatar, content, replies } = data;
  return (
    <div>
      <div className="flex  shadow-sm bg-gray-100 rounded-md">
        <img className="w-12 h-12 p-2" src={avatar} alt="avatar" />
        <div className="px-3">
          <p className="font-bold">{author}</p>
          <p className="">{content}</p>
        </div>
      </div>
      <div>
        {replies && replies.length > 0 && (
          <div className="pl-5 border border-l-black">
            {replies.map((reply) => (
              <Comment key={reply.id} data={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 space-y-4">
      <h1 className="text-2xl font-bold">Comments </h1>
      {comments.map((comment) => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  );
};

export default CommentsContainer;
