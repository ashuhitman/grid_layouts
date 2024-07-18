import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./Layout/GridLayout";
import MuiGridLayout from "./Layout/MuiGridLayout";
import FlexLayout from "./Layout/FlexLayout";
import { Box, Button, ButtonGroup } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ButtonGroup>
          <Button
            sx={{
              backgroundColor: count === 0 ? "orange" : "",
              color: count === 0 ? "white" : "",
            }}
            onClick={() => setCount(0)}
          >
            CSS Grid
          </Button>
          <Button
            sx={{
              backgroundColor: count === 1 ? "orange" : "",
              color: count === 1 ? "white" : "",
            }}
            onClick={() => setCount(1)}
          >
            Flex Grid
          </Button>
          <Button
            sx={{
              backgroundColor: count === 2 ? "orange" : "",
              color: count === 2 ? "white" : "",
            }}
            onClick={() => setCount(2)}
          >
            MUI grid
          </Button>
        </ButtonGroup>
      </Box>
      {/* layput usng display grid property */}
      {count === 0 && <Layout />}
      {/* layout using flexbox */}

      {count === 1 && <FlexLayout />}

      {/* layout using mui grid */}
      {count === 2 && <MuiGridLayout />}
    </>
  );
}

export default App;
