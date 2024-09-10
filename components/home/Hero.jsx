import Image from "next/image";
import React from "react";
import { dataImages, imageData } from "../imageData";
import "../../styles/Hero.css";

const Hero = () => {
  return (
    <div className="image-gallery">
      {imageData.map(
        ({ id, src, alt, icon, bgcolor, header, button, paragraph, color }) => (
          <div key={id} className="image-container">
            <Image
              src={src}
              alt={alt}
              layout="responsive"
              width={100}
              height={78}
              object-fit="cover"
              className="responsive-image"
              priority
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
        )
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
