import { storiesData, storiesImage } from "@/components/imageData";
import Stories from "@/components/stories/Stories";
import Image from "next/image";
import "../../styles/Stories.css";

const StoriesPage = () => {
  return (
    <main>
      <div className="stories">
        {storiesImage.map(
          ({
            id,
            src,
            alt,
            button,
            icon,
            header,
            author,
            bgcolor,
            color,
            detail,
            paragraph,
          }) => (
            <div key={id} className="stories-header">
              <Image
                src={src}
                alt={alt}
                width={375}
                height={317}
                style={{ width: "100vw", height: "auto" }}
                object-fit="cover"
              />
              <div
                className="stories-header-info"
                style={{ backgroundColor: bgcolor, color: color }}
              >
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

        <div className="stories-layout">
          {storiesData.map((data) => {
            return <Stories key={data.id} {...data} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default StoriesPage;
