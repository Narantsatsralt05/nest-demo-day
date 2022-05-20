import React from "react";
import { NestLogo, HopLogo } from "../assets";
import LazyLoad from "react-lazyload";
import urls from "../hop1.json";

export const HopLevelOne = () => (
  <div className="App">
    <header className="App-header">
      <div className="Nest-logo-container">
        <NestLogo />
      </div>
      <h1>Demo Day</h1>
      <div>
        <div className="Logo-container">
          <HopLogo />
          <h1> Level 1</h1>
        </div>
        <div className="flex-container">
          {urls.map(({ url, imageUrl }, index) => (
            <div className="Thumbnail-container">
              <a key={index} rel="noreferrer" target={"_blank"} href={url}>
                <img
                  key={index}
                  className="Thumbnail"
                  src={imageUrl}
                  alt="ZorigFoundation"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </header>
  </div>
);
