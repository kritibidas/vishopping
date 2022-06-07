import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

const ReactCustomArrow = () => {
  const renderArrows = () => {
    return (
      <div>
        <button onClick={() => this.slickPrev()}>next</button>
        <button onClick={() => this.slickNext()}>prev</button>
      </div>
    );
  };
  return (
    <>
    <div className="App">
      <div style={{ position: "relative", marginTop: "2rem" }}>
        {renderArrows()}
        <Slider
          ref={(c) => (slide = c)}
          dots={true}
          arrows={false}
          centerMode={true}
          slidesToShow={2}
        >
          <a href="/s">
            <img src="http://placekitten.com/g/400/200" alt="cat" />
          </a>
          <a href="/s">
            <img src="http://placekitten.com/400/200" alt="cat" />
          </a>
          <a href="/s">
            <img src="http://placekitten.com/g/400/200" alt="cat" />
          </a>
          <a href="/s">
            <img src="http://placekitten.com/400/200" alt="cat" />
          </a>
        </Slider>
        
      </div>
    </div>
    
    </>
  );
};

export default ReactCustomArrow
