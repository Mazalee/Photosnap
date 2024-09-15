"use client";
import Story from "../stories/story";
import React from "react";
import { dataImages, imageData } from "../imageData";
import "../../styles/Hero.css";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="image-gal">
      {imageData.map(
        ({
          id,

          mobileSrc,
          desktopSrc,
          tabletSrc,
          alt,
          icon,
          bgcolor,
          header,
          button,
          paragraph,
          color,
        }) => (
          <div
            key={id}
            className="image-cont"
            style={{ backgroundColor: id === 1 ? "black" : "" }}
          >
            <picture className={`${id % 2 !== 0 ? "picture-2" : ""}`}>
              {/* larger screens */}
              <source srcSet={desktopSrc} media="(min-width: 1024px)" />
              {/* tablet screen */}
              <source srcSet={tabletSrc} media="(min-width: 768px)" />
              {/* for default and mobile */}
              <img src={mobileSrc} alt={alt} className="hero-image" />
            </picture>
            <div className={`${id % 2 !== 0 ? "image-inf-2" : "image-inf"}`}>
              <h1 style={{ color: id === 1 ? "white" : "" }}>{header}</h1>
              <p>{paragraph}</p>
              <button
                className="image-btn"
                style={{ backgroundColor: bgcolor, color: color }}
              >
                <span>{button}</span>
                <span>{icon}</span>
              </button>
            </div>
          </div>
        )
      )}
      <Story dataImages={dataImages} />
    </div>
  );
};

export default Hero;
