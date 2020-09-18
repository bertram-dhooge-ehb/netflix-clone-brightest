import React from "react";
import "./Detail.css";

function Detail(props) {
  console.log(props.movie);
  let title = props.movie?.name ? props.movie.name : props.movie.title;
  let date = props.movie?.first_air_date ? props.movie.first_air_date : props.movie.release_date;
  return (
    // div waar alles inzit
    <div className="esset">
      {/* De trailer */}
      {/* de details zelf*/}
      <div className="details">
        <div id="year" className="little"> {date.slice(0,4)} </div>
        <div id="runtime" className="little"> {/*runtime*/}  </div>
        <div id="title" className="big"> {title} </div>
        <div id="plot" className="big">{props.movie.overview}</div>
      </div>
    </div>
  );
}


export default Detail;
