import React from "react";
import {
  // useScreenSize,
  CurrentSelections,
  Grid,
  KPI,
  Column,
} from "@motor-js/core";

import Background from "../../images/background1.jpg";
const PageContent = () => {
  // const { screen } = useScreenSize();

  // let flexDirection = "column";
  // if (screen === "desktop" || screen === "largeDesktop") {
  //   flexDirection = "row";
  // }

  // const boxProps = {
  //   backgroundColor: "white",
  //   elevation: "0 8px 6px -6px #ccc",
  //   margin: "5px",
  //   borderRadius: "8px",
  // };

  return (
    <Grid
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no - repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
      rows={["70px", "120px", "auto"]}
      columns={["repeat(8, 1fr)"]}
      areas={[
        [
          "selections selections selections selections selections selections selections selections ",
        ],
        ["kpi1 kpi1 kpi2 kpi2 kpi3 kpi3 kpi4 kpi4"],
        ["column column column column column column column column"],
      ]}
      // fill
      // border
    >
      <CurrentSelections minHeight="60px" gridArea="selections" />
      <KPI
        cols={[
          "=Sum( { $< [Claim Notification Date.autoCalendar.InYTD]={1} ,[Claim Notification Date.autoCalendar.YearsAgo]={0} > } [ClaimCounter] )",
        ]}
        label="Claims Opened (YTD)"
        size="small"
        gridArea="kpi1"
      />
      <KPI
        cols={[
          "=Sum( { $< [Claim Settled Date.autoCalendar.InYTD]={1} ,[Claim Settled Date.autoCalendar.YearsAgo]={0} > } [ClaimCounter] )",
        ]}
        label="Claims Opened (YTD)"
        size="small"
        gridArea="kpi2"
      />
      <KPI
        cols={[
          {
            qField:
              "=Sum( { $< [Claim Notification Date.autoCalendar.InYTD]={1}, [Claim Notification Date.autoCalendar.YearsAgo]={0} > } [Total Claim Cost])/1000000",
            qLabel: "Margin Amount",
            qNumType: "M",
            qNumFmt: "$#,##0",
          },
        ]}
        label="Claims Opened (YTD)"
        size="small"
        gridArea="kpi3"
      />
      <KPI
        cols={[
          {
            qField:
              "=Avg( { $< [Claim Notification Date.autoCalendar.InYTD]={1} ,[Claim Notification Date.autoCalendar.YearsAgo]={0} > } [Total Claim Cost])",
            qNumType: "M",
            qNumFmt: "$#,##0",
          },
        ]}
        label="Claims Opened (YTD)"
        size="small"
        gridArea="kpi4"
      />
      <Column
        // height={height}
        height="425px"
        cols={[
          {
            qField: "[Claim Notification Date.autoCalendar.Year]",
            qLabel: "Claim Year",
          },
          {
            qField: "[Claim Type]",
            qLabel: "Claim Type",
          },
          {
            qField:
              "=Sum( { $< [Claim Notification Date.autoCalendar.InYTD]={1} > } [ClaimCounter] )",
            qLabel: "Claims Opened (All Yrs YTD)",
          },
        ]}
        // stacked={true}
        suppressZero={true}
        textOnAxis="xAxis"
        // border={false}
        // chartColor={chartColor}
        gridArea="column"
      />
    </Grid>
  );
};

export default PageContent;
