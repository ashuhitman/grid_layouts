import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./Layout/GridLayout";
import MuiGridLayout from "./Layout/MuiGridLayout";
import FlexLayout from "./Layout/FlexLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* layput usng display grid property */}
      {/* <Layout /> */}
      {/* layout using flexbox */}
      {/* <FlexLayout /> */}
      {/* layout using mui grid */}
      <MuiGridLayout />
    </>
  );
}

export default App;
