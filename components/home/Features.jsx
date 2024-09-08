import React from "react";
import { featuresImage } from "../imageData";
import Image from "next/image";
import "../../styles/Features.css";

const Features = () => {
  return (
    <div className="features-gallery">
      {featuresImage.map(({ id, src, alt, header, paragraph }) => (
        <div key={id} className="features-container">
          <Image
            src={src}
            alt={alt}
            className="features-image"
            width={72}
            height={72}
          />
          <div className="features-info">
            <h1>{header}</h1>
            <p>{paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
