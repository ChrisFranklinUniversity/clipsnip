import React from "react";
import ReactPlayer from "react-player";

const mockVideos = [
  {
    id: 1,
    title: "Clip: Funny Stream Moment",
    url: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace later
  },
  {
    id: 2,
    title: "Clip: Epic Snipe",
    url: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
  },
  {
    id: 3,
    title: "Clip: AI Generated Highlight",
    url: "https://www.w3schools.com/html/movie.mp4",
  },
];

const VideoFeed = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockVideos.map((clip) => (
        <div key={clip.id} className="bg-gray-800 p-4 rounded-xl shadow-lg">
          <h2 className="text-white text-lg mb-2">{clip.title}</h2>
          <ReactPlayer
            url={clip.url}
            controls
            width="100%"
            height="200px"
            className="rounded-lg overflow-hidden"
          />
        </div>
      ))}
    </div>
  );
};

export default VideoFeed;
