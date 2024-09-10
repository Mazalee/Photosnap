import React from "react";
import "../../styles/Pricing.css";

const Pricing = ({ header, packages, availablePackages, icon }) => {
  return (
    <div className="pricing-content">
      <h2>{header}</h2>
      <ul className="pricing-packages">
        {packages.map((pkgs, index) => {
          if (availablePackages.includes(pkgs)) {
            return (
              <li key={index} className="available">
                <span>{pkgs}</span>
                <span>{icon}</span>
              </li>
            );
          }
          return (
            <li key={pkgs} className="unavailable">
              <span>{pkgs}</span>
            </li>
          );
        })}
      </ul>
      <div className="underline-light"></div>
    </div>
  );
};

export default Pricing;
