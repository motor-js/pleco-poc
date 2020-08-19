import React from "react";
import { SidebarNext, SmartHeading, NavItem } from "@motor-js/core";
import { navItems } from "./navItems";

const Logo = require("../images/plecologonew.svg");

const NavContent = (props) => {
  return (
    <SidebarNext
      headerHeight="200px"
      pageWrapId={"page-wrap"}
      outerContainerId={"App"}
      type="scaleRotate"
      header={
        <div>
          <a href="http://motor-js.io//">
            <img src={Logo} style={{ width: "90%" }} alt={"logo"} />
          </a>
          <SmartHeading
            type="appName"
            size={"24px"}
            margin={"5px 10px 5px 0px"}
          />
        </div>
      }
      footer={
        <SmartHeading size={"16px"} color={"brand"} asDate>
          Last Reloaded :
        </SmartHeading>
      }
    >
      {navItems.map((item) => {
        return (
          <NavItem
            path={item.path}
            name={item.name}
            css={item.css}
            key={item.key}
          ></NavItem>
        );
      })}
    </SidebarNext>
  );
};

export default NavContent;
