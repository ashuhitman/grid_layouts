import { Box, Grid } from "@mui/material";
import React from "react";
import { CheckCircle, HourglassBottom } from "@mui/icons-material";
import CardItem from "../component/CardItem";

function MuiGridLayout() {
  const items = [
    {
      number: 1250,
      text: "Job Applied",
      icon: <CheckCircle />,
      color: "orange",
    },
    {
      number: 12,
      text: "Job Rejected",
      icon: <HourglassBottom />,
      color: "violet",
    },
    {
      number: 1,
      text: "Job Accepted",
      icon: <HourglassBottom />,
      color: "green",
    },
    {
      number: 2,
      text: "Convoy Created",
      icon: <CheckCircle />,
      color: "skyblue",
    },
  ];
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid
        item
        sm={12}
        lg={2}
        sx={{
          display: {
            xs: "none",
            lg: "block",
            boxShadow:
              "0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
          },
        }}
      >
        left sidebar
      </Grid>
      <Grid
        item
        xs={12}
        lg={8}
        sx={{
          paddingInline: "1rem",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Box
            sx={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              },
            }}
          >
            {items.map((item, index) => (
              <CardItem key={index + item.number} item={item} />
            ))}
          </Box>
          <Grid container sx={{ flex: 1 }}>
            <Grid item xs={12} lg={4} sx={{ marginTop: "1rem" }}>
              <Box
                sx={{
                  height: "100%",
                  boxShadow:
                    "0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
                  marginRight: { lg: "1rem", xs: "0px" },
                }}
              >
                left main
              </Box>
            </Grid>
            <Grid item xs={12} lg={8} sx={{ marginTop: "1rem" }}>
              <Box
                sx={{
                  height: "100%",
                  boxShadow:
                    "0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
                }}
              >
                right main
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid
        sm={12}
        item
        lg={2}
        sx={{
          display: { xs: "none", lg: "block" },
          boxShadow:
            "0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
        }}
      >
        right sidebar
      </Grid>
    </Grid>
  );
}

export default MuiGridLayout;
