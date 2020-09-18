import React from "react";
import YouTube from "react-youtube";
import "./Detail.css";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    paused: true,
  },
};

function Detail({ movieId }) {
  return (
    // div waar alles inzit
    <div className="esset">
      {/* De trailer */}
      <YouTube
        videoId="VyHV0BRtdxo"
        opts={opts}
        onReady={(event) => {
          event.target.pauseVideo();
        }}
      ></YouTube>
      {/* de details zelf*/}
      <div className="details">
        <div id="year" className="little"> {this.props.movie.release_date.slice(0,4)} </div>
        <div id="runtime" className="little"> {/*runtime*/}  </div>
        <div id="title" className="big"> {this.props.movie.title} Harry Potter and the pilospher's stone</div>
        <div id="plot" className="big">{this.props.movie.overview}</div>
      </div>
      <button className="back">Go back</button>
    </div>
  );
}

export default Detail;
