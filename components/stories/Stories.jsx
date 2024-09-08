import Image from "next/image";
import React from "react";

const Stories = ({ src, alt, date, header, paragraph, icon, button }) => {
  return (
    <div className="stories-data">
      <Image
        src={src}
        alt={alt}
        width={375}
        height={375}
        style={{ width: "100vw", height: "auto" }}
        object-fit="cover"
      />

      <div className="stories-data-info" style={{ color: "#ffffff" }}>
        <h3>{date}</h3>
        <h1>{header}</h1>
        <p>{paragraph}</p>
        <div className="underline"></div>
        <h2 className="stories-data-direct">
          {button}
          <span>{icon}</span>
        </h2>
      </div>
    </div>
  );
};

export default Stories;
