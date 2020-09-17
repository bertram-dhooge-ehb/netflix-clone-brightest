import React from "react";
import YouTube from "react-youtube";
import "./Details.css";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    paused: true,
  },
};


class Detail extends React.Component {
  render() {
    return(
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
                <div id="year" className="little"> {/* year */} 2001 </div>
                <div id="runtime" className="little"> {/*runtime*/} 152 min </div>
              <div id="title" className="big"> {/*Title */} Harry Potter and the pilospher's stone</div>
              <div id="plot" className="big">{/* plot */}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
              <button className="back">Go back</button>
        </div>
    )
  }
}

export default Detail;
