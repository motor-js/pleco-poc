import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Background from "./images/background1.jpg";

import "./App.css";
import {
  FooterContent,
  HeaderContent,
  FilterContent,
  NavContent,
  MainContent,
  PageContent,
} from "./sections";
import { Grid, Box, SmartHeading } from "@motor-js/core";

const Logo = require("./images/plecologonew.svg");

function App() {
  return (
    <Router>
      {/** NAVBAR */}
      <NavContent />
      <FilterContent />
      <div id="App">
        <Grid
          style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: "no - repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
          rows={["60px", "auto", "30px"]}
          cols={["auto"]}
          areas={[["header"], ["main"], ["footer"]]}
          backgroundColor="altGray1"
          id="page-wrap"
        >
          {/** HEADER */}
          <HeaderContent>
            <SmartHeading type="free" margin="0 0 0 45px">
              <a href="https://plecosystems.com/">
                <img src={Logo} style={{ width: "100%" }} alt={"logo"} />
              </a>
            </SmartHeading>
          </HeaderContent>
          {/** MAIN */}
          <Box gridArea="main">
            <Switch>
              <Route exact path="/" component={MainContent} />
              <Route path="/sales" component={PageContent} />
              {/* <Route component={NoMatch} /> */}
            </Switch>
          </Box>
          {/** FOOTER */}
          <FooterContent>
            <SmartHeading type="free" color="brandLight" level={3}>
              made with
              <span
                role="img"
                aria-label="heart_emoji"
                style={{ padding: "0px 5px" }}
              >
                ❤️
              </span>
              by motor
            </SmartHeading>
          </FooterContent>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
