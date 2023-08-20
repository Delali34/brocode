import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlayPause = () => {
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleProgress = () => {
    const currentProgress =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(currentProgress);
  };

  const handleEnded = () => {
    setPlaying(false);
    setProgress(0);
  };

  return (
    <div className="video-player">
      <video
        loop
        ref={videoRef}
        onTimeUpdate={handleProgress}
        onEnded={handleEnded}
        src={src}
      />
      <div className="controls">
        <button onClick={togglePlayPause}>
          {playing ? (
            <BsPauseFill className="text-xl" />
          ) : (
            <BsFillPlayFill className="text-xl" />
          )}
        </button>
        <div className="progress">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
