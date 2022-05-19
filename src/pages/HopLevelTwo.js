import React from "react";
import { NestLogo, HopLogo } from "../assets";
import LazyLoad from "react-lazyload";
import urls from "../hop2.json";

export const HopLevelTwo = () => (
  <div className="App">
    <header className="App-header">
      <div className="Nest-logo-container">
        <NestLogo />
      </div>
      <h1>Demo Day</h1>
      <div>
        <div className="Logo-container">
          <HopLogo />
          <h1> Level 2</h1>
        </div>
        <div className="flex-container">
          {urls.map(({ url, imageUrl }, index) => (
            <a key={index} rel="noreferrer" target={"_blank"} href={url}>
              <LazyLoad key={index}>
                <img
                  key={index}
                  className="Thumbnail"
                  src={imageUrl}
                  alt="ZorigFoundation"
                />
              </LazyLoad>
            </a>
          ))}
        </div>
      </div>
    </header>
  </div>
);
