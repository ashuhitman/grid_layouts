import React from "react";
import styles from "./flexlayout.module.css";
import { Box } from "@mui/material";
import CardItem from "../component/CardItem";
import { CheckCircle, HourglassBottom } from "@mui/icons-material";

function FlexLayout() {
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
      <Box className={styles.right}>right sidebar</Box>
    </Box>
  );
}

export default FlexLayout;
