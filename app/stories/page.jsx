import { storiesData, storiesImage } from "@/components/imageData";
import Stories from "@/components/stories/Stories";
import Story from "@/components/stories/story";
import Image from "next/image";
import "../../styles/Stories.css";
import "../../styles/Hero.css";

const StoriesPage = () => {
  return (
    <main>
      <div className="stories">
        {storiesImage.map(
          ({
            id,
            mobileSrc,
            tabletSrc,
            desktopSrc,
            // src,
            alt,
            button,
            icon,
            header,
            author,
            bgcolor,

            detail,
            paragraph,
          }) => (
            <div key={id} className="stories-header">
              <picture>
                {/* larger screens */}
                <source srcSet={desktopSrc} media="(min-width: 1024px)" />
                {/* tablet screen */}
                <source srcSet={tabletSrc} media="(min-width: 768px)" />
                {/* for default and mobile */}
                <img src={mobileSrc} alt={alt} className="hero-image" />
              </picture>

              <div className="stories-header-info">
                <h3>{detail}</h3>
                <h1>{header}</h1>
                <h4>{author}</h4>
                <p>{paragraph}</p>
                <h2 className="stories-direct">
                  {button}
                  <span>{icon}</span>
                </h2>
              </div>
            </div>
          )
        )}
        <Story dataImages={storiesData} />
      </div>
    </main>
  );
};

export default StoriesPage;
