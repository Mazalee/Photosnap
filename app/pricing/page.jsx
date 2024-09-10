"use client";

import {
  featuresImageBtm,
  planPackages,
  pricingData,
  pricingInfo,
} from "@/components/imageData";
import Image from "next/image";
import "../../styles/SectionFeatures.css";
import "../../styles/Pricing.css";
import React, { useState } from "react";
import Pricing from "@/components/pricing/Pricing";

export const PricingPage = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleClick = () => {
    setIsMonthly((prev) => !prev);
  };

  return (
    <main>
      <div className="pricing">
        {pricingInfo.map(
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

        <div className="pricing-timing">
          <h5 className={isMonthly ? "dark-text" : "light-text"}>Monthly</h5>
          <div className="price-selection" onClick={handleClick}>
            <div
              className="selection-circle"
              style={{
                transform: isMonthly ? "translateX(0)" : "translateX(100%)",
              }}
            ></div>
          </div>
          <h5 className={!isMonthly ? "dark-text" : "light-text"}>Yearly</h5>
        </div>

        <div className="pricing-section">
          {pricingData.map(
            ({
              id,
              bgcolor,
              color,
              header,
              paragraph,
              button,
              price,
              time,
              bgcolor_btn,
              color_btn,
            }) => (
              <div
                key={id}
                className="price-section"
                style={{ backgroundColor: bgcolor, color: color }}
              >
                <h2>{header}</h2>
                <p>{paragraph}</p>
                <h1>${price}</h1>
                <h5>{time}</h5>
                <button
                  style={{ backgroundColor: bgcolor_btn, color: color_btn }}
                >
                  {button}
                </button>
              </div>
            )
          )}
        </div>

        <div className="pricing-layout">
          <h1 className="pricing-h1">the features</h1>
          <div className="underline-dark"></div>
          {planPackages.map((packagePlan) => {
            return <Pricing key={packagePlan.id} {...packagePlan} />;
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

export default PricingPage;
