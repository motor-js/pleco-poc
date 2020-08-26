import React from "react";
import styled from 'styled-components'
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

  const { screen } = useScreenSize()

  //grid area rows
  const rows =  ["50px","30%", "30%"]

  //grid area cols
  const cols = {
    mobile: ["auto"],
    tablet: ["auto"],
    desktop: ["auto","auto","auto","auto","auto"],
    largeDesktop: ["0.2fr", "1fr"]
  }

  //grid area
  const areas = {
    mobile: [["hd"],["mn"]],
    tablet: [["hd"],["mn"]],
    desktop:
      [
        ["sel","sel","sel","sel","sel"],
        ["kpi1","kpi2","bar1","bar1","bar1"],
        ["kpi3","kpi4","bar2","bar2","bar2"]
      ],
    largeDesktop:
    [["sd","hd"],
    ["sd", "mn"]],
  }


  return (
    <Box gridArea='main' width='100%'>
      <Grid       
        rows={rows}
        columns= {cols.desktop}
        areas={areas.desktop}
        fill
        border
        gap='10px'
      >
        <Box gridArea='sel'>
          <StyledSelections size='small' width='100%' maxHeight='40px' minHeight='40px'/>
        </Box>
        <Box gridArea='kpi1' backgroundColor='red'/>
        <Box gridArea='kpi2' backgroundColor='yellow'/>
        <Box gridArea='kpi3' backgroundColor='blue'/>
        <Box gridArea='kpi4' backgroundColor='green'/>
        <Box gridArea='bar1' backgroundColor='violet'/>
        <Box gridArea='bar2' backgroundColor='orange'/>
     </Grid>
    </Box>
  );
};

export default MainContent;
