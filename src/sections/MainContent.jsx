import React from "react";
import styled from "styled-components";
import {
  // useScreenSize,
  CurrentSelections,
  Grid,
  KPI,
  Column,
  Box,
  useScreenSize,
} from "@motor-js/core";

const StyledSelections = styled(CurrentSelections)`
  width: 100%;
  margin: 100px;
`;

const MainContent = () => {
  const { screen } = useScreenSize();

  //grid area rows
  const rows = {
    mobile: ["50px", "repeat(4,1fr)"],
    tablet: ["50px", "repeat(4,1fr)"],
    desktop: ["50px", "30%", "30%"],
    largeDesktop: ["50px", "30%", "30%"],
  };

  //grid area cols
  const cols = {
    mobile: ["repeat(2,1fr)"],
    tablet: ["repeat(2,1fr)"],
    desktop: ["repeat(5,1fr)"],
    largeDesktop: ["repeat(5,1fr)"],
  };

  //grid area
  const areas = {
    mobile: [
      ["sel", "sel"],
      ["kpi1", "kpi2"],
      ["kpi3", "kpi4"],
      ["bar1", "bar1"],
      ["bar2", "bar2"],
    ],
    tablet: [
      ["sel", "sel"],
      ["kpi1", "kpi2"],
      ["kpi3", "kpi4"],
      ["bar1", "bar1"],
      ["bar2", "bar2"],
    ],
    desktop: [
      ["sel", "sel", "sel", "sel", "sel"],
      ["kpi1", "kpi2", "bar1", "bar1", "bar1"],
      ["kpi3", "kpi4", "bar2", "bar2", "bar2"],
    ],
    largeDesktop: [
      ["sel", "sel", "sel", "sel", "sel"],
      ["kpi1", "kpi2", "bar1", "bar1", "bar1"],
      ["kpi3", "kpi4", "bar2", "bar2", "bar2"],
    ],
  };

  return (
    <Box gridArea="main" width="100%">
      <Grid
        rows={rows[screen]}
        columns={cols[screen]}
        areas={areas[screen]}
        fill
      >
        <Box gridArea="sel">
          <StyledSelections
            size="small"
            width="100%"
            maxHeight="40px"
            minHeight="40px"
          />
        </Box>
        {/* <Box gridArea='kpi1' backgroundColor='red'/> */}
        <KPI
          margin="10px"
          cols={["=SUM([Forcast Day])"]}
          label="Forecast"
          size="small"
          // border={false}
          backgroundColor="white"
          gridArea="kpi1"
          // qNumType="M"
          // qNumFmt="#,##0"
          // roundNum={true}
          // precision={false}
          // border={false}
        />

        <KPI
          margin="10px"
          cols={["=SUM([Hours])"]}
          label="Hours"
          size="small"
          // border={false}
          backgroundColor="white"
          gridArea="kpi2"
          // border={false}
        />
        <KPI
          margin="10px"
          cols={[
            "=Num(COUNT({<[Issue Type]={'Sub-task'}>}[Issue Type]),'#,##0')",
          ]}
          label="Total Subtasks"
          size="small"
          // border={false}
          backgroundColor="white"
          gridArea="kpi3"
          // border={false}
        />
        <KPI
          margin="10px"
          cols={[
            "=COUNT({<[Issue Type]={'Sub-task'},[Status]={'Done'}>}[Issue Type])",
          ]}
          label="Completed Subtasks"
          size="small"
          // border={false}
          backgroundColor="white"
          gridArea="kpi4"
          // border={false}
        />
        <Box gridArea="bar1" backgroundColor="violet" />
        <Box gridArea="bar2" backgroundColor="orange" />
      </Grid>
    </Box>
  );
};

export default MainContent;
