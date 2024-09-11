"use client";

import Image from "next/image";
import React from "react";
import { dataImages, imageData } from "../imageData";
import "../../styles/Hero.css";
import useWindowSize from "../hooks/useWindowSize";

const Hero = () => {
  const size = useWindowSize();

  return (
    <div className="image-gallery">
      {imageData.map(
        ({
          id,
          mobileSrc,
          tabletSrc,
          desktopSrc,
          alt,
          icon,
          bgcolor,
          header,
          button,
          paragraph,
          color,
        }) => {
          const imageSrc =
            size.width >= 1440
              ? desktopSrc
              : size.width >= 768
              ? tabletSrc
              : mobileSrc;
          return (
            <div key={id} className="image-container">
              <Image
                src={imageSrc}
                alt={alt}
                layout="responsive"
                width={100}
                height={78}
                object-fit="cover"
                className="responsive-image"
                priority
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                srcSet={`
                  ${mobileSrc} 767w,
                  ${tabletSrc} 1024w,
                  ${desktopSrc} 1440w
                `}
              />
              <div
                className="image-info"
                style={{ backgroundColor: bgcolor, color: color }}
              >
                <h1>{header}</h1>
                <p>{paragraph}</p>
                <button
                  className="image-btn"
                  style={{ backgroundColor: bgcolor, color: color }}
                >
                  {button}
                  <span>{icon}</span>
                </button>
              </div>
            </div>
          );
        }
      )}

      {dataImages.map(({ id, src, alt, icon, header, button, paragraph }) => (
        <div key={id} className="image-containerII">
          <Image
            src={src}
            alt={alt}
            width={100}
            height={78}
            layout="responsive"
            object-fit="cover"
            className="responsive-inage"
            priority
          />
          <div className="image-infoII" style={{ color: "#ffffff" }}>
            <h1>{header}</h1>
            <p>{paragraph}</p>
            <div className="underlineI"></div>
            <h2 className="image-direct">
              {button}
              <span>{icon}</span>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
