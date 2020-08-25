
import React from "react";
import { Filter, Button } from "@motor-js/core";

const FilterContent = (props) => {
  return (
    <div>
      <Filter width="100%" label="Claim Status" dimension={["Claim Status"]} />
      <Filter width="100%" label="Claim Type" dimension={["Claim Type"]} />
      <Filter width="100%" label="Broker" dimension={["BrokerName"]} />
      <Button type="clearSelections">Clear Selections</Button>
    </div>
  );
};

export default FilterContent;
