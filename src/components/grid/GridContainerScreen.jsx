import { Grid } from "@mui/material";
import React from "react";
import {  gridSpacing } from "src/app/constant";

function GridContainerScreen({ children }) {
  return (
    <Grid
      container
      spacing={gridSpacing}
      sx={{
        width: {
          xs: "100%",
        },
      }}
    >
      {children}
    </Grid>
  );
}

export default GridContainerScreen;
