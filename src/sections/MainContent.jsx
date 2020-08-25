import React from "react";
import {
  // useScreenSize,
  CurrentSelections,
  Grid,
  KPI,
  Column,
  Box,
} from "@motor-js/core";

const MainContent = () => {

  return (
    <Box gridArea='main' width='100%'>
      <CurrentSelections style={{ width: '100%' }} width='100%' />
    </Box>
  );
};

export default MainContent;
