import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CloseMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParam] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CloseMenu());
  }, []);

  return (
    <div className="px-5 flex w-full">
      <div>
        <iframe
          width="1200"
          height="800"
          src={"https://www.youtube.com/embed/" + searchParam.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-md "
        ></iframe>
        <CommentsContainer />
      </div>
      <LiveChat />
    </div>
  );
};

export default WatchPage;
