import { videos } from "../../pages/home/Home";
import Comments from "./videoComments/Comments";
import VideoInfos from "./videoInfos/VideoInfos";
import VideoPlayer from "./videoPlayer/VideoPlayer";
import { ReactComponent as Verified } from "../../assets/verified.svg";
import { Link } from "react-router-dom";

const VideoPreview = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 ml-[5%] mt-10">
      <div className="col-span-2 ">
        <div className="video-container">
          <VideoPlayer />
        </div>
        <div className="video-infos-container">
          <VideoInfos />
        </div>
      </div>
      <div className="recommendations-container flex flex-col gap-5 row-span-2 ml-[10%]">
        <div className="text-lg font-bold tracking-wider self-start">
          Recommendations
        </div>
        <div className="flex flex-col gap-6">
          {videos.map((video) => (
            <Link to={"/videos?id=8923hkfk1237"}>
              <div className="">
                <img
                  src={`./images/${video.thumbnailImage}`}
                  alt="video thumbnail"
                  className="rounded-[4px] h-[9rem] w-[18rem] "
                  loading="lazy"
                />
              </div>
              <div className="video-infos">
                <ul className="flex flex-col">
                  <li className="text-md font-medium">{video.title}</li>
                  <li className="flex gap-2 items-center text-sm text-pink-800 font-medium">
                    {video.channel}
                    <Verified className="fill-black	" />
                  </li>
                  <li className="text-sm">{video.views} views</li>
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="comments-container col-span-2 ">
        <Comments
          commentsUrl="http://localhost:3004/comments"
          currentUserId="1"
        />
      </div>
    </div>
  );
};

export default VideoPreview;
