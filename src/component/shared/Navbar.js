import React from "react";
import TopBar from "./TopBar";
import MenuBar from "./MenuBar";

const Navbar = () => {
  return (
    <header id="masthead" className="header ttm-header-style-01">
      <div className="ttm-header-wrap">
        <div
          id="ttm-stickable-header-w"
          className="ttm-stickable-header-w clearfix"
        >
          <TopBar />

          <MenuBar />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
