import { Box, useTheme } from "@mui/material";
import React from "react";

function RoundedBox({ children, ...props }) {
  const theme = useTheme();
  return (
    <Box
      style={{ borderRadius: 12, overflow: "hidden" }}
      border={`1px solid ${
        theme.palette.mode === "dark" ? "#ffffff20" : "#00000010"
      }`}
      {...props}
    >
      {children}
    </Box>
  );
}

export default RoundedBox;
