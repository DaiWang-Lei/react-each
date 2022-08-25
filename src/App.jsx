import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "antd";
import TButton from "./components/TButton";
import ATable from "./components/ATable";

const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
function App() {
  return (
    <div className="App">
      <ATable data={data} />
    </div>
  );
}

export default App;
