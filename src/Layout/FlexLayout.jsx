import React from "react";
import styles from "./flexlayout.module.css";
import { Box, Typography } from "@mui/material";
import CardItem from "../component/CardItem";
import {
  CheckCircle,
  HourglassBottom,
  PictureAsPdfRounded,
} from "@mui/icons-material";
import ActivityComponent from "../component/ActivityComponent";

function FlexLayout() {
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
    <Box className={styles.box}>
      <Box className={styles.left}>left sidebar</Box>
      <Box className={styles.main}>
        <Box className={styles.mainTop}>
          {items.map((item, index) => (
            <CardItem key={index + item.number} item={item} />
          ))}
        </Box>
        <Box className={styles.mainContent}>
          <Box className={styles.mainLeft}>
            <Box></Box>
            <Box></Box>
          </Box>
          <Box className={styles.mainRight}>left right</Box>
        </Box>
      </Box>
      <Box className={styles.right}>
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

export default FlexLayout;
