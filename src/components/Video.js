import React from "react";
import "./Video.scss";
function Video() {
  
  let id = "BI-zphxC0HM";
  return (
    <div className="video">
      <iframe
        src={`https://www.youtube.com/watch?v=${id}`}
        title="video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;
