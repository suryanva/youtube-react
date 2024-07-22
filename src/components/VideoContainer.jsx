import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);
  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_API);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      console.log(json);
      setVideoList(json.items);
    } catch (error) {
      console.error("Failed to fetch videos: ", error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap ">
      {videoList.map((item) => (
        <VideoCard key={item.id} info={item} />
      ))}
    </div>
  );
};

export default VideoContainer;
