import React from "react";
import { NestLogo, HopLogo } from "../assets";

export const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Nest-logo-container">
          <NestLogo />
        </div>
        <h1>Demo Day</h1>
      </header>
      <div className="Card-container">
        <a href={"hop-1"}>
          <div className="Card">
            <HopLogo />
            <h1>1</h1>
          </div>
        </a>
        <a href={"hop-2"}>
          <div className="Card">
            <HopLogo />
            <h1>2</h1>
          </div>
        </a>
      </div>
    </div>
  );
};
