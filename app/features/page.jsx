import SectionFeatures from "@/components/features/SectionFeatures";
import {
  featuresData,
  featuresImageBtm,
  featuresInfo,
} from "@/components/imageData";
import Image from "next/image";
import "../../styles/SectionFeatures.css";

export const FeaturesPage = () => {
  return (
    <main>
      <div className="features">
        {featuresInfo.map(
          ({ id, src, alt, header, paragraph, bgcolor, color }) => (
            <div key={id} className="features-header">
              <Image
                src={src}
                alt={alt}
                width={375}
                height={294}
                style={{ width: "100vw", height: "auto" }}
                object-fit="cover"
              />
              <div
                className="features-header-info"
                style={{ backgroundColor: bgcolor, color: color }}
              >
                <h1>{header}</h1>
                <p>{paragraph}</p>
              </div>
            </div>
          )
        )}

        <div className="features-layout">
          {featuresData.map((data) => {
            return <SectionFeatures key={data.id} {...data} />;
          })}
        </div>

        <div className="features-bottom">
          {featuresImageBtm.map(({ id, src, alt, header, button, icon }) => (
            <div key={id} className="features-bottom-details">
              <Image
                src={src}
                alt={alt}
                width={375}
                height={288}
                style={{ width: "100vw", height: "auto" }}
                object-fit="cover"
              />

              <div
                className="features-bottom-info"
                style={{ color: "#ffffff" }}
              >
                <h1>{header}</h1>
                <h2 className="features-bottom-direct">
                  {button}
                  <span>{icon}</span>
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FeaturesPage;
