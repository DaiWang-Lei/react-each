import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "antd";
import TButton from "./components/TButton";
import ATable from "./components/ATable";
import Home from "./pages/Tab";
import Out from "./pages/Out";


function App() {
  return (
    <div className="p-10  ">
      <ATable/>
      {/* <Home/> */}
      {/* <Out/> */}
    </div>
  );
}

export default App;
