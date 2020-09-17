import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import YouTube from "react-youtube";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    paused: true,
  },
};

class Gallery extends React.Component {
  items = [
    <YouTube
      videoId="LVyOWbrxjHM"
      opts={opts}
      onReady={(event) => {
        console.log(event.target);
        event.target.pauseVideo();
      }}
    ></YouTube>,
    <YouTube
      videoId="qWGiPq14T4Y"
      opts={opts}
      onReady={(event) => {
        event.target.pauseVideo();
      }}
    ></YouTube>,
    <YouTube
      videoId="RaeLAwacDG4"
      opts={opts}
      onStateChange={(event) => {
        opts.paused ? event.target.pauseVideo() : event.target.playVideo();
      }}
    ></YouTube>,
  ];

  state = {
    currentIndex: 0,
    responsive: { 1024: { items: 3 } },
    galleryItems: this.galleryItems(),
  };

  slideTo = (i) => this.setState({ currentIndex: i });

  onSlideChanged = (e) => {
    this.setState({ currentIndex: e.item });
    for (let index = 0; index < this.items.length; index++) {
      const vid = this.items[index];
      if (index === e.item) {
        vid.props.opts.paused = false;
      } else {
        vid.props.opts.paused = true;
      }
    }
  };

  slideNext = () =>
    this.setState({ currentIndex: (this.state.currentIndex + 1) % 3 });

  slidePrev = () =>
    this.setState({ currentIndex: (this.state.currentIndex - 1) % 3 });

  thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}>* </span>;

  galleryItems() {
    return this.items.map((i) => <h2 key={i}> {i}</h2>);
  }

  render() {
    const { galleryItems, responsive, currentIndex } = this.state;
    return (
      <div>
        <AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          items={galleryItems}
          responsive={responsive}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
        />

        <ul>{this.items.map(this.thumbItem)}</ul>
        <button onClick={() => this.slidePrev()}>Prev button</button>
        <button onClick={() => this.slideNext()}>Next button</button>
      </div>
    );
  }

  /* return (
    <div>
      <AliceCarousel
        onSlideChanged={(e) => {
          console.log(e);
        }}
      >
        <YouTube
          videoId="LVyOWbrxjHM"
          opts={opts}
          onReady={(event) => {
            event.target.pauseVideo();
          }}
        ></YouTube>
        <YouTube
          videoId="qWGiPq14T4Y"
          opts={opts}
          onReady={(event) => {
            event.target.pauseVideo();
          }}
        ></YouTube>
        <YouTube
          videoId="RaeLAwacDG4"
          opts={opts}
          onReady={(event) => {
            event.target.pauseVideo();
          }}
        ></YouTube>
      </AliceCarousel>
    </div>
  ); */
}

export default Gallery;
