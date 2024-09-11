import Image from "next/image";
import React from "react";

const SectionFeatures = ({
  src,
  alt,
  date,
  header,
  paragraph,
  icon,
  button,
}) => {
  return (
    <div className="features-data">
      <Image src={src} alt={alt} width={72} height={72} />

      <div className="features-data-info">
        <h1>{header}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default SectionFeatures;
