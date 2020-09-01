import React from "react";
import { Filter, Button } from "@motor-js/core";

const FilterContent = (props) => {
  return (
    <div>
      <Filter
        width="100%"
        label="Employee Name"
        dimension={["Employee Name"]}
      />
      <Filter width="100%" label="Roles" dimension={["Roles"]} />
      <Filter width="100%" label="Employee" dimension={["Employee"]} />
      <Filter width="100%" label="Task" dimension={["Task"]} />
      <Filter width="100%" label="Sprint" dimension={["Sprint"]} />
      <Filter width="100%" label="Year" dimension={["Year"]} />
      <Filter width="100%" label="MonthYear" dimension={["MonthYear"]} />
      <Button type="clearSelections">Clear Selections</Button>
    </div>
  );
};

export default FilterContent;
