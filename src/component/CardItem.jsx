import { Box, Card, CardContent } from "@mui/material";
import React from "react";
import Circle from "./Circle";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

function CardItem({ item }) {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0.5rem 1rem",
      }}
    >
      <Box
        sx={{
          height: "4rem",

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h3>{item.number}</h3>
        <p>{item.text}</p>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Circle color={item.color}>{item.icon}</Circle>
      </Box>
    </Card>
  );
}

export default CardItem;
