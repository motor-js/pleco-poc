import React from "react";
import { Table, CurrentSelections, Grid } from "@motor-js/core";

import Background from "../../images/background1.jpg";
const PageContent = () => {
  return (
    <Grid
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no - repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
      rows={["80px", "auto"]}
      columns={["repeat(1, 1fr)"]}
      areas={[["selections"], ["table"]]}
      // fill
      // border
    >
      <CurrentSelections minHeight="60px" gridArea="selections" />

      <Table
        size="small"
        // height="100%"
        height="590px"
        headerAlignment="leftRight"
        bodyAlignment="leftRight"
        interactiveSort
        pageHeight={25}
        columns={[
          {
            dimensions: [
              {
                qField: "[Vehicle Type]",
                qLabel: "Vehicle Type",
                // width: "5%",
                // width: "150px",
              },
              {
                qField: "[Claim Settled Date]",
                qLabel: "Claim Settled Date",
                // width: "5%",
              },
              {
                qField: "[Claim Type]",
                qLabel: "Claim Type",
                // width: "5%",
              },

              {
                qField: "[Claim Sub-Type]",
                qLabel: "Claim Sub-Type",
                // width: "7.5%",
              },
              {
                qField: "[Claim Status]",
                qLabel: "Claim Status",
                // width: "5%",
              },
            ],
            measures: [
              {
                qField: "=Sum([Total Claim Cost])",
                qLabel: "Claim Cost",
                // width: "5%",
                qNumType: "M",
                qNumFmt: "$#,##0.00",
              },
            ],
          },
        ]}
        bandedRows
        gridArea="table"
      />
    </Grid>
  );
};

export default PageContent;
