import { Box } from "@mui/material";
import React from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

function ActivityComponent({ activity, color }) {
  return (
    <Box
      sx={{
        margin: "calc(13px/2)",
        position: "relative",
        paddingBottom: "0.3rem",
        paddingInline: "1rem", // Adjust as needed
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "1px",
          background: "linear-gradient(to bottom, white, gray, white)",
          zIndex: -1,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: "2px",
          left: "0px",
          width: "13px",
          height: "13px",
          transform: "translateX(-50%)",
          borderRadius: "50%",
          backgroundColor: color,
          zIndex: 1,
        },
      }}
    >
      <Box>
        <h4>{activity.title}</h4>
      </Box>
      <Box sx={{ marginBlock: "1rem" }}>{activity.text}</Box>
      <Box>{activity.icon}</Box>
    </Box>
  );
}

export default ActivityComponent;
