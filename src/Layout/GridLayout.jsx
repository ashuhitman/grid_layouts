import React from "react";
import { Box, Card, Typography } from "@mui/material";
import styles from "./Layout.module.css";
import CardItem from "../component/CardItem";
import {
  CheckCircle,
  HourglassBottom,
  PictureAsPdfRounded,
} from "@mui/icons-material";
import ActivityComponent from "../component/ActivityComponent";

function Layout() {
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
    <Box className={styles.container}>
      {/* <Box className={styles.header}></Box>
      <Box className={styles.header}></Box> */}
      <Box className={styles.leftSidebar}>left sidrbar</Box>
      <Box className={styles.mainTop}>
        {items.map((item, index) => (
          <CardItem key={index + item.number} item={item} />
        ))}
      </Box>
      <Box className={styles.mainLeftOne}>main left One</Box>
      <Box className={styles.mainLeftTwo}>main left Two</Box>
      <Box className={styles.mainRight}>main right</Box>
      <Box className={styles.rightSidebar}>
        <Typography variant="h6">User Activity Timeline</Typography>

        {activities.map((activity, i) => (
          <ActivityComponent
            key={activity.title + i}
            activity={activity}
            color={activity.color}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Layout;
