import React from "react";
import { SidebarNext, Filter, Button } from "@motor-js/core";
import { Filter as FilterIcon } from "@styled-icons/feather";

const Logo = require("../images/logo.png");
const Qlik = require("../images/Qlik.png");

const FilterContent = (props) => {
  return (
    <SidebarNext
      pageWrapId={"page-wrap"}
      outerContainerId={"App"}
      right
      borderRadius="20px 0px 0px 20px"
      openIcon="filter"
      openIconColor="brand"
      header={
        <div style={{ fontSize: "20px", color: "#01bfff" }}>
          <FilterIcon size={25} /> Filters
        </div>
      }
      footer={
        <div
          style={{
            color: "#01bfff",
            fontSize: "24px",
          }}
        >
          <span>
            <a href="http://motor-js.io//">
              <img src={Logo} style={{ width: "10%" }} alt={"logo"} />
            </a>{" "}
            Powered by{" "}
            <img src={Qlik} style={{ width: "10%" }} alt={"Qlik logo"} />
          </span>
        </div>
      }
    >
      <Filter width="100%" label="Claim Status" dimension={["Claim Status"]} />
      <Filter width="100%" label="Claim Type" dimension={["Claim Type"]} />
      <Filter
        width="100%"
        label="Claim Sub-Type"
        dimension={["Claim Sub-Type"]}
      />
      <Filter width="100%" label="Broker" dimension={["BrokerName"]} />
      <Button type="clearSelections">Clear Selections</Button>
    </SidebarNext>
  );
};

export default FilterContent;
