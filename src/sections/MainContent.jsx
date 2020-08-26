import React from "react";
import {
  // useScreenSize,
  CurrentSelections,
  Grid,
  KPI,
  Column,
  Box,
  useScreenSize,
} from "@motor-js/core";

const MainContent = () => {

  const { screen } = useScreenSize()

  //grid area rows
  const rows =  ["60px","auto"]

  //grid area cols
  const cols = {
    mobile: ["auto"],
    tablet: ["auto"],
    desktop: ["0.2fr", "1fr"],
    largeDesktop: ["0.2fr", "1fr"]
  }

  //grid area
  const areas = {
    mobile: [["hd"],["mn"]],
    tablet: [["hd"],["mn"]],
    desktop:
      [["sd","hd"],
      ["sd", "mn"]],
    largeDesktop:
    [["sd","hd"],
    ["sd", "mn"]],
  }


  return (
    <Box gridArea='main' width='100%'>
     <Grid >

     </Grid>
    </Box>
  );
};

export default MainContent;
