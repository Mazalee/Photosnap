import Link from "next/link";
import React from "react";

const Story = ({ dataImages }) => {
  return (
    <div className="stories-container">
      {dataImages.map(
        ({
          id,
          mobileSrc,
          tabletSrc,
          desktopSrc,
          alt,
          icon,
          header,
          button,
          paragraph,
        }) => {
          return (
            <div key={id} className="stories-pic-wrapper">
              <picture>
                {/* larger screens */}
                <source srcSet={desktopSrc} media="(min-width: 1024px)" />
                {/* tablet screen */}
                <source srcSet={tabletSrc} media="(min-width: 768px)" />
                {/* for default and mobile */}
                <img src={mobileSrc} alt={alt} className="hero-image" />
              </picture>
              <div className="stories-info" style={{ color: "#ffffff" }}>
                <h3>{header}</h3>
                <p className="author">{paragraph}</p>
                <div className="stories-underline"></div>
                <p className="stories-link">
                  <Link href="/stories">
                    <span>{button}</span> <span>{icon}</span>
                  </Link>
                </p>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Story;
