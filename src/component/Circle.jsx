import { Box } from "@mui/material";
import React from "react";

function Circle({ children, color }) {
  return (
    <Box
      sx={{
        height: "35px",
        width: "35px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: !color ? "red" : color,
        color: "white",
      }}
    >
      {children}
    </Box>
  );
}

export default Circle;
