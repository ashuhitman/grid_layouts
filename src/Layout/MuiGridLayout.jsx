import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import {
  CheckCircle,
  HourglassBottom,
  PictureAsPdfRounded,
} from "@mui/icons-material";
import CardItem from "../component/CardItem";
import ActivityComponent from "../component/ActivityComponent";

function MuiGridLayout() {
  const activities = [
    {
      title: "Earned 500 points",
      text: "Earned 500 points",
      icon: <PictureAsPdfRounded />,
      color: "orange",
      iconText: "",
    },
    {
      title: "Joined the program",
      text: "Earned 500 points",
      icon: <PictureAsPdfRounded />,
      color: "red",
      iconText: "",
    },
    {
      title: "9 invoices has been paid",
      text: "Earned 500 points",
      icon: <PictureAsPdfRounded />,
      color: "green",
      iconText: "",
    },
    {
      title: "order #423232",
      text: "Earned 500 points",
      icon: <PictureAsPdfRounded />,
      color: "yellow",
      iconText: "",
    },
  ];
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
          paddingInline: { xs: 0, lg: "1rem" },
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
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  height: "100%",
                  marginRight: { lg: "1rem", xs: "0px" },
                }}
              >
                <Box
                  sx={{
                    boxShadow:
                      "0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
                  }}
                ></Box>
                <Box
                  sx={{
                    flex: 1,
                    boxShadow:
                      "0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
                  }}
                ></Box>
                <Box
                  sx={{
                    flex: 1,
                    boxShadow:
                      "0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
                  }}
                ></Box>
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
          padding: "1rem",
          display: { xs: "none", lg: "block" },
          boxShadow:
            "0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
        }}
      >
        <Typography variant="h6">User Activity Timeline</Typography>
        {activities.map((activity, i) => (
          <ActivityComponent
            key={activity.title + i}
            activity={activity}
            color={activity.color}
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default MuiGridLayout;
