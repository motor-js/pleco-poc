import React from "react";
import "./App.css";
import {
  HeaderContent,
 // FilterContent,
  MainContent,
} from "./sections";
import { Grid, Box } from "@motor-js/core";

function App() {

  return (
    <Grid
      rows={["60px", "auto", "30px"]}
      cols={["auto"]}
      areas={[["header"], ["main"]]}
      backgroundColor="altGray1"
    >
      <HeaderContent />
      <MainContent />
    </Grid>
  );
}

export default App;
