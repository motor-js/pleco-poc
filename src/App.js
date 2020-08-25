import React from "react";
import "./App.css";
import {
  HeaderContent,
 // FilterContent,
  MainContent,
} from "./sections";
import { Grid, Box } from "@motor-js/core";

function App() {

  document.title = "PLECOSYSTEMS";

  return (
    <div id='anchor'>
      <Grid
        rows={["60px", "auto"]}
        cols={["auto"]}
        areas={[["header"], ["main"]]}
        backgroundColor="white"
      >
        <HeaderContent />
        <MainContent />
      </Grid>
    </div>
  );
}

export default App;
