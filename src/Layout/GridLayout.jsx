import React from "react";
import { Box, Card } from "@mui/material";
import styles from "./Layout.module.css";
import CardItem from "../component/CardItem";
import { CheckCircle, HourglassBottom } from "@mui/icons-material";

function Layout() {
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
      <Box className={styles.rightSidebar}>right sidebar</Box>
    </Box>
  );
}

export default Layout;
