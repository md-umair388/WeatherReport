import React, { Component } from "react";

import PrimarySearchAppBar from "./components/NavBar";
import Cards from "./components/Cards";
import Box from "@material-ui/core/Box";

class FirstShow extends Component {
  render() {
    return (
      <div className="FirstShow">
        <PrimarySearchAppBar />
        <div className="Cards">
          <div style={{ width: "100%" }}>
            <Box
              display="flex"
              flexWrap="wrap"
              flexDirection="row"
              p={0.2}
              m={1}
              bgcolor="background.paper"
            >
              <Box p={0.2} bgcolor="grey.300">
                <Cards />
              </Box>
              <Box p={0.2} bgcolor="grey.300">
                <Cards />
              </Box>
              <Box p={0.2} bgcolor="grey.300">
                <Cards />
              </Box>
              <Box p={0.2} bgcolor="grey.300">
                <Cards />
              </Box>
              <Box p={0.2} bgcolor="grey.300">
                <Cards />
              </Box>
              <Box p={0.2} bgcolor="grey.300">
                <Cards />
              </Box>
            </Box>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstShow;
