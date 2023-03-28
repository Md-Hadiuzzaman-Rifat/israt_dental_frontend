import React from "react";
import "./Gallery.css";

import {
  big1,
  big2,
  big3,
  horizontal1,
  horizontal2,
  horizontal3,
  normal1,
  normal2,
  normal3,
  normal4,
  normal5,
  normal6,
  normal7,
  normal8,
  normal9,
  vertical1,
  vertical2,
  vertical3
} from "../../images/index";

const Gallery = () => {
  return (
    <div className="home">
      <div className="home-grid">
        <img className="normal" src={normal1} alt="" />
        <img className="big" src={big1} alt="" />
        <img className="normal" src={normal9} alt="" />
        <img className="normal" src={normal4} alt="" />
        <img className="normal" src={normal4} alt="" />
        <img className="horizontal" src={horizontal1} alt="" />
        <img className="big" src={big3} alt="" />
        <img className="vertical" src={vertical1} alt="" />
        <img className="normal" src={normal9} alt="" />
        <img className="normal" src={normal6} alt="" />
        <img className="normal" src={normal3} alt="" />
        <img className="vertical" src={vertical3} alt="" />
        <img className="normal" src={normal2} alt="" />
        <img className="big" src={big2} alt="" />
        <img className="normal" src={normal6} alt="" />
        <img className="normal" src={normal6} alt="" />
        <img className="normal" src={normal5} alt="" />
        <img className="vertical" src={vertical2} alt="" />
        <img className="normal" src={normal4} alt="" />
        <img className="normal" src={normal7} alt="" />
        <img className="normal" src={normal6} alt="" />
        <img className="normal" src={normal9} alt="" />
        <img className="normal" src={normal8} alt="" />
        <img className="horizontal" src={horizontal3} alt="" />
        <img className="horizontal" src={horizontal2} alt="" />
        <img className="normal" src={normal9} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
